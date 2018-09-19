import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
      super(props)
      this.state = {
        plusCount: 0,
        minusCount: 0,
        totalCount: 0,
      }
    }


  handlePlusCount = () => {
    this.setState(
      {
        plusCount: this.state.plusCount+1,
        totalCount: this.state.totalCount+1
      }
    )
  }

  handleMinusCount = () => {
    this.setState(
      {
        minusCount: this.state.minusCount-1,
        totalCount: this.state.totalCount-1
      }
    )
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>Plus Count: {this.state.plusCount} </div>
        <div>Minus Count: {this.state.minusCount} </div>
        <h1>Total Count: {this.state.totalCount} </h1>
        <button onClick={this.handlePlusCount}>+1</button>
        <button onClick={this.handleMinusCount}>-1</button>
      </div>
    )
  }
}

export default App;
