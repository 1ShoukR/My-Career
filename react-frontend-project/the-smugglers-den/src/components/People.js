import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import PeopleCard from './PeopleCard';
import {fetchPeople, nextPeoplePage2, nextPeoplePage3, nextPeoplePage4, nextPeoplePage5, nextPeoplePage6, nextPeoplePage7, nextPeoplePage8, nextPeoplePage9} from '../actions/fetchPeople';


const People = () => {
const dispatch = useDispatch()
const people = useSelector((state) => state.people)

return (
    <div>
        <h1>People</h1>
        <button onClick={() =>{fetchPeople(dispatch)}}>Get People</button>
        <h1>{people?.results?.map((item) =>{
            return (
            <>
                <PeopleCard item={item}/>
            </>
            )
        })}</h1>
        <button onClick={() =>{nextPeoplePage2(dispatch)}}>Page 2</button>
        <button onClick={() =>{nextPeoplePage3(dispatch)}}>Page 3</button>
        <button onClick={() =>{nextPeoplePage4(dispatch)}}>Page 4</button>
        <button onClick={() =>{nextPeoplePage5(dispatch)}}>Page 5</button>
        <button onClick={() =>{nextPeoplePage6(dispatch)}}>Page 6</button>
        <button onClick={() =>{nextPeoplePage7(dispatch)}}>Page 7</button>
        <button onClick={() =>{nextPeoplePage8(dispatch)}}>Page 8</button>
        <button onClick={() =>{nextPeoplePage9(dispatch)}}>Page 9</button>
    </div>
)
}

export default People