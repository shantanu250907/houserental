import React from 'react'

const Greeting = (props) => {
  return (
    <div>
      <p>{props.name} </p>
       <p> {props.age}</p>
    </div>
  )
}

export default Greeting

