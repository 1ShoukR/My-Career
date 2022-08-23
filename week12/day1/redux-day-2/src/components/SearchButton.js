import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import App from "../App"
const SearchButton = () => {
const dispatch = useDispatch();
const location = useSelector((state) => state.location);
const getWeather = async () => {
    const API_KEY = `d302f715167db2c8c419c1956b33aab0`;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location},us&appid=${API_KEY}&units=imperial&
`;
    const weatherJSON = await fetch(url);
    const json = await weatherJSON.json();
    dispatch({ type: 'SET_WEATHER', payload: json });
    console.log(json);
  };
  return (
<div className="weatherData">
    <button className="searchButton" 
    disabled={!location ? true : false} 
    onClick={() => getWeather()}>
    Search
    </button>
</div>
  )
}

export default SearchButton