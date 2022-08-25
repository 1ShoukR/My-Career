import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import fetchMovies from "../actions/fetchMovies"
import { MovieCard } from './MovieCard';


const Movies = () => {
  const dispatch = useDispatch()
  const movie = useSelector((state) => state.movies)
    // const fetchMovies = async () => {
    //     const url = `https://swapi.dev/api/films/`;
    //     const res = await fetch(url);
    //     const movieData = await res.json();
    //     console.log('movie data', movieData);
    // };
    
  return (
    <div>
      <h1>Movies</h1>
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