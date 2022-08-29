import React from 'react'
import { useDispatch } from 'react-redux';
import setFavorites from '../actions/setFavorites';
import Card from '@mui/material/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';

export const SpeciesCard = (props) => {
const dispatch = useDispatch();
return (
  <div>
    <Card className="speciesCardContainer">
      <div className="speciesTitle">
        <h1>Species: {props.item.name}</h1>
      </div>
      <div className="classification">
        <p>Classification: {props.item.classification}</p>
      </div>
      <div className="language">
        <p>Spoken Language: {props.item.language}</p>
      </div>
      <div className="designation">
        <p>Designation: {props.item.designation}</p>
      </div>
      <div className="averageHeight">
        <p>Average Height: {props.item.average_height} Centimeters</p>
      </div>
      <div className="averageLifespan">
        <p>Average Lifespan: {props.item.average_lifespan} Years</p>
      </div>
      <div className="eyeColor">
        <p>Eye Color: {props.item.eye_colors}</p>
      </div>
      <div className="favoritesButton">
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            setFavorites(dispatch, props);
          }}
        >
          Add to <FavoriteIcon fontSize="small" />
        </Button>
      </div>
    </Card>
  </div>
);
}
