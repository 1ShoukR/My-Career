import React from 'react'
import { useDispatch } from 'react-redux';
import setFavorites from '../actions/setFavorites';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

export const VehicleCard = (props) => {
const dispatch = useDispatch()
  return (
    <div>
      <Card className="vehicleCardContainer">
        <div className="vehicleTitle">
          <h1>Vehicle: {props.item.name}</h1>
        </div>
        <div className="modelName">
          <p>Model: {props.item.model}</p>
        </div>
        <div className="passengerCapacity">
          <p>Passenger Capacity: {props.item.passengers}</p>
        </div>
        <div className='crew'>
          <p>Crew: {props.item.crew}</p>
        </div>
        <div className='manufacteror'>
          <p>Manufacteror: {props.item.model}</p>
        </div>
        <div className='maxSpeed'>
          <p>Max Speed:{props.item.max_atmosphering_speed} KM/H</p>
        </div>
        <div className='cost'>
          <p>Cost: {props.item.cost_in_credits} Credits</p>
        </div>
      </Card>
      <Button
      className='favoritesButton'
        variant="outlined"
        size="large"
        onClick={() => {
          setFavorites(dispatch, props);
        }}
      >
        Add to Favorites
      </Button>
    </div>
  );
}
