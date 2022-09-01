import React from 'react'
import { useDispatch } from 'react-redux';
import {setFavorites} from '../actions/setFavorites';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../css/vehicles.css"

export const VehicleCard = (props) => {
const dispatch = useDispatch()
  return (
    <div>
      <Card className="vehicleCardContainer">
        <div className="vehicleTitle">
          <h1>{props.item.name}</h1>
        </div>
        <div className="modelName">
          <p>Model: {props.item.model}</p>
        </div>
        <div className="passengerCapacity">
          <p>Passenger Capacity of {props.item.passengers}</p>
        </div>
        <div className="crew">
          <p>Can hold a total of {props.item.crew} crew members</p>
        </div>
        <div className="manufacteror">
          <p>Manufactured by {props.item.model}</p>
        </div>
        <div className="maxSpeed">
          <p>Max Speed of {props.item.max_atmosphering_speed} KM/H</p>
        </div>
        <div className="cost">
          <p>Cost: {props.item.cost_in_credits} Credits</p>
        </div>
        <div className="favoritesButton">
          <Button
            className="favoritesButton"
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
