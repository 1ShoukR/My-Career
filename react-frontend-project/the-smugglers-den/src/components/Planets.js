import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import  {PlanetsCard } from "./PlanetsCard"
import {fetchPlanets, fetchPlanetsPage2, fetchPlanetsPage3, fetchPlanetsPage5, fetchPlanetsPage4, fetchPlanetsPage6} from '../actions/fetchPlanets';

const Planets = () => {
  const dispatch = useDispatch()
  const planet = useSelector((state) => state.planets)
  return (
    <div>
        <h1>planets</h1>
        <button onClick={()=>{fetchPlanets(dispatch)}}>Get Planets</button>
        <h1>{planet?.results?.map((item) =>{
          return (
            <>
              <PlanetsCard item={item}/>
            </>
          )
        })}</h1>
        <div>
          <button onClick={() => {fetchPlanetsPage2(dispatch)}}>Page 2</button>
          <button onClick={() => {fetchPlanetsPage3(dispatch)}}>Page 3</button>
          <button onClick={() => {fetchPlanetsPage4(dispatch)}}>Page 4</button>
          <button onClick={() => {fetchPlanetsPage5(dispatch)}}>Page 5</button>
          <button onClick={() => {fetchPlanetsPage6(dispatch)}}>Page 6</button>
        </div>
    </div>
  )
}

export default Planets