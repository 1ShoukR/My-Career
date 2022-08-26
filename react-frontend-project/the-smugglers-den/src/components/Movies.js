import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import {fetchMovies, } from "../actions/fetchMovies"
import { MovieCard } from './MovieCard';


const Movies = () => {
  const dispatch = useDispatch()
  const movie = useSelector((state) => state.movies)
  return (
    <div className='movieContainer'>
      <h1 className='moviesTitle'>Movies</h1>
      <button onClick={() =>{fetchMovies(dispatch);}}>Get Movies</button>
      <h1>{movie?.results?.map((item) =>{
        return(
        <>
          <MovieCard item={item}/>
        </>
        )
      })}</h1>
    </div>
  )
}

export default Movies