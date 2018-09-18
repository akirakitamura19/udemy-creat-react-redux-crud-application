import React from 'react';

const App = () => {
  const profiles = [
    {name:"Aki", age:"28"},
    {name:"Airi", age:"27"},
    {age:"??"}
  ]

  return (
    <div>
      <User name="Aki" age="28" />
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

User.defaultProps = {
  name: "Anonimas"
}

export default App;
