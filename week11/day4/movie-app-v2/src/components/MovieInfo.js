import React, { useEffect, useState } from 'react';

const MovieInfo = ({ selectedMovie }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getDetails = async () => {
    const API_KEY = `apikey=fd72e0f7`;
      const url = `http://www.omdbapi.com/?i=${selectedMovie?.imdbID}&${API_KEY}`;
      const response = await fetch(url);
      const json = await response.json();
      setMovie(json);
    };
    getDetails();
  }, []);

  return (
    <div className="poster">
      <h1>{selectedMovie?.Title}</h1>
      <img src={selectedMovie?.Poster} alt="" />
      <p>{selectedMovie?.Year}</p>
      <p>{selectedMovie?.imdbID}</p>
    </div>
  );
};

export default MovieInfo;
