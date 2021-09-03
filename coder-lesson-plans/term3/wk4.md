## Content to cover

- asynchronous JS
- promises
- async/await
- AJAX and fetch API
- debugger

## Questions/notes

- Actually run through promises? Or just use them in a codealong?
- codealong project? continue todo list? pokedex?

## Thu morning

- morning challenge
- kahoot
- intro
- callback loop JS videos and demos
- promises
- ajax and fetch API

## Thu arvo

- Ash mentor talk on personal branding

## Fri morning

- morning challenge
- lightning talk - Gleb
- go through 'Asynchronous access to information' Ed challenge, and draw the call stack as I step through the execution of each example
- node threading video
- codealong

## Fri arvo

- start hackathon

## Thu morning challenge

Capitalise the Front
Create a function that will take a string as an argument. In this function, use your favourite loop to capitalise the first letter of each word, whilst making each other letter lowercase

Write the tests first!

E.g. capitaliseTheFront("sinGLE"), should return "Single"

E.g. capitaliseTheFront("TWO words"), should return "Two Words"

E.g. capitaliseTheFront("Quite a Long SENTENCE!"), should return "Quite A Long Sentence!"

## Fri morning challenge

- anagrams: detect if two strings are anagrams of each othe

```javascript
import { areAnagrams } from './index.js'

describe("anagram checker", () => {
  test("It checks if two strings are anagrams of each other", () => {
    expect(areAnagrams("silent", "listen")).toBe(true)
    expect(areAnagrams("silent", "giraffe")).toBe(false)
  })

  test("It can handle multi-word strings", () => {
    expect(areAnagrams("rail safety", "fairy tales")).toBe(true)
  })
})

// solution
export const areAnagrams = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false
  }

  const stringSorter = (a, b) => {
    if (a < b) {
      return -1
    } 
    if (a > b) {
      return 1
    }
    return 0
  }

  const sorted1 = string1.split('').sort(stringSorter).join()
  const sorted2 = string2.split('').sort(stringSorter).join()
  return sorted1 === sorted2
}
```

## Intro

- a large amount of difficult content this week (apologies about Ed content issues)
- promises are confusing
- asyncs JS can be confusing because of variety of options - callback, promises, async/await (and others like observables)
- core thing to understand is the concept of web APIs, and the fact that async behaviour happens *outside* of JS
- promises are just there to help manage async better than callbacks, and async/await are just to make promises cleaner to write

## Asynchronous JS

### Call Stacks

- use jamboard/slides to show how functions are popped on and off the call stack at run time
- explain how this relates to the concept of a "stack trace"
- physical demo - paper aeroplanes
- equipment
  - marker
  - 20 sheets of paper
  - 5 takeaway containers
```javascript
function getPaper() {
  // go and grab some paper
  return paper
}

function makePlane() {
  const paper = getPaper()
  // fold the paper into a plane
  return plane
}

function throwPlane() {
  const plane = makePlane()
  // throw the plane
}

throwPlane()
```

- use jamboard to show recursive function causing stack overflow

### Callback queue and Event loop

- show the classic event loop video

#### physical demo

- explain how the following code would be thread blocking

```javascript
function getPaper() {
  // go and grab some paper
  return paper
}

function makePlane() {
  const paper = getPaper()
  // fold the paper into a plane
  return plane
}

function throwPlane() {
  const plane = makePlane()
  // throw the plane
}

for (let i = 0 i < 3 i++) {
  throwPlane()
}
```

- let's improve it by making the calls asynchronous
- make it clear that this is happening elsewhere eg from API, web worker etc

```javascript
function throwPlane() {
  // throw the plane
}

function asyncThrowPlane() {
  for (let i = 0 i < 3 i++) {
    fetch('makePlane')
      .then(plane => {
        throwPlane(plane)
      })
    }
}

asyncThrowPlane()
```

- 1 person manages the call stack (FIFO)
- 3 people for async functions - 1 per function
- 1 person manages callback queue (FILO)
- 1 person manages the event loop

Equipment
- 3 copies of `throwPlane()`
- `asyncThrowPlane()`

## Promises

- an object for handling async behaviours, and avoiding 'callback hell'
- Takes an 'executor' function as a constructor argument
  - that executor takes resolve and reject
- Has a `.then(cb)` function which takes a callback as an argument
  - Callback is called if promise resolves
- Has a `.catch(cb)` function which takes a callback as an argument
  - Callback is called if promise rejects
  - Will also catch any JS errors
- Has a `.finally(cb)` function which takes a callback as an argument
  - Callback is called when promise is fulfilled
- all 3 of these return a (new) promise
- because `.then()` returns a promise, can chain them together

## Async/await

- only syntactic sugar to make promises easier to deal with
- need to declare async function with `async` keyword
  - but can use `await` anywhere if using ES6 modules
- always return a promise
  - if you return another value, it'll automatically get wrapped in a promise
- works well with Promise.all for multiple async operations
```javascript
// wait for the array of results
let promiseArray = []
const urls = ['a', 'b', etc]
for (let i = 0 i < 5 i++) {
  promiseArray.push(fetch(urls[i]))
}
let results = await Promise.all(promiseArray)
```

## Ajax and fetch API

- 
```javascript
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log('error:', err.message))
```

- with async/await syntax
```javascript
async function getData() {
  try {
    const result = await fetch('http://example.com/movies.json')
    return result
  } catch(err) {
    console.log(err.message)
  }
}
```

## pokedex codealong

- start pulling stuff from API and logging it
```javascript
const baseUrl = 'https://pokeapi.co/api/v2/pokemon-species/'
// gets bulbasaur species
fetch(baseUrl + '1')
```
- use `.then`, and show compared to `await`
- used chained `.then`, and show how the network requests are staggered
- use `Promise.all` to do in parallel
- start building out a pokedex app
  - search bar for name of pokemon
  - list out all the attributes
  - save favourites functionality using local storage
  - favourites page, which pulls all the favourites (using `Promise.all`)
