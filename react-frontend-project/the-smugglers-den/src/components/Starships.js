import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import StarshipCard from './StarshipCard';
import {fetchStarships, fetchStarshipsPage2, fetchStarshipsPage3, fetchStarshipsPage4} from '../actions/fetchStarships';
import Button from '@mui/material/Button';


const Starships = () => {
    const dispatch = useDispatch();
    const starship = useSelector((state) => state.starships);
    return (
    <div className='starshipsContainer'>
        <div className='starshipTitle'>
            <h1>Starships</h1>  
        </div>
        <Button variant="outlined" size="large" onClick={() => fetchStarships(dispatch)}>Get Starships</Button>
        <h1 className='h1StarshipCard'>{starship?.results?.map((item) =>{ // put into Starship Card
            return (
                <>
                    <StarshipCard item={item}/>
                </>
            )
        })}</h1>
    <div className='nextPageButtons'>
        <Button variant="outlined" size="large" onClick={() =>{fetchStarshipsPage2(dispatch)}}>Page 2</Button>
        <Button variant="outlined" size="large" onClick={() =>{fetchStarshipsPage3(dispatch)}}>Page 3</Button>
        <Button variant="outlined" size="large" onClick={() =>{fetchStarshipsPage4(dispatch)}}>Page 4</Button>
    </div>
</div>
    );
}

export default Starships