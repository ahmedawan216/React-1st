import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({User:'Ahmed', age:20})

  const btnClicked = () => {
    const newNum = {...num};
    newNum.User = 'Malik Ahmed Awan';
    setNum(newNum);
    newNum.age = 22;
    setNum(newNum);
  }

  return (
    <div>
      <h1>{num.User}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App