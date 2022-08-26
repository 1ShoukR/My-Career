export const fetchVehicles = async (dispatch) => {
    const url = `https://swapi.dev/api/vehicles/`;
    const res = await fetch(url)
    const vehicleData = await res.json()
    dispatch({type: "SET_VEHICLES", payload: vehicleData})
    alert("Page 1 loading..")
    console.log('vehicle data', vehicleData)
}



export const fetchVehiclesPage2 = async (dispatch) => {
    const url = `https://swapi.dev/api/vehicles/?page=2`;
    const res = await fetch(url)
    const vehicleData = await res.json()
    dispatch({type: "SET_VEHICLES", payload: vehicleData})
    alert("Page 2 loading.. ")
    console.log('vehicle data', vehicleData)
}

export const fetchVehiclesPage3 = async (dispatch) => {
  const url = `https://swapi.dev/api/vehicles/?page=3`;
  const res = await fetch(url);
  const vehicleData = await res.json();
  dispatch({ type: 'SET_VEHICLES', payload: vehicleData });
  alert('Page 3 loading.. ');
  console.log('vehicle data', vehicleData);
};

export const fetchVehiclesPage4 = async (dispatch) => {
  const url = `https://swapi.dev/api/vehicles/?page=4`;
  const res = await fetch(url);
  const vehicleData = await res.json();
  dispatch({ type: 'SET_VEHICLES', payload: vehicleData });
  alert('Page 4 loading.. ');
  console.log('vehicle data', vehicleData);
};

