## models

- generate a model

```bash
rails generate model article title:string body:text
```

- run migration
```bash
rails db:migrate
```

- open console
```bash
rails console
```

- create a new article in db
```ruby
article = Article.new(title: "Hello Rails", body: "I am on Rails!")
article.save
```

- show article in db?

- go into controller, and get articles from db instead of dummy data:
```ruby
@articles = Article.all
```

- other ways to create entries

```ruby
# Create empty entry then populate before saving
article = Article.new
article.title = 'my 5 favourite tazos'
article.body '1. tazzie devil'
article.save

# use create to save entry in 1 step
Article.create(title: "Hello Rails", body: "I am on Rails!")
```

- selecting entries

```ruby
Article.all

Article.first

Article.last

# find by id
Article.find(5)

# find by attribute (only returns 1st match)
Article.find_by(title: 'Hello Rails')

# find by attribute (returns all matches)
Article.where(title: 'Hello Rails')
```

- updating entries

```ruby
# find entry 
article = Article.find_by(title: 'Hello Rails')

# then update and save
article.title = 'Goodbye Rails'
article.save

# or in one step
article.update(title: 'Goodbye Rails')
```

- deleting entries
```ruby
article = Article.first
article.destroy
```

- create a route to show a single article
```ruby
# in config/routes.rb

Rails.application.routes.draw do
  root "articles#index"

  get "/articles", to: "articles#index"
  get "/articles/:id", to: "articles#show"
end

# in article controller
def show
  @article = Article.find(params[:id])
end
```

### Active record

- generate language for article (one per particle) 
- `$ rails g model language language:string article:references`
- migrate changes
- `$ rails db:migrate`
- show belongs_to in topic.rb
- add has_one relationship
```ruby
# in article.rb
class Article < ApplicationRecord
  has_one :language
end 
```
- show has_many
- show has many through
