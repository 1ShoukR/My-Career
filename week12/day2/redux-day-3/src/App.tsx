import React from 'react';
import { useAppSelector, useAppDispatch } from './app/hooks';
import './App.css';
import Homepage from './components/Homepage';
import Product from './components/Product';
import Cart from './components/Cart';


function App() {
  const dispatch = useAppDispatch()
  const counter = useAppSelector((state) => state.counter)
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
