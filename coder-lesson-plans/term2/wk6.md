# Schedule

## Thu morning

- standup
- kahoot?
- morning challenge?
- continue rails codealong
  - unit tests
  - active record and cloudinary
    - set up cloudinary account
    - set up rails active storage
    - add cloudinary gems

  - Use any extra time for updating styles/views



## Thu Arvo

- some kind of activity/challenge?

## Fri morning

- do mindblowing vscode dev tools demo
- standup (blocker is not being able to answer workbook questions)
- scribble on whiteboard about rails architecture (including cloudinary)
- scribble a couple of other architectures (eg react)
- rails codealong
  - stripe integration
  - continue building

Agenda - morning

9am - morning challenge
  - Create a Stripe user, and then create a business account for card central
  - find your Stripe public and private API keys
9:15 - standup
9:30 - Main lesson
  - quick discussion of software architecture (in general, plus Rails specifically)
  - Rails codealong
    - Stripe integration
    - Continue building app
      - views and styling
      - business logic

Afternoon

- CS fundamentals review with Cat
- Workbook Q&A session with Alex B

## Fri arvo

- workbook conference?
- Cat math review

# 2-sided marketplace - continue

## Planning

- Reminder to create trello tickets

## User stories

- write out a couple of user stories, just to give a refresher on them

## Clean up from last week

