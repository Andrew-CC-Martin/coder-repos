## Misc

- Try to use the everyone post in discord technique
- Try to use the thumbs up/down technique for simple yes/no questions

## Content to cover this week

- OOP
  - objects
  - classes
  - modules
- error handling
- TDD, Unit testing with rspec

## Thu morning

- 9am standup, room by room (including myself)
  - achievements
  - working on today
  - blockers
- kahoot
- reminder that workbook due end of week
- mention that pace is going to pick up now

- mention how I'll be moving around the classroom for questions
  - If you don't know I'll give you a hint
  - If you still don't know it's ok to skip
- mention I'll switch rooms halfway through, so both rooms will get face to face and questions each day
- do Edabit challenge in class, to get everyone using it

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

- inheritance
```ruby
class Bird < Animal
  include Flyer
end

class Plane < Vehicle
  include Flyer
end
```

### Modules

- using Module.method vs self.method
- Note that you won't be able to use self methods as mixins

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

```ruby
module Flyer
  def can_fly?
    true
  end
end
```

### Testing and rspec

- Start off with a method, and a bunch of test cases
- mention that there's a way to automate this testing

- Unit/automated testing
  - automates process of testing
  - documents code
  - forces you to think about various situations
  - stops regression breakages
- TDD
  - forces you to think before you write
  - removes the temptation to not write tests at end
  - tests written after method are often rushed

- show rspec docs
- install rspec

- go back to original method and write unit tests for it

- show Ed exercises, and how they're running rspec 'under the hood'
  - go into an exercise and click edit

### Error handling

- We try to cover all possibilities in our code but there's always stuff we miss
- Error handling helps us recover from those situation without app crashing
- demonstrate rescue etc

### Loading files into irb

- quickly demonstrate how we can load methods into irb
- often better for testing than using puts

## Thu arvo

- pair programming challenge and/or review

## Fri morning

- mention terminal is released next week. But to start anyway.

### ATM app

- show hangman game
- create repo first, so that README file is ready for documentation

#### Documentation

- statement of purpose and scope
  - high level overview
  - how it will be used

- features list
  - withdrawl
  - deposit
  - check balance
  - persists balance after closing
  - handles edge cases (negative deposits, overdraws, incorrect inputs)

- UX outline
  - how user will find out how to use each feature
  - how user will use each feature
  - how errors will be handled and displayed

- control flow diagram
  - flow chart (consider drawing boxes around each feature)

- implementation plan (Trello ticket for each feature)
    - prioritised checklist for each feature (show how you can link to cards)
    - each ticket needs story points

- help documentation (how to install and use)

#### Nice-to-haves

- shell script for full installation
```shell
#!/bin/bash
gem install bundler
bundle install
ruby index.rb

$bash install-run.sh
```

- colorized output

#### Implementation

Stuff to include:

- push code that has a bug. Get Cat to pull, branch, fix, push, create PR
- *Try to find way to utlise OOP*
- Do TDD as much as possible

technical requirements:

- use of functions from a Ruby gem (and >3 gems in total)
- error handling
- consistent styling conventions (enable rubocop)
- min 2 test files, with min 2 tests in each
- min 20 commits
- script which turns the application into an executable

## Fri arvo

- keep going with terminal app

