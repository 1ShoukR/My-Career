import React from 'react';
import { useAppSelector, useAppDispatch } from './app/hooks';
import './App.css';

function App() {
  const dispatch = useAppDispatch()
  const counter = useAppSelector((state) => state.counter)
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default App;