- talk about how to properly add bootstrap (and how/why what we did won't support a few features like modals)
- https://blog.makersacademy.com/how-to-install-bootstrap-and-jquery-on-rails-6-da6e810c1b87


## Testing

- run rspec and show how some listings tests (views) are now failing
- fix the tests by creating user and adding
```ruby
before(:each) do
  user = assign(:user, User.create!(
    name: "bob",
    email: "email@address.com",
    password: "Password"
  ))
```

- Mention that factorybot gem can be used to make this process more dry
- add one basic business logic test on listings model (TDD style)
- can create listing
- requires title
```ruby
#listing_spec.rb
RSpec.describe Listing, type: :model do
  before(:each) do
    @user = User.create!(
      name: "bob",
      email: "email@address.com",
      password: "Password"
    )
  end

  it "allows creation of listings" do
    listing = Listing.create!(
      title: "MyString",
      description: "MyText",
      price: 5,
      sold: false,
      user: @user
    )
    expect(listing.price).to be(5)
  end

  it "requires title" do
    listing = Listing.create!(
      title: nil,
      description: "MyText",
      price: 5,
      sold: false,
      user: @user
    )

    expect(listing.valid?).to be(false)
  end
end

# listing.rb
validates :title, presence: true
```

## image upload - active record

- install active storage
- `$ rails active_storage install`
- `$ rails db:migrate`
- update the listings model to have images attached
```ruby
has_one_attached :photo
```
- add file field to new listings form
```erb
# app/views/listings/new.html.erb
<p>
  <%= form.label :photo %>
  <%= form.file_field :photo %>
</p>
```
- pass the data to the controller using attach
```ruby
@listing.photo.attach(params[:listing][:photo])
```
- use the feature by creating a new listing
- confirm it worked in rails console `Listing.last.photo.attached?`
- add photo to view for #show so we can see it
```erb
<%= image_tag @listing.photo %>
```

## image upload - cloudinary

- while we could in theory store images in a database, it's not a good idea
- likewise, we could save them in heroku file system, but it's not well set up for that
- set up cloudinary account
- install cloudinary gems
- `gem 'cloudinary'`
- `gem 'activestorage-cloudinary-service'`
- get credentials from cloudinary dashboard and put into credentials
`EDITOR='code --wait' rails credentials:edit`
  ```yml
cloudinary:
  cloud_name: YOUR_CLOUD_NAME
  api_key: YOUR_API_KEY
  api_secret: YOUR_API_SECRET
  ```
- then dig crendentials in storage.yml
```yml
cloudinary:
  service: Cloudinary
  cloud_name: <%= Rails.application.credentials.dig(:cloudinary, :cloud_name) %>
  api_key: <%= Rails.application.credentials.dig(:cloudinary, :api_key) %>
  api_secret: <%= Rails.application.credentials.dig(:cloudinary, :api_secret) %>
```
- get master key from config/master.key and add to heroku deployment
`$ heroku config:set RAILS_MASTER_KEY=blah`
- change development.rb and production.rb to use cloudinary
- mention that images can be stored locally for development, but I recommend cloudinary, in order to match dev and prod environments
- ```ruby
  # production.rb
  config.active_storage.service = :cloudinary

  # development.rb
  config.active_storage.service = :cloudinary
  ```

- confirm that it's working locally
- deploy to heroku, migrate, confirm that image upload is working

## Stripe

- create stripe user, and card central account
- install stripe gem `bundle add stripe`
- add credentials
```yml
stripe:
  secret_key:
  public_key:
```
- create a `stripe.rb` file in config/initializer and add
```ruby
Stripe.api_key = Rails.application.credentials.dig(:stripe, :secret_key)
```
- Mention we're using Stripe's 'checkout'. A simple system which redirects user to strip website to make the payment. Then when it's successful, redirects back to ours.
- show docs for this https://stripe.com/docs/api/checkout/sessions
- Add Stripe session to the show method on the controller
- mention how we don't need to modify the price since stripe takes payments in cents
```ruby
def show
  session = Stripe::Checkout::Session.create(
      payment_method_types: ['card'],
      customer_email: current_user.email,
      line_items: [{
          name: @listing.title,
          description: @listing.description,
          amount: @listing.price,
          currency: 'aud',
          quantity: 1,
      }],
      payment_intent_data: {
          metadata: {
              user_id: current_user.id,
              listing_id: @listing.id
          }
      },
      success_url: "#{root_url}payments/success?listingId=#{@listing.id}",
      cancel_url: "#{root_url}listings"
  )

  @session_id = session.id
end
```
- add the view (including JS)
```erb
<script src="https://js.stripe.com/v3/"></script>
<button data-stripe="payment">Buy Now<%= number_to_currency(@listing.price / 100.0) %></button>

<script>
  document
    .querySelector("[data-stripe='payment']")
    .addEventListener("click", () => {
      const stripe = Stripe(
        "<%= Rails.application.credentials.dig(:stripe, :public_key) %>"
      );

      stripe.redirectToCheckout({
        sessionId: "<%= @session_id %>"
      });
    });
</script>
```
- create the payments route, controller, view
```ruby
# routes.rb
get "/payments/success", to: "payments#success"

# views/payments/success.html.erb
"You've successfully made a payment! <%= link_to "Go To Listings", listings_path %>"

# app/controllers/payments_controller.rb
class PaymentsController < ApplicationController
  def success
  end
end
```

## Optional extra - webhook to determine paid status

- sign up for ultrahooks
- run `$ ultrahook stripe 3000` to point to localhost 3000
- create webhook on stripe from dashboard
  - set endpoint `https://cardcentral-stripe.ultrahook.com/payments/webhook`
  - send event `checkout.session.completed`
- create route and controller method for webhook
`config/routes.rb`
```ruby
post "/payments/webhook", to: "payments#webhook"
```

`app/controllers/payments_controller.rb`
```ruby
class PaymentsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:webhook]

    def success

    end

    def webhook
      puts "webhook params:"
      p params
      payment_id = params[:data][:object][:payment_intent]
      payment = Stripe::PaymentIntent.retrieve(payment_id)
      listing_id = payment.metadata.listing_id
      user_id = payment.metadata.user_id

      p "listing id " + listing_id
      p "user id " + user_id

      status 200
    end
end
```

### Extra - add google and apple pay as extra payment options

## Build features from wireframes

- fix the name not saving bug (devise docs)
```ruby
class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    devise_parameter_sanitizer.permit(:account_update, keys: [:name])
  end
end
```
- modify existing views
- enforce some sensible business rules (eg need to be logged in to see create listing view)
  - mention that the rails challenges have great examples of rspec unit testing
- profile page

## Testing cont.

- write some unit tests for business logic related to User and Listing
  - only logged in users can create new listings
  - ```ruby
      it "redirects to login for users who aren't logged in" do
      get new_listing_url
      expect(response).should redirect_to '/users/sign_in'
    end
    ```
  - solve this TDD-style, by adding before_action to controller
  - ```ruby
    before_action :authenticate_user!, except: [:index, :show]
    ```
  - fix tests that are broken by this

1. only logged in users can do the following actions
  - create listings
  
- Add `before_action :authenticate_user!, only: [:new, :edit, :create, :update, :destroy]` to the listings controller, and show how it breaks the existing unit tests
- Add devise helpers to `rails_helper.rb`
```ruby
RSpec.configure do |config|
  config.include Devise::Test::ControllerHelpers, type: :view
  config.include Devise::Test::ControllerHelpers, type: :controller
  config.include Devise::Test::IntegrationHelpers, type: :request
end
```

2. only owners of listings can do following actions
  - edit
  - destroy

## seeds

- create some seed data for a test user and seed it
- `$ rails db:seed`

## authorisation

- set up admin vs user roles

## Extras

- CI pipeline
- authorisation
- search, sort, filter
- mobile-first designs
- Location
- chat between buyers and sellers
- 3rd party API (eg omniauth, geocoding, maps)
- transactional emails using mailgun
