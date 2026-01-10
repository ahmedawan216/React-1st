import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-75 rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <RightCardContent id = {props.id} tag={props.tag} desc={props.desc}/>
    </div>
  )
}

export default RightCard