import React from 'react'
import { useDispatch } from 'react-redux';
import setFavorites from '../actions/setFavorites';

export const PlanetsCard = (props) => {
const dispatch = useDispatch();
  return (
    <div>
        <h1>Planet: {props.item.name}</h1>
        <p>Population: {props.item.population} inhabitants</p>
        <p>Rotational Period: {props.item.rotation_period}</p>
        <p>Orbital Duration: {props.item.orbital_period} days</p>
        <p>Terrain: {props.item.terrain} days</p>
        <p>Climate: {props.item.climate}</p>
        <p>Gravity: {props.item.gravity}</p>
        <button onClick={()=>{setFavorites(dispatch, props);}}>Add to Favorites</button>
    </div>
  )
}

