import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import {fetchSpecies, nextSpeciesPage2, nextSpeciesPage3, nextSpeciesPage4} from '../actions/fetchSpecies';
import { SpeciesCard } from './SpeciesCard';


const Species = () => {
const dispatch = useDispatch()
const specie = useSelector((state) => state.species)
  return (
    <div>
        <h1>species</h1>
        <button onClick={() =>{fetchSpecies(dispatch)}}>Get Species</button>
        <h1>{specie?.results?.map((item) =>{
          return (
            <>
              <SpeciesCard item={item}/>
            </>
          )
        })}</h1>
        <button onClick={() =>{nextSpeciesPage2(dispatch)}}>Page 2</button>
        <button onClick={() =>{nextSpeciesPage3(dispatch)}}>Page 3</button>
        <button onClick={() =>{nextSpeciesPage4(dispatch)}}>Page 4</button>
    </div>
  )
}

export default Species