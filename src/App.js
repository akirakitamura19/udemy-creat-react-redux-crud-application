import React, { Component } from 'react';

class App extends Component {
  render() {
    const Greeting = "Hello Youtube"
    return (
      <React.Fragment>
        <input type='text' onChange={() => {console.log("I am changed.")}} />
        {Greeting}
      </React.Fragment>
    )
  }
}

export default App;
