import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import Movies from './components/Movies';
import Button from '@mui/material/Button';


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
            <Button variant="outlined" size="large" className="bootons">
              Movies
            </Button>
          </Link>
          <Link className="mainPageButtons" to="/people">
            <Button variant="outlined" size="large" className="bootons">
              People
            </Button>
          </Link>
          <Link className="mainPageButtons" to="planets">
            <Button variant="outlined" size="large" className="bootons">
              Planets
            </Button>
          </Link>
          <Link className="mainPageButtons" to="species">
            <Button variant="outlined" size="large" className="bootons">
              Species
            </Button>
          </Link>
          <Link className="mainPageButtons" to="/starships">
            <Button variant="outlined" size="large" className="bootons">
              Starships
            </Button>
          </Link>
          <Link className="mainPageButtons" to="vehicles">
            <Button variant="outlined" size="large" className="bootons">
              Vehicles
            </Button>
          </Link>
          <Link className="mainPageButtons" to="favorites">
            <Button variant="outlined" size="large" className="bootons">
              Favorites
            </Button>
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
