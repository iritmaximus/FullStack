import React from 'react'

const Person = ({ name, number }) => {
  return (
    <div>
      {name}: {number}
    </div>
  )
}

const Persons = ({ persons }) => {

  return (
    <>
      {persons.map(person => 
        <Person name={person.name} key={person.name} number={person.number} />
      )}
    </>
  )
}

export default Persons