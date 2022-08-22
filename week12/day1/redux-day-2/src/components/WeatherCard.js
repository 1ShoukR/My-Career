import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 

const WeatherCard = () => {
    const weather = useSelector((state) => state.weather);
return (
  <div className = "weatherCard">
    <h2 className='currentTemp'>Current Tempterature {weather?.main?.temp} °F</h2>
    <p>{weather?.weather[0]?.description}</p>
    <p>High of: {weather?.main?.temp_max} °F</p>
    <p>Low of: {weather?.main?.temp_min} °F</p>
    <p>Feels Like: {weather?.main?.feels_like} °F</p>
    <p>Humidity: {weather?.main?.humidity}</p>
    <p>Pressure: {weather?.main?.pressure}</p>
    <p>Conditions: {weather?.weather[0]?.main}</p>
    <img src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} alt="Weather Icon Not Visible" />
  </div>
);
}

export default WeatherCard