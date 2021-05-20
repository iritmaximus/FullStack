import React, { useState, useEffect} from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY


const Weather = ({ country, weather, showWeather }) => {



  if (showWeather) {
    console.log('Weather:', weather)
    console.log('Icon:', 'http:' + weather.current.condition.icon)
    return (
      <div>
        <h2>Weather in {weather.location.name}</h2>
        <br></br>
        <strong>Temperature:</strong> {weather.current.temp_c} Celsius
        <br></br>

        <img scr={'http:' + weather.current.condition.icon} alt={weather.current.condition.text}></img>
        <br></br>
        <strong>Wind:</strong> {weather.current.wind_mph} mph in the direction {weather.current.wind_dir}
      </div>
    )
  } else {
    console.log('Weather loading... aka !showWeather')
    return (
      <h2>Weather loading...</h2>
    )
  }
}

const Country = ({ country, singleCountry, setNewFilter }) => {


  const [ weather, setWeather ] = useState([])
  const [ showWeather, setShowWeather ] = useState(false)

  useEffect(() => {
    console.log('Weather pending...')

    
    axios
      .get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${country.name}&aqi=no`)
      .then(response => {
        setWeather(response.data)
        setShowWeather(true)
        console.log('Show yourself... pls')

      })
  }, [country.name])

  if (singleCountry) {
    return (
      <div>
        <h1>{country.name}</h1>

        <p>
          Capital: {country.capital}
          <br></br>
          Population: {country.population}
        </p>

        <h2>Spoken languages</h2>
        <ul>
          {country.languages.map(language => 
            <li key={language.name}>{language.name}</li>)}
        </ul>
        <img 
        src={country.flag} 
        alt="Country's flag"
        width='170'
        ></img>
        <Weather 
        country={country} 
        weather={weather}  
        showWeather={showWeather} />
        
      </div>
    )
  } else {
    return (
  <div>
    {country.name}

    <input
    type='button'
    name={country.name}
    value='Show'
    onClick={() => 
      console.log('Button pressed and filter set to ', country.name) 
      || setNewFilter(country.name)}/>
  </div>
    )
  }
}


const Countries = ({ countries, setNewFilter }) => {

  if (countries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter.
      </div>
    )
  } else if (countries.length === 1) {
    return (
      <>
        {countries.map(country => 
          <Country 
          country={country} 
          key={country.name} 
          singleCountry={true}
          setNewFilter={setNewFilter}
          />)
        }
      </>
    )
  } else {
    return (
      <div>
        {countries.map(country => 
          <Country 
          country={country} 
          key={country.name}
          singeCountry={false} 
          setNewFilter={setNewFilter}/>)
        }
      </div>
    )
  }
} 





const App = () => {


  const [ countries, setCountries ] = useState([])

  const [ newFilter, setNewFilter ] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  

  useEffect(() => {

    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        console.log('Promise fulfilled!')
      })
  }, [])

  

  

  const handleFilter = (event) => {
    console.log('Event:', event.target.value)
    setNewFilter(event.target.value)

    if (newFilter !== '') {
      setShowAll(false)
    }
    
    
  }

  const filteredCountries = showAll 
    ? countries 
    : countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase()))


  return (
    <div>
      Find countries: 
      <input 
      value={newFilter}
      onChange={handleFilter}
      />
      <Countries countries={filteredCountries} setNewFilter={setNewFilter}/>
      
    </div>
  )
}

export default App