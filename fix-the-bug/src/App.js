import './App.css'

import React from 'react'

class App extends React.Component {
  state = {
    timesClicked: 0
  }

  handleClick() {
    this.setState({ timesClicked: this.state.timesClicked + 1 })
  }

  render() {
    const { timesClicked } = this.state

    return (
      <>
        <p>You've clicked it {timesClicked} times</p>
        <button onClick={this.handleClick}>click me!</button>
      </>
    )
  }
}

export default App;
