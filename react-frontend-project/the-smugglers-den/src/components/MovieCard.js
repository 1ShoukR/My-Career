import React from 'react'
import { useDispatch } from 'react-redux'; 
import setFavorites from '../actions/setFavorites';


export const MovieCard = (props) => {
const dispatch = useDispatch();

  return (
    <div className='movieCardContainer'>
        <h1 className='movieTitle'>Movie Title: {props.item.title}</h1>
        <p>Directed By: {props.item.director}</p>
        <p>Summary: {props.item.opening_crawl}</p>
        <p>Debut Year: {props.item.created}</p>
        {/* <p>{props.item.characters}</p> make another API call for characters*/} 
        <button onClick={()=>{setFavorites(dispatch, props);}}>Add to Favorites</button>
    </div>
  )
}
