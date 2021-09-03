## Questions

- do I want to cover the class stuff?
- do I even want to cover any of the inheritance/constructor/OOP stuff at all?
  - I guess I'll cover prototypical inheritance
  - If I cover any of it, make sure it's clear that it's advanced, and first 4 weeks are much more important

## Content to cover

- Object constructors and prototypes
- Classes and mixins

## Thu morning

- morning challenge
- lightning talk - Nick H

## Fri morning

- lightning talk - Nick H

## Codealong - pokedex

- use pokemon API & vanilla JS to build a pokedex

## Intro to JS classes etc

- quick explanation of class vs prototypal OOP
  - classes are a blueprint
  - JS doesn't have (true) classes
  - It uses prototypal inheritance

## Prototypal inheritance

- create an instance of an object
- clone that object, then modify its properties
- explain using the usual Abramov diagrams

## Objects review

- object literals

## Object constructor

- function which defines properties with the __this__ keyword

```javascript
function Person(name, age) {
  this.name = name
  this.age = age
  this.awesome = true
}

const instructor = new Person("Peta", 55)
```

```javascript
```

## Object prototypes

- shared property of all instances of that object
- update array prototype to show some metaprogramming
```javascript
Array.prototype.map = function() {
  alert("you called 'map'! Good for you!")
}
```

## Classes and mixins

```javascript
class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const fido = new Dog('Fido', 5)
```
