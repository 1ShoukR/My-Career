import React from 'react'
import { useDispatch } from 'react-redux'; 
import {setFavorites} from '../actions/setFavorites';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../css/starships.css"




const StarshipCard = (props) => {
const dispatch = useDispatch();

  return (
    <div>
      <Card className="starshipCardContainer">
        <div className="starshipTitle">
          <h1>{props.item.name}</h1>
        </div>
        <div className='manufactured'>
          <p>Manufactured by {props.item.manufacturer}</p>
        </div>
        <div className="model">
          <p>{props.item.model}</p>
        </div>
        <div className='starshipClass'>
          <p>Known as a {props.item.starship_class}</p>
        </div>
        <div className='speed'>
          <p>Max Speed of {props.item.max_atmosphering_speed} KM/H</p>
        </div>
        <div className="cost">
          <p>${props.item.cost_in_credits} in Galactic Credits</p>
        </div>
        <div className="created">
          <p>{props.item.created}</p>
        </div>
        <div className="favoritesButton">
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              setFavorites(dispatch, props);
            }}
          >
            Add to Favorites
            <FavoriteIcon fontSize="small" />
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default StarshipCard