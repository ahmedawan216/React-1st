import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Nav2 = (props) => {

  const data = useContext(ThemeDataContext);

  return (
    <div className='flex gap-8 font-medium text-lg text-white'>
      <h4>Home</h4>
      <h4>About {data}</h4>
      <h4>Contact</h4>
      <h4>{data} Services</h4>
      <h4>{props.theme}</h4>
    </div>
  )
}

export default Nav2