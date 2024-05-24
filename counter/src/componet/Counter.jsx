import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

function Counter() {
    const count = useSelector( (state)=> state.counter.value);
    const dispach = useDispatch();
  return (
    <div>
        <h3>Counter App</h3>
        <div>
            <button onClick={ ()=> dispach(increment())}>Increment</button>
            <p>{count}</p>
            <button onClick={ ()=> dispach(decrement())}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter