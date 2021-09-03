## Content to cover

- react and rails API integration
  - cors
  - JWT
- deployment

# Thu

## Intro

- Mention about groups (anyone you don't want to work with?)

# Fri morning

- morning challenge - rails validation
- React kahoot #7

# Trello clone codealong

- Be sure to cover context API
  - dark/light theme
- using custom hook to manage toggling
- https://www.joshwcomeau.com/snippets/react-hooks/use-toggle/
```javascript
// hooks file
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)
  const toggle = useCallback(() => {
    setValue(value => !value )
  }, [])
  return [value, toggle]
}

// component
const [visible, toggle] = useToggle()
```
- note: consider creating a basic example with drag and drop ready to go, and get the students to clone it. Sorting that out in class is a waste of time.

## Drag and drop approaches

### react-dnd

Note: my favourite so far

pros:
- created by Dan Abramov
- I have an ideal example https://github.com/web-pal/react-trello-board

cons:
- doesn't have smooth transitions
- lower quality on npm (why?)

### react-spring

pros:
- already got it working, and it's great
- spring itself seems awesome

cons:
- a lot of complex boilerplate


### react-draggable

pros:
- most popular, and good reviews

cons:
- can't find good list example

### react-draggable-list

pros:
- built ofr purpose, little boilerplate

cons:
- not that popular
- not versatile
- API/docs aren't amazing

## Rails API for trello clone

- `$ rails new trello-clone-api-dry-run --api -d=postgresql`

### Questions

- How to implement the ordering? Ok to just save the index?

### Create model manually

- `$ rails g model Card title:string description:text`
- `$ rails db:create`
- `$ rails db:migrate`

### Using scaffold

- `$ rails g scaffold Card title:string description:text`
