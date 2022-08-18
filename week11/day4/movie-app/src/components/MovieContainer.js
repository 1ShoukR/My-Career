import React from 'react';
import { MovieCard } from './MovieCard';
import { useState } from 'react';
import SpecificMovie from './SpecificMovie';
import { Link } from 'react-router-dom';

//states - we need to get input query, and movies

export const MovieContainer = (props) => {
    const [movieSearch, setMovieSearch] = useState('')
    const [movies, setMovies] = useState([])
    const [filter, setFilter] = useState('');
  // more than likely where you will map over movies
//   console.log(props)
    
    const searchMovies = async (e) => {
        e.preventDefault()
        console.log("submitting")
        const API_KEY = `apikey=fd72e0f7`;

        const url = `http://www.omdbapi.com/?s=${movieSearch}&${API_KEY}`;
        // change the "i" to "s"

        try {
            const response = await fetch(url)
            const movieData = await response.json()
            console.log(movieData.Search)
            setMovies(movieData.Search)
        } catch (error) {
            console.error(error)
        }

    };
    return (
      <>
        <div>
          <p>Go ahead and search for your favorite movie!</p>
          <form className="form" onSubmit={searchMovies}>
            <input
              type="text"
              value={movieSearch}
              name="query"
              onChange={(e) => setMovieSearch(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
          {/* <MovieCard movies={movies}/> */}
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} setSelectedMovie={props.setSelectedMovie} />
          ))}
        </div>
      </>
    );
};
