import React from 'react'
import styled from 'styled-components'

import './App.css';

const LoaderStylingWrapper = styled.div`
.lds-heart {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
}
.lds-heart div {
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: #fff;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: #fff;
}
.lds-heart div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
`

const Loader = () => (
  <div className="lds-heart">
    <div></div>
  </div>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: "",
      imageSource: "",
      loading: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ loading: true })

    const baseUrl = "https://pokeapi.co/api/v2/"
    fetch(`${baseUrl}pokemon/${this.state.searchValue}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const imageData = data.sprites.other["official-artwork"].front_default
        this.setState({
          imageSource: imageData
        })
        console.log("🚀 ~ file: App.js ~ line 23 ~ App ~ imageData", imageData)
      })
      .catch(err => console.log(err))
      .finally(() => this.setState({ loading: false }))
  }

  handleTextUpdate = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  clear = () => {
    this.setState({
      imageSource: ""
    })
  }

  render() {
    const { searchValue, imageSource, loading } = this.state

    if (loading) {
      return <Loader />
    }

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="eg bulbasaur"
            type="text"
            value={searchValue}
            onChange={this.handleTextUpdate}
          />
          <button type="submit">Click me!</button>
        </form>
        <button onClick={this.clear}>clear</button>
        {imageSource && <img src={imageSource} alt="a pokemon" />}
      </>
    )
  }
}

const Blah = () => <p>blahhhhh</p>

export default App;
