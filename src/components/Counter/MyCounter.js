import React, { useState } from 'react';
import './MyCounter.css';

export function MyCounter() {
  const [count, setCount] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState(2);

  const increment = () => {
    setCount(count + 1)
  }
  
  const decrement = () => {
    setCount(count - 1)
  }

  const incrementByAmount = () => {
    setCount(count + Number(incrementAmount))
  }

  const incrementByAmountAsync = () => {
    
  }

  return (
    <div className='counter'>
      <div className='row'>
        <button onClick={increment}>+</button>
        <div>Count: {count}</div>
        <button onClick={decrement}>-</button>
      </div>
      <div className='row'>
        <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}></input>
        <button onClick={incrementByAmount}>Add amount</button>
        <button onClick={incrementByAmountAsync}>Add async</button>
      </div>
    </div>
  )
}
