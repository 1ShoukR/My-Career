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
    <div>
      <h1>
        Movies
      </h1>
    </div>
  )
}

export default Movies