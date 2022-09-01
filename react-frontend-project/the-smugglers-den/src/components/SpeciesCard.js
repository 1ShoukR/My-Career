import React from 'react'
import { useDispatch } from 'react-redux';
import {setFavorites} from '../actions/setFavorites';
import Card from '@mui/material/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import '../css/species.css'

export const SpeciesCard = (props) => {
const dispatch = useDispatch();
return (
  <div>
    <Card className="speciesCardContainer">
      <div className="speciesTitle">
        <h1>{props.item.name}</h1>
      </div>
      <div className="classification">
        <p>Classified as  {props.item.classification}</p>
      </div>
      <div className="language">
        <p>Known to speak in {props.item.language}</p>
      </div>
      <div className="designation">
        <p>Designated as a {props.item.designation} being</p>
      </div>
      <div className="averageHeight">
        <p>Average Height of {props.item.average_height} Centimeters</p>
      </div>
      <div className="averageLifespan">
        <p>Average lifespan of {props.item.average_lifespan} Years</p>
      </div>
      <div className="eyeColor">
        <p>Known Eye Color {props.item.eye_colors}</p>
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
