import axios from 'axios';
import { useState } from 'react';

const App = () => {

  // New:
  const [data, setData] = useState([]);

  const getData = async () => {  
    const response = await axios.get('https://picsum.photos/v2/list');

    setData(response.data);
    
  }

  // const getData = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  //   console.log(response.data);
    
  // }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (elem, idx) {
          
          return <h2>Hello! '{elem.author}' {idx}</h2>
        })}
      </div>
    </div>
  )
}

export default App