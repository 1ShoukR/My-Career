import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 


function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The Smuggler's Den</h1>
      <h5>All your Star Wars needs, in one place!</h5>
    </div>
  );
}

export default App;
