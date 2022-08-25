import React from 'react'

const Movies = () => {
    const fetchMovies = async () => {
        const url = `https://swapi.dev/api/films/`;
        const res = await fetch(url);
        const movieData = await res.json();
        console.log('movie data', movieData);
    };
    fetchMovies();
  return (
    <div>Movies</div>
  )
}

export default Movies