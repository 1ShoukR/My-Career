import React from 'react'
import { useDispatch } from 'react-redux';
import setFavorites from '../actions/setFavorites';

export const SpeciesCard = (props) => {
const dispatch = useDispatch();
return (
    <div>
        <h1>Species: {props.item.name}</h1>
        <p>Classification: {props.item.classification}</p>
        <p>Spoken Language: {props.item.language}</p>
        <p>Designation: {props.item.designation}</p>
        <p>Average Height: {props.item.average_height} Centimeters</p>
        <p>Average Lifespan: {props.item.average_lifespan} Years</p>
        <p>Eye Color: {props.item.eye_colors}</p>
        <button onClick={()=>{setFavorites(dispatch, props);}}>Add to Favorites</button>
    </div>
)
}
