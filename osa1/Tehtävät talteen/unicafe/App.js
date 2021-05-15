import React, { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  console.log('Good:', good, 'Neutral:', neutral, 'Bad:', bad)
  // keskiarvon ja positiivisten prosenttien laskemiseen
  const allThrows = good + neutral + bad

  if (allThrows === 0) {
    console.log('No data to give statistics. Press any button to start')
    return <p>No feedback given</p>

  } else {
    return (
      <>
        <Header text='Statistics' />

        <table>
        <tbody>
            <tr>
              <th>Text</th>
              <th>Data</th>
            </tr>
            <tr>
              <td>Good:</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>Neutral:</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>Bad:</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>All Throws:</td>
              <td>{allThrows}</td>
            </tr>
            <tr>
              <td>Average:</td>
              <td>{(good * 1 - bad * 1) / allThrows}</td>
            </tr>
            <tr>
              <td>Positive:</td>
              <td>{good / allThrows * 100} %</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }

}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
  {props.text}
  </button>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text='Give feedback' />

      <Button text='Good' handleClick={handleGood} />
      <Button text='Neutral' handleClick={handleNeutral}/>
      <Button text='Bad' handleClick={handleBad} />

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}


export default App
