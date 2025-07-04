
import React, {useState} from 'react'

function Demo() {
    const [color,setColor]=useState('My Name is Shantanu Patil...!');
    const handlecolor=()=>{
        
            setColor(<h1 style={{color:'green'}}>My Name is Shantanu Patil...!</h1>)
        }
      const handlecolored=()=>
      {
        setColor(<h1 style={{color:'black'}}>My Name is Shantanu Patil...!</h1>)
    }

  return (
    <div>
        <h1>{color}</h1>
        {/* <h1>:{count}</h1>
       <button onClick={()=>handledecrement}>Change color</button>&nbsp;
      <button onClick={()=>setCount('My Name is Shantanu Patil...!')}>Original</button> */}
      <button onClick={handlecolor}>Colored</button>
      <button onClick={handlecolored}>Original</button>
    </div>
    
  )
}
export default Demo

