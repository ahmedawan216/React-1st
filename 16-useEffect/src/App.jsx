import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  /* Old one */
  // const [num, setNum] = useState(0);
  // const [num2, setNum2] = useState(100);

  // useEffect(function () {
  //   console.log('Use effect is running...');
    
  // }, [num]);

  // New one:

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
    console.log('Value of "A" is changing');
  }
  function bChanging() {
    console.log('Value of "B" is changing');
  }

  useEffect(function () {
    aChanging();
    console.log('UseEffect is running...');
    
  }, [a])

  return (
    // New one:
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={()=>{setA(a+1)}} >Change A</button>
      <button onClick={()=>{setB(b-1)}}>Change B</button>
    </div>


    /* Old one */
    // <div>
    //   <h1>num, {num} </h1>
    //   <h1>num2, {num2} </h1>
    //   <button 
    //   onMouseEnter={()=>{
    //     setNum(num+1)
    //   }}
    //   onMouseLeave={()=>{
    //     setNum2(num2+10)
    //   }}
    //   >Hover</button>
    // </div>
  )
}

export default App