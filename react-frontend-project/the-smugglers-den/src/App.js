import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import Movies from './components/Movies';


function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The Smuggler's Den</h1>
      <h5>All your Star Wars needs, in one place!</h5>
      {/* <img
        src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png"
        alt="logo"
      /> */}
      <div className="mainPageContainer">
        <div className="mainPageComponents">
          <h4>Click any of the buttons to go to your favorite page!</h4>
          <Link className="mainPageButtons" to="/movies">
            <button className="bootons">Movies</button>
          </Link>
          <Link className="mainPageButtons" to="/people">
            <button className="bootons">People</button>
          </Link>
          <Link className="mainPageButtons" to="planets">
            <button className="bootons">Planets</button>
          </Link>
          <Link className="mainPageButtons" to="species">
            <button className="bootons">Species</button>
          </Link>
          <Link className="mainPageButtons" to="/starships">
            <button className="bootons">Starships</button>
          </Link>
          <Link className="mainPageButtons" to="vehicles">
            <button className="bootons">Vehicles</button>
          </Link>
          <Link className="mainPageButtons" to="favorites">
            <button className="bootons">Favorites</button>
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
