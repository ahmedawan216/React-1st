import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0);

  function increaseNum() {
    setnum(num+1);
  }

  function decreaseNum() {
    setnum(num-1);
  }

  function jumpby5() {
    setnum(num+5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={jumpby5}>Jump by 5</button>
    </div>
  )
}

export default App