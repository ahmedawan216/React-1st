import React from 'react'

const App = () => {

  // localStorage.setItem('user', 'Ahmed');
  // localStorage.setItem('age', '20');

  // const user = localStorage.getItem('user');
  // const age = localStorage.getItem('age');

  // console.log(user, age);

  const user = {
    username: 'Ahmed Iqbal Awan',
    age: 20,
    city: 'Rawalpindi'
  }
  localStorage.setItem('user', JSON.stringify(user));
  const USER = JSON.parse(localStorage.getItem(user));

  console.log(USER);


  return (
    <div>App</div>
  )
}

export default App