# Schedule

## Thu morning

- standup 
  - get at home people to jump on mic
  - pass swivl mic around room
- kahoot?
- morning challenge?
- talk a bit about workbook marks
- rails codealong

## Thu Arvo

- some kind of activity/challenge?

## Fri morning

- standup (get at home people to jump on mic)
- kahoot?
- morning challenge?
- rails codealong

## Fri arvo

- Cat math review?

# 2-sided marketplace

## Questions

- have a cards model?

## Extras

- mobile-first designs
- search, sort, filter
- Location
- chat between buyers and sellers
- 3rd party API (eg omniauth, geocoding, maps)
- transactional emails using mailgun

## wireframes

- go over the wireframes I've created

## Planning

- Reminder to create trello tickets

## User stories

- write out a couple of user stories, just to give a refresher on them

## ERD

- sketch out an ERD with following relations:
  - users
  - listings
  - card_types
  - roles
  - messages
- mention the trade-off between hard-coding all card types, vs free text
  - duplication of data
  - freedom vs control of data

## create new app (using rspec instead of minitest)

- generate a new app from scratch (use -T flag to get rid of tests)

- `$ rails new app-with-rspec -T`
```ruby
# in Gemfile
group :development, :test do
  gem "rspec-rails"
end
```
- `$ rails g rspec:install`

## scaffold

- generate a scaffold for categories
- `$ rails g scaffold Category name:string`
- show the functionality it generated
- go through all of the files it created, and read through them line by line
- (use opportunity to ask a lot of questions)
- connect to db using psql, and show the data we added
- show schema.rb

## seeds

- create some seed data for categories and seed it
- `$ rails db:seed`
- explain the benefit of having this hard-coded stuff in source control (no variation between environments)

## Testing

- Use factorybot to do some rspec unit testing
- eg check that expected roles exist (from seeds)

## deploy

- stuff to mention
  - heroku is optional for assignment, but recommended
  - can't use sqlite3 with heroku
  - deploy early, deploy often
  - can deploy from CLI or heroku site; I'll show CLI
  - concept of CI pipeline
  - mention I can run a session on that during assessment as an optional extra
- show heroku account
- show instructions on heroku site for CLI etc
- push app to new github repo
- deploy app to heroku
```bash
heroku login
# creates a new heroku app, and links current local's remote to it
heroku create
git push heroku main
```

## styling

- add meta tag to application.html.erb
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
- add bootstrap gem to gemfile and bundle install
- rename application.css to application.scss
- delete lines that say require
- add `@import "bootstrap";`
- add gem 'jquery-rails'
- add following to `application.js`
```javascript
//= require jquery3
//= require popper
//= require bootstrap-sprockets
```
- use bootstrap album example as template, and style listings page

## authentication

- Set up auth using devise
- add devise gem and bundle install
- `$ rails g devise:install`
- follow instructions in terminal
- generate the devise views
- `$ rails g devise:views`
- generate the devise user model
- `$ rails generate devise User`
- migrate the new model
- show the routes it generated
- `$ rails routes -g users`
- if routes aren't showing, add helper `devise_for :users` to routes.rb
- show the views for the users routes eg sign_in
- create a new migration to add extra fields to user (and then migrate it)
- `$ rails g migration AddNameToUser name:string`
- create navbar partial, and add log out
  - create views/shared/_navbar.html.erb

```erb
# views/shared/_navbar.html.erb
<nav>
  <% if user_signed_in? %>
    <h1>
      <%= "Welcome back, #{current_user.name}!" %>
    </h1>
    <%= link_to "sign out", destroy_user_session_path, method: "delete" %>
  <% else %>
    <%= link_to "sign in", new_user_session_path, method: "get" %>
  <% end %>
</nav>
```

- show restricted routes only when logged in
```ruby
  # in controller eg for only #hidden controller action
  before_action :authenticate_user!, only: [:hidden]
```

## authorisation

- set up admin vs user roles

## image upload

- add image uploader to create listing

## forms

- using scaffold as template, add more forms
- show a bunch of cool input types like date time, color pickers, etc
- if time, deploy again

## Stripe

- add stripe payments to app
