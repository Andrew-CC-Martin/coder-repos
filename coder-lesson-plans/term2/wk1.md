# Stuff to cover

- MVC
- Rails intro

# Decisions/Questions

- need a metaphor for MVC?
  - nah, the technical implementation is understandable enough
- create terminal app with MVC pattern, or just jump straight into rails?
  - terminal app first
- create new app for MVP, or just refactor ATM?
  - new app, let's start with blank slate
- when to install dependencies/rails?
  - Thu arvo
- deploy to heroku this week?
  - no
- need to cover discrete maths this week?
 - no
- need to cover DB/SQL this week?
  - no
- should I cover HTTP methods?
  - will happen naturally in routes.rb stuff
- style with bootstrap4?
  - no, just use sass for now. Bootstrap for 2nd app

# Term intro

- Rails itself
- Databases, theory and practice
- CS fundamentals
  - review (Fri arvo?)
  - weekly quizzes
  - final exam
- rails project
- very top-heavy. Move fast, then a lot of time to practice

# MVC terminal app

- give a concrete example eg book
  - /books page that shows the books
  - books table in db with corresponding model
  - books controller that ties them together
- create MVC app for animal shelter

# Rails intro

- *note start new rails app now since it takes ages

- *review this stuff because it's a good opportunity to explain what rails
actually is ie concept of server rendered web app

- Quickly build MVP web apps
- Generates lots of boilerplate code for us
- Uses an MVP model to create server-rendered web apps
  - the model's data comes from the database
  - the view is defined as an html template
- convention over configuration
# Rails code along

## dependencies

- node
- yarn
- SQLite3

## creating a rails app

```bash
rails new blog

rails s
```

- review the directory and file structure
- show node_modules. Mention issue with Dropbox/cloud providers

## hello rails
  - needs route, controller with action, view

- try to go to /articles without route
- add route
  
```ruby
# in config/routes.rb
Rails.application.routes.draw do
  get "/articles", to: "articles#index"
end
```

- go to /articles route again
- generate the articles controller

```bash
rails generate controller Articles index --skip-routes
```

- show generated articles-related files
- go to /articles route again

- go into app/views/articles/index.html.erb
- say 'hello rails!'

## setting the home page

```ruby
# in config/routes.rb
Rails.application.routes.draw do
  root "articles#index"

  get "/articles", to: "articles#index"
end
```

- put some dummy data into controller (not using model yet)
```ruby
# in article controller (index method)
article1 = Article.new(title: "hey there gg!", body: "I'm on rails!")
article2 = Article.new(title: "goodbye world!", body: "I'm off rails!")
@articles = [article1, article2]

# in articles template
<h1>Articles</h1>

<ul>
  <% @articles.each do |article| %>
    <li>
      <%= article.title %>
    </li>
  <% end %>
</ul>
```

- If time:
  - use sass to style the app
  - put json file in public folder, and use that instead of dummy data in controller

# Thu morning

- Term intro
- MVC terminal app

# Thu arvo

- rails install session

# Fri morning

- 1st rails kahoot?
- Jared lightning talk
- intro to rails, rails code along

# Fri arvo

- Cross campus conference
