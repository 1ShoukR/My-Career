import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 

const Welcome = () => {
    const dispatch = useDispatch();
return (
<div className="userWeatherArea">
    <h1>The New and Improved Weather App</h1>
    <h6>Created using React and Redux</h6>
    <h4>
    Where do you live? Enter your city or zip code below to display your weather!
    </h4>
    <input
    placeholder='Enter zip or city'
    className='inputField'
    type="text"
    onChange={(e) =>
        dispatch({ type: 'SET_LOCATION', payload: e.target.value })
    }
    />
</div>
);
}

export default Welcome