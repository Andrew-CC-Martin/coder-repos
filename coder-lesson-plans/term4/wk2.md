# Trello clone codealong cont.
- go over fix to CORS issue
- go over fix to loading spinner issue

## Add auth

### Backend

- Add the knock gem (and uncomment bcrypt)
```ruby
# in config/application.rb
config.load_defaults 6.1 and config.autoloader = :classic
```

- `$ rails g knock:install`

- update the knock config to use credentials
```ruby
# in knock.rb
config.token_secret_signature_key = -> { Rails.application.credentials.secret_key_base }

# in application_controller.rb
class ApplicationController < ActionController::API
  include Knock::Authenticable
end
```

- create new User model `$ rails g model User username:string email:string password_digest:string`
- run migrations
- add validations to the User model
```ruby
class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
```
- demonstrate creation of a User, using the rails console
`>User.create(username: 'banana', email: 'banana@email.com', password: 'banana', password_confirmation: 'banana')`

- generate User controller `$ rails g controller Users`
- add `create` method to Users controller

```ruby
# users_controller.rb
class UsersController < ApplicationController
  def create
    @user = User.create(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.permit(:username, :email, :password, :password_confirmation)
  end
end
```

- add route for user creation
```ruby
# in routes.rb
Rails.application.routes.draw do
  resources :cards
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  scope '/auth' do
    post 'sign_up', to: 'users#create'
  end
end
```

- confirm that route is present `$ rails routes -g user`

- update users controller to create a new JWT, and return that when the user is created
```ruby
class UsersController < ApplicationController
  def create
    @user = User.create(user_params)

    if @user.save
      auth_token = Knock::AuthToken.new payload: {sub: @user.id}
      render json: {username: @user.username, jwt: auth_token.token}, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.permit(:username, :email, :password, :password_confirmation)
  end
end
```

- demonstrate that we've now got a JWT coming back from signup
- set up the new route for login
- create new sign_in method in users controller and add route

```ruby
# users controller
def sign_in
  @user = User.find_by_email(params[:email])

  if @user && @user.authenticate(params[:password])
    auth_token = Knock::AuthToken.new payload: {sub: @user.id}
    render json: {username: @user.username, jwt: auth_token.token}, status: 200
  else
    render json: {error: "Incorrect Username or Password"}, status: 404
  end
end

# routes
scope '/auth' do
  post 'sign_up', to: 'users#create'
  post 'sign_in', to: 'users#sign_in'
end
```

- confirm that sign in returns JWT

- drop db and create new migration to connect cards to user
- `$ rails g migration add_user_to_cards user:references`
- migrate database
- add associations
```ruby
# card.rb
class Card < ApplicationRecord
  belongs_to :user
end

# user.rb
class User < ApplicationRecord
  has_secure_password
  # add this
  has_many :cards
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
```

- demonstrate that we can still `GET` cards

- add authentication to cards controller
```ruby
# cards_controller.rb
class CardsController < ApplicationController
  before_action :authenticate_user
```

- demonstrate that we can't GET cards anymore (401 error)
- add JWT to GET request in postman
- add current user to cards controller
```ruby
# card_controller.rb

  # GET /cards
  def index
    # @cards = Card.all
    @cards = current_user.cards.all

  # POST /cards
def create
  # @card = Card.new(card_params)
  @card = current_user.cards.new(card_params)

  # set @card so that only available to correct user
def set_card
  @card = current_user.cards.find(params[:id])
end
```

- confirm in postman that you can only do the following actions for the correct user:
  - show
  - delete
  - update

### 

### Frontend

- add react router
- refactor into separate scenes
- create nav bar
- refactor Cards and AddCard into separate components
- Add JWT to api instance

```javascript
const jwt = localStorage.getItem('jwt')

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Authorization": `Bearer ${jwt}`
  }
})
```

## Possible extension stuff

- proptypes
- proper eslint config
