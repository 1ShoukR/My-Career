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
      <img
        src="https://see.fontimg.com/api/renderfont4/y0xm/eyJyIjoiZnMiLCJoIjoyOCwidyI6MTAwMCwiZnMiOjI4LCJmZ2MiOiIjMUMxQzFDIiwiYmdjIjoiI0YwRUFFQSJ9/V2VsY29tZSB0byBUaGUgU211Z2dsZXIncyBEZW4/star-jedi-outline.png"
        alt="The Smuggler's Den"
      />
      <h5>All your Star Wars needs, in one place!</h5>
      {/* <img
        src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png"
        alt="logo"
      /> */}
      <div className="mainPageContainer">
        <div className="mainPageComponents">
          <h4>Click any of the buttons to go to your favorite page!</h4>
          <div className="mainPageButtons">
            <Link to="/movies">
              <Button variant="outlined" size="large">
                Movies
              </Button>
            </Link>
            <Link to="/people">
              <Button variant="outlined" size="large">
                People
              </Button>
            </Link>
            <Link to="planets">
              <Button variant="outlined" size="large">
                Planets
              </Button>
            </Link>
            <Link to="species">
              <Button variant="outlined" size="large">
                Species
              </Button>
            </Link>
            <Link to="/starships">
              <Button variant="outlined" size="large">
                Starships
              </Button>
            </Link>
            <Link to="vehicles">
              <Button variant="outlined" size="large">
                Vehicles
              </Button>
            </Link>
            <Link to="favorites">
              <Button variant="outlined" size="large">
                Favorites
              </Button>
            </Link>
          </div>
          <div>
            <h2>Time to get nerdy!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
