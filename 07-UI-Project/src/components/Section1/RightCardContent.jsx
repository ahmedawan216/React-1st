import React from 'react'

const RightCardContent = (props) => {
  return (

      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white h-11 w-11 text-2xl font-semibold rounded-full flex items-center justify-center'>{props.id+1}</h2>
        <div>
          <p className='text-shadow-2xs text-lg font-medium leading-relaxed text-white mb-12'>{props.desc}</p>
          <div className='flex justify-between'>
            <button className='bg-blue-500 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
            <button className='bg-blue-500 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    
  )
}

export default RightCardContent