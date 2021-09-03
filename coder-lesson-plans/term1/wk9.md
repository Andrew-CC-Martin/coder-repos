# Thu morning

## ATM app cont

### git collaboration

- get Cat to fix a bug

### Help menu
- use of ARGV to pass arguments
- check for '-h' || '--help'
- print help menu

### Make app executable
- shell script for full installation
```shell
#!/bin/bash
gem install bundler
bundle install
ruby index.rb

$bash install-run.sh
```

### File IO
```ruby
  account_balance
  File.read("balance.txt").to_i

  File.write("balance.txt", "500")
```

### IO testing
```ruby
# example.rb
def hello
  puts "hello world"
end

# example_spec.rb
require(../example) #assuming example.rb is one level up from the test file

describe 'example.rb' do
  it 'prints hello world to terminal' do
    # note that expectation needs to be in a block (curly brackets)
    expect { hello() }.to output('hello world\n').to_stdout
  end
end
```

### Error handling

- give reading from a nonexistent file as a good example of exception handling
```ruby
  balance = nil
  begin
    balance = File.read("balance.txt").to_i
  rescue Errno::ENOENT
    puts "Error - bank balance file not found"
  else
    puts "Your balance is $#{balance}"
  end
```

### Extras if time

- consider refactoring to use class
- use some more gems eg colorize

# Thu arvo

- Alex B terminal app introduction

# Fri morning

- mention MVP Ed exercise - talk about how to run tests inside Ed

- talk about local vs global gems (once I figure out the answer)

- work on terminal apps

# Fri arvo

- work on terminal apps

# Sat morning

- standups in discord

