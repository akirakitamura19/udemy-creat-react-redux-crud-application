import React from 'react';
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    {name:"Aki", age:28},
    {name:"Airi", age:27},
    {age:1}
  ]

  return (
    <div>
      <User name={"Aki"} age={28} />
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
      )
    }

  const User = (props) => {
    return <div>I am {props.name} and {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}


export default App;
