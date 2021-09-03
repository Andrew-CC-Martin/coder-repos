## Content to cover

- forms
- hooks

## Questions

- how to add eslint hooks plugin to CRA?

## Thu morning

- talk about best way to learn
  - play, hack, build
  - understanding is valuable, but less important
- mention code reviews
- morning challenge?
- kahoot?
- hooks intro
- forms intro (using hooks)
- codealong: refactor gradient generator to hooks

## Thu arvo

- Mentor session with Ash on internship

## Fri morning

- morning challenge?
- kahoot?
- continue codealong

## Fri arvo

- Callum git merge conflict review

## Fri morning challenge

RNA transcription
- For a given DNA string, give its RNA complement
```javascript
import { toRna } from "./rna.js"

describe('toRna()', function () {
  it('transcribes cytosine to guanine', function () {
    expect(toRna('C')).toEqual('G');
  });

  xit('transcribes guanine to cytosine', function () {
    expect(toRna('G')).toEqual('C')
  })

  xit('transcribes adenine to uracil', function () {
    expect(toRna('A')).toEqual('U')
  })

  xit('transcribes thymine to adenine', function () {
    expect(toRna('T')).toEqual('A')
  })

  xit('transcribes all dna nucleotides to their rna complements', function () {
    expect(toRna('ACGTGGTCTTAA'))
      .toEqual('UGCACCAGAAUU')
  })

  xit('correctly handles completely invalid input', function () {
    expect(function () { toRna('XXX') }).toThrow(
      new Error('Invalid input')
    )
  })

  xit('correctly handles partially invalid input', function () {
    expect(function () { toRna('ACGTXXXCTTAA') }).toThrow(
      new Error('Invalid input')
    )
  })
})
```

## Forms

- explain controlled components
  - show example
  - jump on jamboard to draw the loop of updates
- quickly review `e.preventDefault()`
  - show what happens if we don't use it
- labels
- validators
  - invalid messages
  - consider using composition here
```javascript
// app.test.js
import { checkIfNaughty, naughtyList } from './App'

test('it checks if you use any naughty words', () => {
  const test1 = "poo poo"
  expect(checkIfNaughty(test1, naughtyList)).toBe(true)
})

// app.jsx
export const naughtyList = ["poo", "bum"]

export const checkIfNaughty = (string, naughtyList) => {
  let isNaughty = false

  naughtyList.forEach((bannedWord) => {
    if (string.includes(bannedWord)) {
      isNaughty = true
    }
  })

  return isNaughty
}

// class version
class App extends React.Component {
  state = {
    isNaughty: false
  }

  handleChange = (event) => {
    const { value } = event.target
    const isNaughty = checkIfNaughty(value, naughtyList)
    this.setState({isNaughty})
  }

  render() {
    const { isNaughty } = this.state
    return (
      <div className="App">
        <input onChange={this.handleChange} type="text" />
        {isNaughty && <p>THAT IS A NAUGHTY WORD!!!</p>}
      </div>
    )
  }
}

export default App
```

### Keys deep dive

- Don't forget to talk about keys and how they work
- Give example of removing element from middle of array
  - explain how react will only remove that one DOM node, because it knows which element to remove

## Hooks

### history & concept
- allow you to "hook into" state and lifecycle inside functional components
<!-- - more than just about avoiding ES6 classes (though that is nice)
  - can re-use stateful logic between components more easily using custom hooks -->

- Syntactic differences

- refactor forms stuff above to use hooks
```javascript
// hooks version
const App = () => {
  const [isNaughty, setIsNaughty] = useState(false)

  const handleChange = (event) => {
    const { value } = event.target

    const isNaughty = checkIfNaughty(value, naughtyList)
    setIsNaughty(isNaughty)
  }

  return (
    <div className="App">
      <input onChange={handleChange} type="text" />
      {isNaughty && <p>THAT IS A NAUGHTY WORD!!!</p>}
    </div>
  )
}
```

### useEffect

- by default, runs on every render, including first
- takes anon function as 1st argument, which gets run on every update/render

```javascript
// this is basically componentDidMount combined with componentDidUpdate
useEffect(() => {
  document.title = `You clicked ${count} times`;
})
```

- optional second argument to useEffect is an array of values (from props and state) which the effect depends on
- effect only runs if one of those values changes
- note: important when using this feature to pass *all* the values that change over time and are used by the effect

```javascript
// will only fire if count has actually changed
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count])
```

- can also pass in an empty array, which means effect only runs on mount/unmount

```javascript
// This will only run during 1st render, so is basically the same as componentDidMount
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [])
```

## Codealong - hooks refactor

- refactor one of the earlier apps to hooks (todo list?)
  - todo list is good, as it also requires forms
