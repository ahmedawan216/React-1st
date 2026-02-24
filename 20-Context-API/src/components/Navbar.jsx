import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext';

const Navbar = (props) => {

  const data = useContext(ThemeDataContext);

  return (
    <div className='flex items-center bg-lime-600 justify-between font-semibold text-3xl text-white
    py-4 px-8 rounded-4xl mt-4 m-4'>
      <h2>{data}</h2>
      <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar