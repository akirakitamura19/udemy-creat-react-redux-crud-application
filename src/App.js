import React from 'react';

// class App extends Component {
//   render() {
//     const Greeting = "Hello Youtube"
//     return (
//       <React.Fragment>
//         <input type='text' onChange={() => {console.log("I am changed.")}} />
//         {Greeting}
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return "Meow"
}


export default App;
