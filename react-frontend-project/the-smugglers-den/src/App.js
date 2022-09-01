import './css/App.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


function App() {
  return (
  <div className="App">
      <div className="mainPageContainer">
        <h1 className='mainPageTitle'>Welcome to The Smuggler's Den</h1>
        {/* <img
          src="https://see.fontimg.com/api/renderfont4/y0xm/eyJyIjoiZnMiLCJoIjoyOCwidyI6MTAwMCwiZnMiOjI4LCJmZ2MiOiIjMUMxQzFDIiwiYmdjIjoiI0YwRUFFQSJ9/V2VsY29tZSB0byBUaGUgU211Z2dsZXIncyBEZW4/star-jedi-outline.png"
          alt="The Smuggler's Den"
        /> */}
      <h3 className='websiteDescription'>This Website contains all your essential Star Wars needs, including lore not included within the original trilogy! </h3>
        </div>
        <div className="mainPageComponents">
          <h4>Click any of the buttons to go to your favorite page!</h4>
          <h2>Enter The Smuggler's Den With Caution.</h2>
        </div>
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
      <div className="images">
        <img className="obiWan" src="https://bit.ly/3KxzUjV" alt="" />
      </div>
    </div>
  );
}

export default App;
