import React from 'react'
import { useDispatch } from 'react-redux'; 
import setFavorites from '../actions/setFavorites';


export const MovieCard = (props) => {
const dispatch = useDispatch();

  return (
    <div>
        <h1>Movie Title: {props.item.title}</h1>
        <p>Director: {props.item.director}</p>
        <p>Summary: {props.item.opening_crawl}</p>
        <p>Movie Debut Year: {props.item.created}</p>
        {/* <p>{props.item.characters}</p> make another API call for characters*/} 
        <button onClick={()=>{setFavorites(dispatch, props);}}>Add to Favorites</button>
    </div>
  )
}
