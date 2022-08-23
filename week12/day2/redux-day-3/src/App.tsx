import React from 'react';
import { useAppSelector } from './app/hooks';
import './App.css';

function App() {
  const counter = useAppSelector((state) => state.counter)
  return (
    <div className="App">
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
