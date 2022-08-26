import React from 'react'
import { useDispatch } from 'react-redux';
import setFavorites from '../actions/setFavorites';

export const PeopleCard = (props) => {
const dispatch = useDispatch()


  return (
    <div>
        <h1>Name: {props.item.name}</h1>
        <p>Birth Year: {props.item.birth_year}</p>
        <p>Gender: {props.item.gender}</p>
        <p>Hair Color: {props.item.hair_color}</p>
        <p>Eye color: {props.item.eye_color}</p>
        <p>Height: {props.item.height} Centimeters</p>
        {/* <p>{props.item.homeworld}</p> put in a api call function */}
        <button onClick={() =>{setFavorites(dispatch, props)}}>Add to Favorites</button>
    </div>
  )
}

export default PeopleCard