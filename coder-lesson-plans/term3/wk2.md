## Content to cover

- JS exceptions
- intro to node & npm
- unit testing with JS
- chrome debugger

## Questions/notes

- cover exceptions in class?
  - do it as part of TDD => expect an error to be thrown

Following stuff needs dry run:
  - setting up jest
  - using debugger

- Do node-specific stuff on Thu (jest)

## Thu morning

- morning challenge - mutability madness!
- revise mutability and pass by reference vs value
  - use jamboard and draw variables with arrows pointing to values
- JS kahoot #3
- lightning talk - Grey

- cover missed stuff
- unit testing with Jest

## Thu arvo

- review with Cat

## Fri morning

- morning challenge
- kahoot?
- lightning talk - Theo


## Fri arvo

- review with Cat

## Morning challenge - mutability

```javascript
// Eg 1 - pass primitive value to function
let number = 2

function doubleIt(number) {
  number = number * 2
}

// call the doubleIt function with our number
doubleIt(number)

// question - did the value of number change? why or why not?
console.log(number)
```

```javascript
// Eg 2 - pass object to function
let numbers = [1, 2, 3]

function doubleThem(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2
  }
}

// call the doubleThem function with our numbers array
doubleThem(numbers)

// question - did the value of numbers change? why or why not?
console.log(numbers)
```

```javascript
// eg 3 - forEach loop
// create an array
let coolArray = [1, 2, 3]

// loop over it with forEach, and try to change each element
// fat arrow version
coolArray.forEach(element => element = element * 2)

// regular function version
coolArray.forEach(function(element) {
  element = element * 2
})

// Question - Is coolArray [1, 2, 3] or [2, 4, 6]? Why? Hint: it's the same situation as Eg1
// Extension Q - If you wanted to mutate (modify) coolArray, how could you do it?
console.log(coolArray)
```

## Morning challenge Fri

- challenge: *surface* the bug
```javascript
/**
 * this is the same bug from last time
 * But the challenge this time is to write a unit test 
 * which exposes the bug. Ie, yur unit test should be failing because of
 * the bug, and pass when it's fixed
**/
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

```javascript
let harry = {
  name: 'Harry Potter',
  location: {
    school: 'Hogwarts'
  }
}

let hermione = {
  name: "Hermione Granger",
  location: harry.location
}

// after defeating voldemort, Hermione gets into Oxford,

hermione.location.school = 'Oxford'

// what happens when we log out the following:
console.log(harry.location.school)
// have a think about it before running the code
// and try drawing a diagram

/**
 * Bonus question: how could we update Hermione's location without
 * causing unwanted side-effects?
 * /
```

## Missed Stuff

- short circuit logic for non-booleans. &&:
  - `(some falsy expression) && expr` is short-circuit evaluated to the falsy expression
  - `(some truthy expression) && (some falsey expression)` is short-circuit evaluated to the falsy expression
  - `(some truthy expression) && (some other truthy expression)` is short-circuit evaluated to the first expression
- ||:
  - `(some truthy expression) || expr` is short-circuit evaluated to the truthy expression
  - `(some falsey expression) || expr` is short-circuit evaluated to expr

- function default values

## Intro to node and npm

- initialise a nde project-talk a bit about how node projects work

## Unit testing with Jest

- make it clear - jest is only for node environment
  - can be run in the browser with difficulty, but no real need to (can use node to run unit tests for frontend code anyway)
- set up a new node project with Jest
- Practice using Jest with some challenges, done TDD style

 ## ES6 modules

- talk about the two different module systems
  - commonJS in node by default (which is still de fact standard)
  - no modules by default in browser

- once ES6 is activated, you are in 'use strict' mode

- "activate" ES6 modules in browser
```javascript
// index.html
<script src="index.js" type="module"></script>

// index.js
import { monkey } from "./monkey.js"

alert(monkey)

// monkey.js
export const monkey = "banana"
```
- "activate" ES6 modules in node
in package.json
```json
  "type": "module"
```

## Code challenges

- ***do them all TDD

- ask if anyone wants to work through Ed exercises

- fizzbuzz!
  - advanced version - do up to arbitrary number (not just 100)

- dice
  - function which randomly returns 1-6
  - bonus points if the function can take in the no. of sides
```javascript
// dice.js
function dice() {
  // return a number from 1-6
}

module.exports = {
  dice
}

// dice.test.js
// note - this test could pass for an incorrect function. Why?
const dice = require('./dice')

describe('dice.js', () => {
  // throw an error for eg invalid input
  it('returns a number from 1-6', () => {
    const number = dice()
    expect(number).toBeGreaterThan(0)
    expect(number).toBeLessThan(7)
  })
})
```

- count instances of char in string
  - eg `charCount("b", "big fat bubble")` => 4
```javascript
// char-count.js
// counts how many times char occurs in sentence
function charCount(char, sentence) {
  // your code goes here
}

module.exports = {
  charCount
}

// char-count.test.js
const charCount = require('./char-count')

// Note: there is a special case for handling exceptions in tests
// Can't call the function function inside test, so need to pass anonymous function
describe('charCount input validation', () => {
  it('should throw an error for wrong number of arguments', () => {
    // no arguments
    expect(
      () => charCount()
    ).toThrow()

    // 1 argument
    expect(() => charCount('a')).toThrow() 
    // 3 arguments
    expect(() => charCount('a', 'b', 'c')).toThrow()
  })

  it('should throw an error for wrong data type of arguments', () => {
    expect(() => charCount(5, 'b')).toThrow()

    expect(() => charCount('a', undefined)).toThrow()
  })
})

describe('charCount core functionality', () => {
  it('should correctly count the instances of char in sentence', () => {
    expect(charCount('b', "big fat bubble")).toBe(4)
  })
})
```

- run length encoding/decoding

- isograms
  - tell if a string is an isogram ie contains no repeated chars

- max edge of triangle
  - given two sides, what's the biggest possible size for third side?

- hex to ascii
  - return the actual ascii char

- nth fibonacci number

- anagrams

- largest number
```javascript
// largest.js

// return the largest number from the array
// return null for empty array
// ignores non-numeric values
// throws an error if what's being passed isn't an array
function largestNumber(arr) {
  // your code here
}

module.exports = largestNumber;
```

```javascript
// largest.test.js

const largestNumber = require('./largest.js')

describe("largestNumber", () => {
    it("returns the largest number", () =>{
        expect(largestNumber([2,5,9])).toBe(9)
    })
    
    it('returns null if passed empty array', () => {
        expect(largestNumber([])).toBe(null)
    })
    
    it('returns largest negative when passed all negative', () =>{
        expect(largestNumber([-2,-8,-100])).toBe(-2)
    })

    it('ignores non numeric items in array', () => {
        expect(largestNumber([1,50, "apples",true])).toBe(50)
    })

    it('throws error when passed anything but array', () => {
        expect(() => {
            largestNumber(50)
        }).toThrow("Function must take array")
    })
})
```
