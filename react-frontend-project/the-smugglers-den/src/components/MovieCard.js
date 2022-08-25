import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
export const MovieCard = (props) => {
const dispatch = useDispatch();



const setMovies = () => {
    dispatch({ type: 'SET_FAVORITES', payload: props.item.title });
};

  return (
    <div>
        <h1>{props.item.title}</h1>
        <button onClick={()=>{setMovies()}}>Add to Favorites</button>
    </div>
  )
}
