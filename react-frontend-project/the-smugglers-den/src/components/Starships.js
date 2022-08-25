import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import StarshipCard from './StarshipCard';
import fetchStarships from '../actions/fetchStarships';

const Starships = () => {
    const dispatch = useDispatch();
    const starship = useSelector((state) => state.starships);
    return (
    <div>
        <h1>Starships</h1>
        <button onClick={() => fetchStarships(dispatch)}>Get Starships</button>
        <h1>{starship?.results?.map((item) =>{ // put into Starship Card
            return (
                <>
                    <StarshipCard item={item}/>
                </>
            )
        })}</h1>
    </div>
    );
}

export default Starships