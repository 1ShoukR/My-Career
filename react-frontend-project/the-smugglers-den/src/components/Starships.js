import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import StarshipCard from './StarshipCard';
import {fetchStarships, fetchStarshipsPage2, fetchStarshipsPage3, fetchStarshipsPage4} from '../actions/fetchStarships';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import "../css/starships.css"


const Starships = () => {

    useEffect(() => {
        fetchStarships(dispatch)
    }, []);

    const dispatch = useDispatch();
    const starship = useSelector((state) => state.starshipR.starships);
    return (
    <div className='starshipsContainer'>
        <div className='starshipTitle'>
            <h1 className='meantToFly'>Starships</h1>  
        </div>
        <h1 className='h1StarshipCard'>{starship?.results?.map((item) =>{ // put into Starship Card
            return (
                <>
                    <StarshipCard item={item}/>
                </>
            )
        })}</h1>
    <div className='nextPageButtons'>
        <Button variant="outlined" size="large" onClick={()=>{fetchStarships(dispatch)}}>Page 1</Button>
        <Button variant="outlined" size="large" onClick={() =>{fetchStarshipsPage2(dispatch)}}>Page 2</Button>
        <Button variant="outlined" size="large" onClick={() =>{fetchStarshipsPage3(dispatch)}}>Page 3</Button>
        <Button variant="outlined" size="large" onClick={() =>{fetchStarshipsPage4(dispatch)}}>Page 4</Button>
    </div>
</div>
    );
}

export default Starships