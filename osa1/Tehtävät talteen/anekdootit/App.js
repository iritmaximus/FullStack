import React, { useState } from 'react'

const App = () => {

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]


  console.log('Votes in App:', votes)

  const getNewNumber = () => {
    let randomNumber =  Math.floor(Math.random() * 6)
    console.log('Random number:', randomNumber)
    return randomNumber
  }

  const setNewNumber = () => {
    setSelected(getNewNumber)
  }

  const updateVotes = (votes) => {
    console.log('Votes:', votes)
    const copy = [...votes]
    copy[selected] += 1
    console.log('Copy:', copy)
    return copy
}

  const calculateHighest = (votes) => {
    const copy = [...votes]
    const highest = copy.sort(function(a, b){return b - a})
    console.log('Copy:', copy)
    let highestIndex = votes.indexOf(highest[0])
    return highestIndex
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <br></br>
        has {votes[selected]} votes
        <br></br>
        <button onClick={setNewNumber}>
          Next anecdote
        </button>
        <button onClick={() => setVotes(updateVotes(votes))}>
          Vote
        </button>
      </div>
      <h1>Anecdote with most votes</h1>
      <p>
      {anecdotes[calculateHighest(votes)]}
      <br></br>
      has {votes[calculateHighest(votes)]} votes
      </p>
    </div>
  )
}

export default App
