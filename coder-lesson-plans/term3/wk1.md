## Content to cover

- JS intro
- control structures
- loops
- functions

## Thu morning

- morning challenges:
  - console log "hello world" in 4 following ways
    - browser x4
      - from devtools console
      - from script tag
      - from JS file
      - inline JS
    - node x2
      - from CLI
      - from JS file
- kahoot
- Re-introduce codewars
- JS background/history
- primitives
- objects
- array methods
- control structures
- functions
- more advanced syntax
- do some challenges if time

## Fri Morning

- ask if anyone wants to work through Ed exercises
- challenge: find the bug in this code
```javascript
function duplicateSpreadsheet(original) {
  let copy = {
    created: Date.now(),
    author: original.author,
    cells: original.cells,
    metadata: original.metadata
  }
  copy.metadata.title = 'Copy of ' + original.metadata.title
  return copy
}

const spreadSheet = {
  author: "Billy Bob",
  cells: 'some spreadsheet cells...',
  metadata: {
    title: 'Some kind of spreadsheet'
  }
}

const spreadsheetDuplicate = duplicateSpreadsheet(spreadSheet)
console.log("spreadsheetDuplicate:", spreadsheetDuplicate)
console.log("spreadSheet original:", spreadSheet)
```

- hints
  - `copy.metadata = original.metadata` what will happen when `copy.metadata` is changed?
  - if you're struggling, try running the code and see what happens
  - after, talk about using `Object.freeze(myObject)` to ensure object isn't mutated
`Object.freeze(spreadSheet.metadata)`
- fix it by adding title directly

- kahoot
- lightning talk

### fill in gaps

- conditionals and control flow
  - ternary
  - switch
  - == vs ===
  - for of/in loops
  - array method loops

- functions
  - anonymous functions
  - fat arrow
  - first class and higher order functions
  - closures

- quirks

- advanced syntax/concepts
  - 

## Notes/reminders

- re-introduce code wars, as a great way of getting feet wet in JavaScript
- Can't do much with plain JS data structures and control flow, so let's do a bunch of challenges in class
- make some slides! 
- try to flag which things are truly essential, and which are nice-to-haves

## Questions

- Consider saving some codewars problems to do in class
- Anything worthwhile that can be built with this basic JS?

## JS background/history

- JS is a weird mess (but functional). A bit like English language
  - road bike vs grandpa's bike analogy
- Creation of JS
- multi-paradigm language
  - scripting/procedural
  - functional
  - OOP
- show a few weird quirks
- mention browser/node
- ECMAscript, ES6

## primitive types

  - let vs const
  - string (show interpolation)
    - m
  - number
  - bool
  - undefined
  - null
  - NaN

## objects (eq to hash)

  - array
  - object literals
  - nested objects
  - dot vs square bracket notation
  - date
  - note about weird rules for const for objects
  - `this` keyword
    - refers to the current object, unless bound elsewhere

## Array methods

- length
- pop and shift (mutates)
- push and unshift
- includes
- show https://doesitmutate.xyz/

## control structures (if, ternary, switch)
```JavaScript
// switch syntax
switch (thingToCheck) {
  case "blah":
    // do something
    break
  default:
    // do default thing
}
```
- loops (for, for..in, for..of, while, forEach, map)
  - need to give some extra emphasis on old school for loop
  - break and continue
- 6 different falsey values
  - false
  - 0
  - ''
  - NaN
  - null
  - undefined

## JS quirks 
  - optional semicolons
  - always use ===
    - [] == false
    - "" == false
  - beware type coercion
    - [] + []; [] + {} in ruby vs JS
    - []
  - primitive string vs object string
  - number issues
    - 0.1 + 0.2
  - link to Brian Leroux video https://youtu.be/et8xNAc2ic8
- using both script tags and src files

## functions

- old functions
  - used function keyword
  - no implicit return
- old vs  ES6 syntax
  - single line (no curly braces)
  - implicit return
  - not hoisted
  - this bound to parent
- no enforcement of arity
- anonymous functions
- callbacks/1st class functions
- higher order functions
- closures
  - fancy way of saying that when a function is defined inside another function, the inner function
essentially 'captures' the outer function's variables

```javascript
function outer() {
  const monkey = 'banana'
  return function () {
    return monkey
  }
}

const inner = outer()
inner() // returns 'banana'
```

## More advanced syntax/concepts

- pass by reference vs pass by value
```javascript
let a = 10
let b = a
a = 5
console.log(b)

let array1 = [1, 2, 3]
ley array2 = array1
array1.push(4)
console.log(array2)
```
- "rest" operator
```javascript
function theRest(x, y, ...args) {
  console.log(args)
}
theRest(1,2,3,4,5,6,7)
// => [3,4,5,6,7]
```
- destructured assignment
  - array version
  - object version
- spread operator
- hoisting
  - functions (but only named functions)

## Code challenges

- ask if anyone wants to work through Ed exercises

- age to days

- high_low
  - returns highest and lowest number in an array

- mario
  - advanced: two sided

- dice
  - function which randomly returns 1-6
  - bonus points if the function can take in the no. of sides

- fizzbuzz!
  - advanced version - do up to arbitrary number (not just 100)

- count instances of char in string
  - eg `charCount("b", "big fat bubble")` => 4

- run length encoding/decoding

- isograms
  - tell if a string is an isogram ie contains no repeated chars

- max edge of triangle
  - given two sides, what's the biggest possible size for third side?

- hex to ascii
  - return the actual ascii char

- nth fibonacci number

- matching brackets
