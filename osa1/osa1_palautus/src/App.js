import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} ex1={exercises1} ex2={exercises2}
       ex3={exercises3} />
      <Total excs={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h1> {props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exc={props.ex1} />
      <Part part={props.part2} exc={props.ex2} />
      <Part part={props.part3} exc={props.ex3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exc}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of excercises {props.excs}</p>
    </div>
  )
}

export default App
