import React from 'react'



const Header = ({ text }) => {
  return (
    <h3>{text}</h3>
  )
}



const Parts = ({ parts }) => {

  const returnParts = (part) => {
    console.log('Part:', part)
    return <p key={part.id}>{part.name} {part.exercises}</p>
  }

  return (
    <>
      {parts.map(returnParts)}
    </>
  )
}



const Total = ({ parts }) => {
  const calculateTotal = () => {
    console.log('Calculating...')

    const calculateSum = (initialValue, part) => {
      console.log('Part:', part)
      console.log('Initial Value:', initialValue)
      
      const sum = part.exercises
      
      const total = initialValue
      

      console.log('Sum:', sum)
      console.log('Total:', total)

      return total + sum
    }
  


    const total = parts.reduce(calculateSum, 0)

    console.log('Returned Total:', total)
    return total
  }

  const total = calculateTotal()

  return (
    <strong>Total of {total} exercises</strong>
  )
}



const Content = ({ course }) => {  
  return (
    <>
      <Parts parts={course.parts} key={course.id} />
      <Total parts={course.parts} course={course} />
    </>
  )
}

const Courses = ({ courses }) => {
  console.log('courses:', courses)

  const returnCourses = (course) => {
    return (
    <>
      <Header text={course.name}/>
      <Content course={course} />
    </>
    )
  }

  return (
    <>
      {courses.map(returnCourses)}
    </>
  )
}



export default Courses