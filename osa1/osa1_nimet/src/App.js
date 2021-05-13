import React from 'react'

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow = props.age
  }

  return (
      <div>
          <p>Hello {props.name}</p>
          <p>So you were propably born {bornYear()}</p>
      </div>
  )
}

const App = () => {
    return (
        <div>
          <h1>Greetings</h1>
          <Hello name='Maya'/>
          <Hello name='Pööpeli'/>
          <Hello name='Wakas'/>
      </div>
  )
}

export default App
