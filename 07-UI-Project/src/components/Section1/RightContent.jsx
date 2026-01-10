import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex flex-nowrap overflow-x-auto rounded-4xl gap-10 p-4 w-4/4'>
      {props.users.map(function (elem, idx) {
        
        return <RightCard key = {idx} id = {idx} img={elem.img} desc={elem.desc} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent