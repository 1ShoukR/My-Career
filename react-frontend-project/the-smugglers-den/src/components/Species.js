import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import {fetchSpecies, nextSpeciesPage2, nextSpeciesPage3, nextSpeciesPage4} from '../actions/fetchSpecies';
import { SpeciesCard } from './SpeciesCard';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import '../css/species.css';

const Species = () => {
      useEffect(() => {
        fetchSpecies(dispatch);
      }, []);

const dispatch = useDispatch()
const specie = useSelector((state) => state.speciesR.species)
  return (
    <div className="speciesContainer">
      <div className="speciesTitle">
        <h1>Species</h1>
      </div>
      <h1 className="h1SpeciesCard">
        {specie?.results?.map((item) => {
          return (
            <>
              <SpeciesCard item={item} />
            </>
          );
        })}
      </h1>
      <div className='nextPageButtons'>
        <Button variant="outlined"size="large"onClick={() => {fetchSpecies(dispatch);}}>Page 1</Button>
        <Button variant="outlined"size="large"onClick={() => {nextSpeciesPage2(dispatch);}}>Page 2</Button>
        <Button variant="outlined"size="large"onClick={() => {nextSpeciesPage3(dispatch);}}>Page 3</Button>
        <Button variant="outlined"size="large"onClick={() => {nextSpeciesPage4(dispatch);}}>Page 4</Button>
      </div>
    </div>
  );
}

export default Species