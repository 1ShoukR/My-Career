import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import Movies from './components/Movies';


function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The Smuggler's Den</h1>
      <h5>All your Star Wars needs, in one place!</h5>
      <img
        src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png"
        alt="logo"
      />
      <div>
        <h4>Click any of the buttons to go to your favorite page!</h4>
        <div>
          <Link to="/movies">
            <button>Movies</button>
          </Link>
          <Link to="/people">
            <button>People</button>
          </Link>
          <Link to="planets">
            <button>Planets</button>
          </Link>
          <Link to="species">
            <button>Species</button>
          </Link>
          <Link to="/starships">
            <button>Starships</button>
          </Link>
          <Link to="vehicles">
            <button>Vehicles</button>
          </Link>
          <Link to="favorites">
            <button>Favorites</button>
          </Link>
          <div>
            <h2>Time to get nerdy!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
