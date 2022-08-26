import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import {fetchVehicles, fetchVehiclesPage2, fetchVehiclesPage3, fetchVehiclesPage4} from '../actions/fetchVehicles';
import { VehicleCard } from './VehicleCard';



const Vehicles = () => {
const dispatch = useDispatch()
const vehicle = useSelector((state) => state.vehicles)
  return (
    <div>
        <h1>Vehicles</h1>
        <button onClick={() => {fetchVehicles(dispatch)}}>Get Vehicles</button>
        <h1>{vehicle?.results?.map((item) =>{
          return (
            <>
              <VehicleCard item={item}/>
            </>
          )
        })}</h1>
        <button onClick={() =>{fetchVehiclesPage2(dispatch)}}>Page 2</button>
        <button onClick={() =>{fetchVehiclesPage3(dispatch)}}>Page 3</button>
        <button onClick={() =>{fetchVehiclesPage4(dispatch)}}>Page 4</button>
    </div>
  )
}

export default Vehicles