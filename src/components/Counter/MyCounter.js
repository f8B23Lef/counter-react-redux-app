import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './MyCounter.css';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementByAmountAsync,
  selectCount,
} from '../../store/counterSlice';

export function MyCounter() {
  const [incrementAmount, setIncrementAmount] = useState(2);

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  // console.log('count: ', count, useSelector((state) => state.counter.value));

  return (
    <div className='counter'>
      <div className='row'>
        <button onClick={() => dispatch(increment())}>+</button>
        <div>Count: {count}</div>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div className='row'>
        <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>Add amount</button>
        <button onClick={() => dispatch(incrementByAmountAsync(Number(incrementAmount)))}>Add async</button>
      </div>
    </div>
  )
}
