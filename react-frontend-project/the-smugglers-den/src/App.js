import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import Movies from './components/Movies';
import Button from '@mui/material/Button';
import CrawlText from './components/CrawlText';



function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="smugglersDen">
        <img
          src="https://see.fontimg.com/api/renderfont4/y0xm/eyJyIjoiZnMiLCJoIjoyOCwidyI6MTAwMCwiZnMiOjI4LCJmZ2MiOiIjMUMxQzFDIiwiYmdjIjoiI0YwRUFFQSJ9/V2VsY29tZSB0byBUaGUgU211Z2dsZXIncyBEZW4/star-jedi-outline.png"
          alt="The Smuggler's Den"
        />
      </div>
      <h5>All your Star Wars needs, in one place!</h5>
      <div className="mainPageContainer">
        <div className="rebelAliance">
          {/* <img
            src="https://cutewallpaper.org/24/rebel-alliance-logo-png/rebel-alliance-logo-vector-star-wars-rebel-symbol-pngstar-wars-logos-vector-free-transparent-png-images-pngaaacom.png"
            alt="rebel alliance"
          /> */}
        </div>
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
      <CrawlText />
    </div>
  );
}

export default App;
