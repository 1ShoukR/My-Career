import React from 'react'
import { useDispatch } from 'react-redux';
import setFavorites from '../actions/setFavorites';

export const VehicleCard = (props) => {
const dispatch = useDispatch()
  return (
    <div>
        <h1>Vehicle: {props.item.name}</h1>
        <p>Model: {props.item.model}</p>
        <p>Passenger Capacity: {props.item.passengers}</p>
        <p>Crew: {props.item.crew}</p>
        <p>Manufacteror: {props.item.model}</p>
        <p>Max Speed: {props.item.max_atmospheric_speed}</p>
        <p>Cost: {props.item.cost_in_credits} Credits</p>
        <button onClick={()=>{setFavorites(dispatch, props);}}>Add to Favorites</button>
    </div>
  )
}
