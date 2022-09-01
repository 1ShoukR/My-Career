import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import { fetchMovies, } from "../actions/fetchMovies"
import { MovieCard } from './MovieCard';
import { useEffect } from 'react';
import "../css/movies.css"


const Movies = () => {
  const dispatch = useDispatch()
  const movie = useSelector((state) => state.moviesR.movies)

  useEffect(() => {
    fetchMovies(dispatch);
  }, []);
  return (
    <div className='movieContainer'>
      <div className='moviesTitle'>
        <h1>Movies</h1>
      </div>
      <h1 className='h1Card'>{movie?.results?.map((item) =>{
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