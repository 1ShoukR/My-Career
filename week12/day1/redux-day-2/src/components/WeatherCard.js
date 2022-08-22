import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 

const WeatherCard = () => {
    const weather = useSelector((state) => state.weather);
return (
<div className="weatherCard">
    <h2 className="currentTemp">Current Tempterature {weather?.main?.temp} °F</h2>
    <p className="conditions">Conditions: {weather?.weather[0]?.main}</p>
    <p className="highOf">High of: {weather?.main?.temp_max} °F</p>
    <p className="lowOf">Low of: {weather?.main?.temp_min} °F</p>
    <p className="feelsLike">Feels Like: {weather?.main?.feels_like} °F</p>
    <p className="humidity">Humidity: {weather?.main?.humidity} %</p>
    <p className="pressure">Pressure: {weather?.main?.pressure}</p>
    <img className="icon" src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}alt=""
    />
</div>
);
}

export default WeatherCard