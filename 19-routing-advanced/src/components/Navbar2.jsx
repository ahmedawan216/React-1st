import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const Navigate = useNavigate();

  return (
    <div className='bg-cyan-800 '>
       <button onClick={()=>{
        Navigate('/');
      }} className='bg-amber-700 px-5 py-3 m-6 rounded-2xl font-semibold
       active:scale-95 cursor-pointer'>Return to Home Page</button>

       <button onClick={()=>{
        Navigate(-1);
      }} className='bg-amber-700 px-5 py-3 m-6 rounded-2xl font-semibold
       active:scale-95 cursor-pointer'>Back</button> 

       <button onClick={()=>{
        Navigate(+1);
      }} className='bg-amber-700 px-5 py-3 m-6 rounded-2xl font-semibold
       active:scale-95 cursor-pointer'>Next</button> 
    </div>
  )
}

export default Navbar2