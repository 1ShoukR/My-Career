import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import StarshipCard from './StarshipCard';
import {fetchStarships, fetchStarshipsPage2, fetchStarshipsPage3, fetchStarshipsPage4} from '../actions/fetchStarships';

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
        <button onClick={() =>{fetchStarshipsPage2(dispatch)}}>Page 2</button>
        <button onClick={() =>{fetchStarshipsPage3(dispatch)}}>Page 3</button>
        <button onClick={() =>{fetchStarshipsPage4(dispatch)}}>Page 4</button>
    </div>
    );
}

export default Starships