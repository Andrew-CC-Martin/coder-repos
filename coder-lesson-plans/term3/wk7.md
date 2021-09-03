## Content to cover

- conditional rendering
- class components
  - state
  - lifecycle

### Extras

- PropTypes

## Notes

- Use tailwind for styling on next codealong

## Thu morning

- Morning challenge
- admin
  - finish at 12:30 for mentor talk
  - Kaushik Mulukutla from bizcubed
- kahoot - react #2
- lightning talk
- run through conditional rendering
- run through class components
  - state
  - lifecycle

## Thu arvo

## Fri morning

- Morning challenge
- Kahoot - React #3
- Nick H lightning talk
- codealong - CSS gradient generator

## Fri arvo

## Fri morning challenge

- Find the bug
- create some buggy React code and get them to fix it

## Conditional rendering

```javascript
// if
const SomeComponent = ({ isLoading }) => {
  if (isLoading) {
    return <p>loading...</p>
  }

  return <p>Actual content</p>
}
```

```javascript
// ternary
const SomeComponent = ({ isLoading }) => (
  isLoading ? <p>loading...</p> : <p>Actual Content</p>
)
```

```javascript
// boolean operators
const SomeComponent = ({ hasExtra }) => {
  return (
    <article>
      <p>Main Content</p>
      {hasExtra && <p>some extra content</p>}
    </article>
  )
}
```

## Class components

- The 'old' way of doing things
  - but not that old, so still necessary
  - Better as a learning tool, thanks to descriptive function names (`render()`, `componentDidUpdate()`, etc)

```javascript
class MyComponent extends React.Component {
  render() {
    return (
      <p>hello, world!</p>
    )
  }
}
```

- Quick mention about `this` binding, and avoiding it with arrow functions

```javascript
constructor(props) {
  super(props)
  this.handleClick = this.handleClick.bind(this)
}

// without binding, 'this' refers to the handclick function
// with binding, 'this' refers to the class itself
handleClick(event) {
  // your event handling logic
}

// vs
handleClick = (event) => {

  // your event handling logic
}
```

### State

```javascript
class MyComponent extends React.Component {
  // initial component state
  state = {
    timesClicked: 0
  }

  updateClickCounter = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  // what will be rendered by the component
  render() {
    return (
      <>
        <p>times button clicked: {this.state.timesClicked}</p>
        <button onClick={this.updateClickCounter}>click me!</button>
      </>
    )
  }
}
```

- Don't directly modify state!
- Need to use `this.setState`, or React won't know to trigger a render
- each piece of state lives on one component only
- state can be passed to child components as props
- if two sibling need to share state, generally the state should be on the parent

### Lifting State

- show putting state on parent

### Lifecycle

```javascript
class MyComponent extends React.Component {
  // initial component state
  state = {
    timesClicked: 0
  }

  // this will fire if the component updates
  componentDidUpdate() {
    // something you want to happen when the component updates
    // alert('component updated')
    console.log('component updated')
  }

  // this determines whether the component should update
  shouldComponentUpdate(prevState) {
    // return true if updating
    // return false if not updating

    // note that in this example, state still updates
    // should component update really means 'should component re-render?'
    const { timesClicked } = this.state
    if (timesClicked % 2 == 0) {
      return false
    }

    return true
  }

  /*
  this fires after the component mounts
  which means that it has been added to the virtual DOM by its parent
  */
  componentDidMount() {
    console.log('component mounted!')
  }

  updateClickCounter = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  // what will be rendered by the component
  render() {
    return (
      <>
        <p>times button clicked: {this.state.timesClicked}</p>
        <button onClick={this.updateClickCounter}>click me!</button>
      </>
    )
  }
}
```

```javascript
// bigger eg:
class MyComponent extends React.Component {
  // initial component state
  state = {
    timesClicked: 0
  }
  // what will be rendered by the component
  render() {
    return (
      <p>times button clicked: {this.state.timesClicked}</p>
    )
  }
}
```

## Codealong - todo list ("trello clone")

- V1.1 - just one list
- V1.2 - persist with localStorage
- V2 - multiple lists, with buttons to move left/right (trello-style)

## Codealong - CSS gradient generator

- Two (controlled) colour picker components
- Renders a gradient between those two colours
- Displays the CSS code to create that gradient

### Extras

- add color
- local storage persistence

### Notes

- remember to use proptypes
- Create an infinite loop by calling setState in render
- Update array state using spread operator
```javascript
const newArray = [...stateArray, newElement]
this.setState({
  stateArray: newArray
})
```
- consider writing a unit test to make sure that state doesn't get mutated
