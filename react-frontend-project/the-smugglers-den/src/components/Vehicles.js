import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import {fetchVehicles, fetchVehiclesPage2, fetchVehiclesPage3, fetchVehiclesPage4} from '../actions/fetchVehicles';
import { VehicleCard } from './VehicleCard';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import '../css/vehicles.css';




const Vehicles = () => {
      useEffect(() => {
        fetchVehicles(dispatch);
      }, []);


const dispatch = useDispatch()
const vehicle = useSelector((state) => state.vehiclesR.vehicles)
  return (
    <div className='vehiclesContainer'>
      <div className='vehiclesTitle'>
        <h1 className='pageTitle'>Vehicles</h1>
      </div>
        <h1 className='h1VehicleCard'>{vehicle?.results?.map((item) =>{
          return (
            <>
              <VehicleCard item={item}/>
            </>
          )
        })}</h1>
        <div className='nextPageButtons'>
        <Button variant="outlined" size="large" onClick={() =>{fetchVehicles(dispatch)}}>Page 1</Button>
        <Button variant="outlined" size="large" onClick={() =>{fetchVehiclesPage2(dispatch)}}>Page 2</Button>
        <Button variant="outlined" size="large" onClick={() =>{fetchVehiclesPage3(dispatch)}}>Page 3</Button>
        <Button variant="outlined" size="large" onClick={() =>{fetchVehiclesPage4(dispatch)}}>Page 4</Button>
        </div>
        
    </div>
  )
}

export default Vehicles