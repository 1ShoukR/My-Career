import { Card } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import {setFavorites} from '../actions/setFavorites';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../css/planets.css';


export const PlanetsCard = (props) => {
const dispatch = useDispatch();
  return (
    <div>
      <Card className="planetsCardContainer">
        <div className="planetsTitle">
          <h1>{props.item.name}</h1>
        </div>
        <div className="population">
          <p>Population of {props.item.population} inhabitants</p>
        </div>
        <div className="rotationalPeriod">
          <p>Rotational Period: {props.item.rotation_period}</p>
        </div>
        <div className="orbitalDuration">
          <p>Orbital Duration: {props.item.orbital_period} days</p>
        </div>
        <div className="terrain">
          <p>Terrain: {props.item.terrain} days</p>
        </div>
        <div className="climate">
          <p>Climate: {props.item.climate}</p>
        </div>
        <div className="gravity">
          <p>Gravity: {props.item.gravity}</p>
        </div>
        <div>
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

