import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


const App = () => {
  const [ persons, setPersons ] = useState([
      {name: 'Arto Hellas', number: '+358 40 123 4567'},
      {name: 'Wakas Pöps', number: '+358 45 892 5300'},
      {name: 'Aawotus Hih', number: '+358 40 525 9232'}
  ]) 
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  

  const addPerson = (event) => {
    event.preventDefault()
    console.log('Button clicked...', event.target)
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (persons.find(person => person.name === newName) !== undefined) {
      window.alert(`${newName} is already in the phonebook!`)
      setNewName('')
      setNewNumber('')

      console.log('Name already in phonebook', newName)

    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')

      console.log('Persons', persons)
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
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App