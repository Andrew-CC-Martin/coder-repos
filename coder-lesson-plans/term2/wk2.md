# Stuff to cover

- routes, controllers, views
- styling the view with sass
- go over credentials again, with a little more explanation about environment variables
- put and delete requests
- rails scaffold
- rails console
- testing

# Reminders

- do a morning challenge?
- put the (detailed) agenda on the whiteboard
- See how light theme compares in terms of visibility
- consider using canvas polling
- explicitly welcome the new students
- keep the online students engaged
- pull maths content into lecture where relevant

# Questions

- what to build?
  - todo list
- use sqlite, or straight into postgres?
  - straight into postgres
- cover rails models?
  <!-- - probably (but confirm in FX2 meeting) -->
  - no
- cover db theory and SQL?
  - only where it's relevant to rails codealong
- cover some maths content?
  - only where it's relevant to rails codealong
- cover deployment?
  - yes if time
- review http methods, or just start using them?
  - just use as appropriate

# Rails codealong - Trello clone
## creating a rails app

- create new rails app with postgres and no minitest
- `$ rails new trello-clone -d postgresql -T`
- `$ bundle install`
- `$ yarn install`
- show node_modules and quickly explain.
- make initial git commit
- create database
- `$ rails db:create`
- set up rspec
```ruby
# in Gemfile
group :development, :test do
  gem 'rspec-rails'
end
```
`$ rails g rspec:install`
- git commit again
- run tests
- start server
- `$ rails s`

## hello rails

- show scaffold, to quickly show what a working MVC looks like
  - new branch, then generate
  - `$ rail g scaffold Todo title:string description:text is_done:boolean`
  - go through all the stuff it generates (using git)
  - 'now we're going to build this a bit  more manually'

- checkout to new branch
- needs route, controller with action, view
- try to go to /todos without route
- add route
  
```ruby
# in config/routes.rb
Rails.application.routes.draw do
  get "/todos", to: "todos#index"
end
```

- go to /todos route again
- generate the todos controller

```bash
rails generate controller Todos
```

- show generated articles-related files
- go to /todos route again

- render directly from controller
```ruby
class TodosController < ApplicationController
  def index
    render html: '<h1>hi rails!</h1>'.html_safe
    # render :index
  end
end
```

- create app/views/todos/index.html.erb
- say 'hello rails!'

## setting the home page

```ruby
# in config/routes.rb
Rails.application.routes.draw do
  root "todos#index"

  get "/todos", to: "todos#index"
end
```

- put some dummy data into controller (not using model yet)
- render it in view

- If time:
  - use sass to style the app
  - put json file in public folder, and use that instead of dummy data in controller
    - implement all CRUD actions, with appropriate routes etc
    - use before_action and after_action as appropriate
    - eg `before_action :parse_todos`
  - deployment on heroku

## Testing

- write some tests in the controller?

# Heroku deployment

- quick explanation
- note - can't use sqlite3 with heroku
- create a new heroku account
- push app to new github repo
- deploy app to heroku
```bash
brew tap heroku/brew && brew install heroku
heroku login
# creates a new heroku app, and links current local's remote to it
heroku create
git push heroku main
```

# Thu morning

- morning challenge?
- standup
- kahoot?
- Sooyeong lightning talk
- welcome new students
- Housekeeping
  - New hybrid model - you can choose to attend from home or campus. But need to let us know if working from home.
- Ask how people are feeling about CS fundamentals
- poll in canvas for feeling ready for Sat quiz on bases
- Codealong - controller deep dive
  - setting up a rails app with postgres and rspec
  - manually creating controllers and views
  - setting up CRUD actions with json data

# Thu arvo

- independent work (create conference for arvo)

# Fri morning

- morning challenge?
- standup
- kahoot?
- Codealong - rails views deep dive
  - SCSS
  - partials
  - navbar
  - forms
  - application.html.erb (which shows on every page)

# Fri arvo

- Cat - bases review
