import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import { fetchMovies, } from "../actions/fetchMovies"
import { MovieCard } from './MovieCard';
import Button from '@mui/material/Button';


const Movies = () => {
  const dispatch = useDispatch()
  const movie = useSelector((state) => state.movies)
  return (
    <div className='movieContainer'>
      <div className='moviesTitle'>
        <h1>Movies</h1>
      </div>
      <Button variant="outlined" size="large" onClick={() =>{fetchMovies(dispatch);}}>Get Movies</Button>
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