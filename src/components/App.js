import React, { Component } from 'react';

const App = () => (
  <div>
    <Counter name='Taro'/>
  </div>
)

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handlePlusCount = () => {
    this.setState({count: this.state.count + 1})
  }

  handleMinusCount = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>I am {this.props.name}</div>
        <div>count: {this.state.count}</div>
        <button onClick={ this.handlePlusCount }>+</button>
        <button onClick={ this.handleMinusCount }>-</button>
      </div>
    )
  }
}

export default App;
