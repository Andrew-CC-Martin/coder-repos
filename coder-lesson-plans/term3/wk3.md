## Content to cover

- JS DOM
- callback functions
- event handling
- chrome debugger

## Thu morning

- morning challenge
- lightning talk
- apologies about Ed QA
- mention centrality/importance of this and next week's content (wk5 is less critical)
- JSDOM

## Thu arvo

## Fri morning

- morning challenge
- lightning talk

## Fri arvo

- callbacks review?

# Notes

- could be fun to include some various web apis
  - [speech api](https://github.com/mdn/web-speech-api/). demo [here](https://mdn.github.io/web-speech-api/speech-color-changer/)
- be sure to make use of chrome debugger

## Morning challenge - Thu
## Morning challenge - Fri


## JSDOM

- explain that DOM API is not part of JS itself, but are simply things the browser can do, which JS has access to.
- draw an example DOM tree from some markup
- use JS in the console to grab elements from a site and manipulate them
- run the boilerplate, with a hello world element
- news.com.au => replace with kittens example

## callback functions

- pass a function to a function
- eg pass funcA into funcZ, then call funcA inside funcZ

## event handling

- pretty intuitive, though the details can be tricky
- attach these to DOM elements, and they wait for an event eg 'click'
- then they do something
- do a simple hello world example
  - change the background color on click

## Chrome debugger

https://javascript.info/debugging-chrome
- bit of a quick explainer on what exactly a debugger is
- demo how to use it
- try to use it while building stuff (especially when I have an actual bug)
- mention that node also has a debugger, but browser one is better (plus we're mostly doing frontend JS in this course)

## Callbacks

- Give a quick overview
- Make it clear that 'callback' is just a name for passing a function to a function and calling it. Nothing more than that.
- Can be either async or sync
- async means leaving 'javascript land'
- only real use case for sync callbacks is as arguments to iterators eg `forEach`

```javascript
// general function that replaces one string with another
let namesFromDb = ["Finn the human", "Jake the dog", "Princess Bubblegum", "Lemongrab"]

let nonBreakingSpace = string => string.replace(' ', '&nbsp;')

let mutableForEach = (someArray, cbFunction) => {
  for (let i = 0; i < someArray.length; i++) {
    someArray[i] = cbFunction(someArray[i])
  }
}

mutableForEach(namesFromDb, nonBreakingSpace)
```

## Runaway codealong

## Challenges/Exercises

- use the dice function from last week, and create a dice roll game in the browser
