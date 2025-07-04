import React, { useState } from 'react'

function Demo() {
  const [color, setColor] = useState('My Name is Shantanu Patil...!');
  
  const handlecolor = () => {
    setColor(<h1 style={{ color: 'red' }}>My Name is Shantanu Patil...!</h1>)
  }
  const handlecolor1 = () => {
    
    setColor(<h1 style={{ color: 'green' }}>My Name is Shantanu Patil...!</h1>)
  }
  const handlecolored = () => {
    setColor(<h1 style={{ color: 'blue' }}>My Name is Shantanu Patil...!</h1>)
  }
  const handlecolored3 = () => {
    setColor(<h1 style={{ color: 'black' }}>My Name is Shantanu Patil...!</h1>)
  }
  const handlecolored1 = () => {
    setColor(<h1 style={{ fontWeight: 'bold' }}>My Name is Shantanu Patil...!</h1>)
  }
  const handlecolored2 = () => {
    setColor(<h1 style={{ backgroundColor: 'skyblue', paddingBlock: '20px', border: 'solid 1px black' }}>My Name is Shantanu Patil...!</h1>)
  }
  const Font = () => {
    setColor(<h1 style={{ textAlign: 'center' }}>My Name is Shantanu Patil...!</h1>)
  }
  const ul = () => {
    setColor(<h1><u>My Name is Shantanu Patil...!</u></h1>)
  }
  const Font1 = () => {
    setColor(<h1>Shantanu Gokul Patil...!</h1>)
  }

  return (
    <div>

      <h1>{color}</h1>
      <button onClick={handlecolor}>Red</button> &nbsp;
      <button onClick={handlecolor1}>Green</button> &nbsp;
      <button onClick={handlecolored}>Blue</button> &nbsp;
      <button onClick={handlecolored1}>Bold</button> &nbsp;
      <button onClick={handlecolored2}>Background</button> &nbsp;
      <button onClick={Font}>Center</button> &nbsp;
      <button onClick={Font1}>Full Name</button> &nbsp;
      <button onClick={()=>setColor()}>Hide</button> &nbsp;
      <button onClick={()=>setColor('My Name is Shantanu patil...!')}>Show</button> &nbsp;
      <button onClick={ul}>Underline</button> &nbsp;
      <button onClick={handlecolored3}>Original</button>
      <hr/>
      
    </div>
                                                   
  )
}
export default Demo
