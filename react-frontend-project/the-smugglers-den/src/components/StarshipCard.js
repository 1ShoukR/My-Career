import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 





const StarshipCard = (props) => {


const dispatch = useDispatch();
const favorites = useSelector((state) => state.starships);

const setFavorites = () => {
    dispatch({ type: 'SET_FAVORITES', payload: props.item.name });
}


  return (
    <div>
      <h1>{props.item.name}</h1>
      <p>{props.item.model}</p>
      <p>{props.item.cost_in_credits}</p>
      <p>{props.item.created}</p>
      <button onClick={() => {setFavorites()}}>Add to Favorites</button>
    </div>
  );
}

export default StarshipCard