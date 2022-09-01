import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import PeopleCard from './PeopleCard';
import {fetchPeople, nextPeoplePage2, nextPeoplePage3, nextPeoplePage4, nextPeoplePage5, nextPeoplePage6, nextPeoplePage7, nextPeoplePage8, nextPeoplePage9} from '../actions/fetchPeople';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import "../css/people.css"

const People = () => {

useEffect(() => {
    fetchPeople(dispatch);
    }, []);

const dispatch = useDispatch()
const people = useSelector((state) => state.peopleR.people)

return (
<div className='peopleContainer'>
        <div className='peopleTitle'>
            <h1>People</h1>
        </div>
        <h1 className='h1PeopleCard'>{people?.results?.map((item) =>{
            return (
            <>
                <PeopleCard item={item}/>
            </>
            )
        })}</h1>
    <div className='nextPageButtons'>
        <Button variant="outlined" size="large" onClick={()=>{fetchPeople(dispatch)}}>Page 1</Button>
        <Button variant="outlined" size="large" onClick={() =>{nextPeoplePage2(dispatch)}}>Page 2</Button>
        <Button variant="outlined" size="large" onClick={() =>{nextPeoplePage3(dispatch)}}>Page 3</Button>
        <Button variant="outlined" size="large" onClick={() =>{nextPeoplePage4(dispatch)}}>Page 4</Button>
        <Button variant="outlined" size="large" onClick={() =>{nextPeoplePage5(dispatch)}}>Page 5</Button>
        <Button variant="outlined" size="large" onClick={() =>{nextPeoplePage6(dispatch)}}>Page 6</Button>
        <Button variant="outlined" size="large" onClick={() =>{nextPeoplePage7(dispatch)}}>Page 7</Button>
        <Button variant="outlined" size="large" onClick={() =>{nextPeoplePage8(dispatch)}}>Page 8</Button>
        <Button variant="outlined" size="large" onClick={() =>{nextPeoplePage9(dispatch)}}>Page 9</Button>
    </div>
</div>
)
}

export default People