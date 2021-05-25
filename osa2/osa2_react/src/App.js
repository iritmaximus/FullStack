import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'



const App = () => {
  const [ persons, setPersons ] = useState([])

  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => setPersons(initialPersons))
  }, [])
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  

  const addPerson = (event) => {
    event.preventDefault()
    console.log('Button clicked...', event.target)
    const newPerson = {
      name: newName,
      number: newNumber,
      id: Number(persons[persons.length - 1].id) + 1  
    }

    if (persons.find(person => person.name === newName) !== undefined) {
      const result = window.confirm(
        `${newName} is already in the phonebook. Replace the old number with a new one?`
      )

      if (result) {
        personService
          .update(persons.find(person => person.name === newName).id, newPerson)  
          .then(setPersons(persons.map(person => person.name === newName ? newPerson : person)))
      } 

    } else {
      personService
        .add(newPerson, newPerson.id)
      setPersons(persons.concat(newPerson))

      console.log('Persons', persons)
    }

    setNewName('')
    setNewNumber('')
  }

  const removePerson = (name, id) => {
    const result = window.confirm(`Delete ${name}?`)

    if (result) {
      personService 
        .remove(id)
        .then(
          setPersons(persons.filter(person => person.id !== id))
        )
    }
  }


  const filteredPersons = showAll 
    ? persons 
    // vähän ikävän näköinen, mutta molemmat muunnetaan pieniksi kirjaimiksi
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  

  const handleNewName = (event) => {
    console.log('Name:', event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log('Number:', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) => {
    console.log('Filter:', event.target.value)
    setNewFilter(event.target.value)

    if (newFilter !== '') {
      setShowAll(false)
    }

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter 
        newFilter={newFilter}
        handleNewFilter={handleNewFilter}
        />
      </div>
      <div>
        <PersonForm 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        />
      </div>
      
      <h2>Numbers</h2>
      <Persons 
      persons={filteredPersons}
      removePerson={removePerson} />
    </div>
  )
}

export default App