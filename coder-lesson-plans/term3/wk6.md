## Content to cover

- React intro
- JSX

### Extras

- eslint

## Questions

- Can I get straight into next week concepts (state & lifecycle) so I can start building stuff that's actually useful?
- Are we using props yet?
- cover styled components? tailwind?

## Notes

- This is a great opportunity to read the whole react docs, cover to cover like it's a book, and digest every little detail
- Create some slides to go over the theory stuff
- Try to do a dry-run for the code-along

## Thu morning

- morning challenge
- Kahoot - ES6 classes
- Lightning talk - Kat
- React intro (slides)
- JSX
- codealong - render a simple static page

## Thu arvo

- CRA troubleshooting
- Adi git flow review

## Fri morning

- morning challenge?
- Kahoot - JS fundamentals #6 (ajax)
- admin
  - back to campus
- codealong: rebuild pokedex in React

## Fri arvo

- Alex B open-ended review

## Thu morning challenge

- page load counter
- create a webpage that tells you how many times it has been loaded
- hint: you'll need some kind of data persistence for this (eg `localStorage`)

## Fri morning challenge

- use React in a vanilla JS project
- create a hello world react project without using create-react-app
- just use script tags to import React & React-DOM
go here for script tag imports https://reactjs.org/docs/cdn-links.html
and here for using react without JSX https://reactjs.org/docs/react-without-jsx.html

## React intro

- There's a lot of theory and jargon here. Some of it isn't essential to understand.
- But it's always helpful to understand what's going on under the hood.
- Plus, questions about theory are popular interview questions
- Don't forget to look at the extremely good docs https://reactjs.org/docs
  - especially the section 'thinking in React'
- Solves various problems in frontend development
  - state management
  - performance
    - virtual DOM, and diffed rendering
  - code cleanliness and structure

## CRA

- run through hello world in CRA
- walk through the code and talk a bit about what it's doing
  - React vs ReactDOM
  - `package.json` and react scripts

### Less crucial theory stuff

- Talk a little about webpack/babel and the build pipeline
  - Babel
    - translates non-standard stuff like JSX into standard JS
    - translates ES2020 JS into pre-ES2015 JS
    - minifies for prod build
  - webpack
    - packages all your files/modules up into a a build
    - runs the dev server

- flux architecture
  - immutable state
  - one-directional data-flow
- declarative design

### Essential knowledge

- components
  <!-- - state vs props
  - `this.setState`. Never mutate state. Mention this like 10x -->

## JSX

- JSX is a special markup language for creating React elements
- gets compiled by Babel down into calls to the `React.createElement()` function

```javascript
// before
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

// after
const element = React.createElement(
  'h1',
  {
    className: 'greeting'
  },
  'Hello, world!'
);
```

- allows us to create the UI of our site using a language similar to HTML, but with logic embedded

```javascript
const isRaining = true
## Codealong


const Rainy = (isRaining) => isRaining ? <p>Better grab an umbrella</p> : <p>It's sunny out, no dramas!</p>
```

- we basically use JSX to create objects which represent potential DOM elements, and they get rendered as real DOM elements when they're needed

- show syntactic differences between JSX and HTML
  - camelCase
  - string vs JS function names
  - JSX allows JS expressions embedded in {} (but not statements)
    - essentially, anything that would be accepted as a function argument
    - expression produces a value, and can be written wherever a value is expected
    - expression is anything that can be the argument to a function
  - statements perform an action eg loops if statements
  - show example of passing a ternary and boolean to function
- show mapping over array of data

### Rendering JSX

- so we've created all these React elements, how do we actually render them onto the screen?
  - Special npm package called `ReactDOM`, whose job it is to convert React elements into real DOM elements
```javascript
const element = <h1>Hello, world</h1>
ReactDOM.render(element, document.getElementById('root'))
```
  - from that point on, every 

```javascript

export const App = () => (
  <main>
    <h1>App</h1>
    <Parent1 />
    <Parent2 />
  </main>
)

const Parent1 = () => (
  <article>
    <h2>parent 1</h2>
    <Child1 />
    <Child2 />
  </article>
)

const Parent2 = () => (
  <article>
    <h2>parent 2</h2>
    <Child3 />
    <Child4 />
  </article>
)

const Child1 = () => <p>child 1</p>
const Child2 = () => <p>child 2</p>
const Child3 = () => <p>child 3</p>
const Child4 = () => <p>child 4</p>
```

### Props

- show passing props from parent to child

### One-way data flow

```javascript

export const App = () => (
  <main>
    <h1>App</h1>
    <Parent text="I'm the parent!" />
  </main>
)

const Parent = (props) => (
  <article>
    <h2>{props.text}</h2>
    <Child1 text="I'm the first child" />
    <Child2 text="I'm the second child" />
  </article>
)

const Child1 = (props) => <p>{props.text}</p>
const Child2 = (props) => <p>{props.text}</p>
```

## Styling

- React unopiniontated about styling
- But styled components are popular as they continue React's core concept of separation by concern

## Linting

- CRA comes with default eslint config
- install eslint extension to enable

## Codealong - blog posts

- write an array of blog posts, and render them

## Codealong: pokedex

- rebuild pokedex with React
  - put a loading spinner
- style it with styled components
  - use props to pass the colour
- use propTypes
  - show how it would have caught Victor's bug
