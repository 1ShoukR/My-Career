import React from 'react';

const fetchStarships = async (dispatch) => {
  const url = `https://swapi.dev/api/starships/`;
  const res = await fetch(url);
  const starshipData = await res.json();
  dispatch({ type: 'SET_STARSHIPS', payload: starshipData });
  console.log('starship data', starshipData);
};

export default fetchStarships;
