import React, {useState} from 'react';
import './App.css';

function App() {
  const[count, setCount] = useState(4)
  
  function decrementCount(){
    setCount(prevCount => prevCount-1)
    setCount(prevCount => prevCount-1)
  }
  
  function incrementCount(){
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
  }
  

  return (
    <div className="">
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
