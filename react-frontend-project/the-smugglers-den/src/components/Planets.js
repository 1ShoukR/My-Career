import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import  {PlanetsCard } from "./PlanetsCard"
import {fetchPlanets, fetchPlanetsPage2, fetchPlanetsPage3, fetchPlanetsPage5, fetchPlanetsPage4, fetchPlanetsPage6} from '../actions/fetchPlanets';
import Button from '@mui/material/Button';



const Planets = () => {
  const dispatch = useDispatch()
  const planet = useSelector((state) => state.planets)
  return (
    <div className="planetsContainer">
      <div className="planetsTitle">
        <h1>planets</h1>
      </div>
      <Button
        variant="outlined"
        size="large"
        onClick={() => {
          fetchPlanets(dispatch);
        }}
      >
        Get Planets
      </Button>
      <h1 className='h1PlanetCard'>
        {planet?.results?.map((item) => {
          return (
            <>
              <PlanetsCard item={item} />
            </>
          );
        })}
      </h1>
      <div className='nextPageButtons'>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            fetchPlanetsPage2(dispatch);
          }}
        >
          Page 2
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            fetchPlanetsPage3(dispatch);
          }}
        >
          Page 3
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            fetchPlanetsPage4(dispatch);
          }}
        >
          Page 4
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            fetchPlanetsPage5(dispatch);
          }}
        >
          Page 5
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            fetchPlanetsPage6(dispatch);
          }}
        >
          Page 6
        </Button>
      </div>
    </div>
  );
}

export default Planets