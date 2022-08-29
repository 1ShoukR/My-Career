import React from 'react'
import { useDispatch } from 'react-redux';
import setFavorites from '../actions/setFavorites';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const PeopleCard = (props) => {
const dispatch = useDispatch()


  return (
    <div>
      <Card className="peopleCardContainer">
        <div className="peopleTitle">
          <h1>{props.item.name}</h1>
        </div>
        <div className="birthYear">
          <p>Born in the year {props.item.birth_year}</p>
        </div>
        <div className="gender">
          <p>Gender: {props.item.gender}</p>
        </div>
        <div className="hairColor">
          <p>Hair Color: {props.item.hair_color}</p>
        </div>
        <div className="eyeColor">
          <p>Eye color: {props.item.eye_color}</p>
        </div>
        <div className="height">
          <p>Height: {props.item.height} Centimeters</p>
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
      {/* <p>{props.item.homeworld}</p> put in a api call function */}
    </div>
  );
}

export default PeopleCard