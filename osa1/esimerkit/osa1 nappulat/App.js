import React, { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

const increaseByOne = () => setCounter(counter + 1)
const reset = () => setCounter(0)
const decreaseByOne = () => setCounter(counter - 1)

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>

  )
}

  return (
    <div>
      <Display counter={counter} />
      <Button
        text='plus'
        handleClick={increaseByOne}
      />
      <Button
        text='minus'
        handleClick={decreaseByOne}
      />
      <Button
        text='reset'
        handleClick={reset}
      />
    </div>
  )
}

export default App
