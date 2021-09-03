# Testing

- n.b. minitest is default
- `$ rails new app-with-rspec -T`
```ruby
# in Gemfile
group :development, :test do
  gem "rspec-rails"
end
```
- `$ rails g rspec:install`
- note - can use the gems:
  - factory bot (for generating dummy data), and
  - db cleaner (for clearing db between each test)

## HTTP methods

- GET - get contents of resource
- POST - create a resource
- PUT/PATCH - update a resource
- DELETE - delete an entry

Notes:
- PUT overwrites existing entry; PATCH only updates specified field
- PUT is idempotent but POST is not
