import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
       <Header course={course.name}/>
       <Content parts={course.parts} />
       <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return <h1> {props.course}</h1>
}

const Content = (props) => {

  const first = props.parts[0]
  const second = props.parts[1]
  const third = props.parts[2]


  return (
    <>
      <Part part={first}/>
      <Part part={second}/>
      <Part part={third}/>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Total = (props) => {
  let exercises = 0

  props.parts.forEach(values => {
    exercises += values.exercises
  })
  return <p>Number of exercises {exercises}</p>
}

export default App
