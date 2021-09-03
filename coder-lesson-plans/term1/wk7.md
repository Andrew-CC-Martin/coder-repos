# Misc

- keep getting interaction happening. Lots of Q's.
- emphasise methods

# Content to cover this week

- iterators
- methods
- modules
- classes and objects
- inheritance and mixins

## Thu morning intro

- go over stuff I missed
  - truthy and falsey
- go over sticking points
  - difference between array and hash
  - how to access items  from arrays and hashes
- mention I'll do walkthrough of letter count challenge. Ask for any others.

## New concepts

### Iterators

- go over common ones
  - `each`, `each_with_index`, `map`, `filter`
- syntax, both shorthand and long form
```ruby
collection.each do |item|
  p item
end

collection.each { |item| p item }
```

- good time to talk about blocks and scope
  - block is everything inside do->end, or inside curly braces

- go through shopping list example, but using `each` this time
  - use ruby tutor to show the value of different things as we progress though the code

- do walkthrough of letter count challenge from Ed? (since people struggled)

### Methods

- start with demo of some repetitive action
- "variables are nouns of programming, methods are verbs"
- concept of methods as central to computation
- invoking method (nothing happens unless you call it)
- return value
- single responsibility concept (good practice only)
- implicit and explicit return
- storing returned values
- arguments/parameters
- keyword arguments (named arguments, with or without default values)

### File IO
  ```ruby
  File.open("account_balance.txt").each do | line |
    account_balance = line.to_f
  end

  File.open("log.txt", "w") do |file|
    file.write "#{Time.now} - User logged in\n" 
  end
```

### Gems

- what they are
- how to find them
  - ruby toolbox
  - gem search
- note - don't work in Ed
- gem quality
  - fits needs
  - well documented, tested
  - actively maintained and popular
- how to use
  - `$ gem install`
  - `$ gem uninstall`
  - require <gem>
- demonstrate with colorize, artii
- `$ gem list`
- using bundler
  - `$ gem install bundler`
  - `$ bundle init`
  - show the gemfile
  - `$ bundle add`
  - show it again

### Modules

```ruby
module myModule
  CONSTANT = 'blah'

  def moduleMethod
  end

  class moduleClass
  end
end
```

- namespacing
- reusability
- mixins

### Classes and Objects

- explain OOP
- class is "definition/blueprint" for an object.
- difference between class and module. Class is the blueprint for an object. Need to instantiate for it to do anything.
- actions (methods) vs attributes (instance @variables)

```ruby
class Boss < Enemy
  CONSTANT = 'blah'

  def initialise(name)
    @name = name
    @hp = 100
  end

  def damage(attack)
    @hp -= attack
  end
end

bowser = Boss.new('Bowser')
```
- getters and setters
```ruby
# getter
def name
  @name
end

#setter
def name= (name)
  @name = name
end

# shorthand
attr_reader :name
attr_writer
attr_accessor
```
- class variables and methods (don't belong to instance)
```ruby
class Enemy
  @@enemy_count = 0
  def self.total_enemies
    @@enemy_count
  end

  def initialize
    @@enemy_count += 1
  end
end
```

- principles of OOP
  - encapsulation - each object's state/data is private and only accessible through interface
  - abstraction (mention how this is core part of software in general)
  - inheritance - each class is defined in a hierarchy. Mention danger of doing too many layers
  - polymorphism - child classes can implement methods in different ways from parent, that are appropriate to child's needs

### Inheritance and Mixins

- 
```ruby
module Flyer
  def can_fly?
    true
  end
end

class Bird < Animal
  include Flyer
end

class Plane < Vehicle
  include Flyer
end
```

## Terminal app

- bank app?
- create repo (start with github this time)
- write out requirements
- push code that has a bug. Get Cat to pull, branch, fix, push, create PR

### Thu morning

- intro
- review of new concepts
- kata to reinforce those concepts

### Thu arvo

- looping review with Cat
  - while, for, and iterators
  - iterating over both arrays and hashes

### Fri morning

- show how I can see Ed exercise submissions and video views
- can submit as many times as you like. Clicking 'mark' is how you tell is it's right or not
- with tech you get out what you put in
- punctuality. Doing 9am standup next Thu

- lightning talks
- kata in class for methods (and general practice)
  - fix this string "DlrOW ,oLlEH" -> "Hello, World"
  - Wealth inequality: method which gives difference between richest and poorest
    [1, 5, 100, 25] -> 99
    ['$1', '$5', '$100', '$25'] -> 99
    (range of numbers in array)
  - acronym generator
  - leap year checker

#### Maybes

- code along, with class giving most input
  - simple banking app

### Fri arvo

- pair programming challenge
  - caesar cipher (give them an encoded message)
  - encode
    - takes rotation no. and string, returns encoded message
    - eg encode('bee', 4) => 'fii'
  - decode
    - takes rotation no. and string, returns decoded message
  'QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD' (23 rotation)
