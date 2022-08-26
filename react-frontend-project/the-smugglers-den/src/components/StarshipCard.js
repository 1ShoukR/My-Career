import React from 'react'
import { useDispatch } from 'react-redux'; 
import setFavorites from '../actions/setFavorites';





const StarshipCard = (props) => {
const dispatch = useDispatch();

  return (
    <div>
      <h1>{props.item.name}</h1>
      <p>{props.item.model}</p>
      <p>{props.item.cost_in_credits}</p>
      <p>{props.item.created}</p>
      <button onClick={() => {setFavorites(dispatch, props)}}>Add to Favorites</button>
    </div>
  );
}

export default StarshipCard