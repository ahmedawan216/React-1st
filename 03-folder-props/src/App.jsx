import React from 'react'
import Card from "./components/card";

const App = () => {
  return (
    <div className='parent'>
      <Card user="Ahmed Awan" age={20} img='https://images.unsplash.com/photo-1764336312138-14a5368a6cd3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user="King" age={19} img='https://images.unsplash.com/photo-1765498068996-1e4c0bfd2219?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D'/>
      <Card user="Rex" age={23} img='https://images.unsplash.com/photo-1763411711221-40166c5e20cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
    </div>
  )
}

export default App
