export const fetchPlanets = async (dispatch) => {
    const url =`https://swapi.dev/api/planets/`;
    const res = await fetch(url)
    const planetData = await res.json()
    alert("Page 1 loading..")
    dispatch({type: "SET_PLANETS", payload: planetData})
    console.log("planet data", planetData)
}

export const fetchPlanetsPage2 = async (dispatch) => {
  const url = `https://swapi.dev/api/planets/?page=2`;
  const res = await fetch(url);
  const planetData = await res.json();
  dispatch({ type: 'SET_PLANETS', payload: planetData });
  alert("Page 2 loading..")
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('planet data', planetData);
};

export const fetchPlanetsPage3 = async (dispatch) => {
  const url = `https://swapi.dev/api/planets/?page=3`;
  const res = await fetch(url);
  const planetData = await res.json();
  dispatch({ type: 'SET_PLANETS', payload: planetData });
  alert('Page 3 loading..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('planet data', planetData);
};

export const fetchPlanetsPage4 = async (dispatch) => {
  const url = `https://swapi.dev/api/planets/?page=4`;
  const res = await fetch(url);
  const planetData = await res.json();
  dispatch({ type: 'SET_PLANETS', payload: planetData });
  alert('Page 4 loading..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('planet data', planetData);
};

export const fetchPlanetsPage5 = async (dispatch) => {
  const url = `https://swapi.dev/api/planets/?page=5`;
  const res = await fetch(url);
  const planetData = await res.json();
  dispatch({ type: 'SET_PLANETS', payload: planetData });
  alert('Page 5 loading..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('planet data', planetData);
};

export const fetchPlanetsPage6 = async (dispatch) => {
  const url = `https://swapi.dev/api/planets/?page=6`;
  const res = await fetch(url);
  const planetData = await res.json();
  dispatch({ type: 'SET_PLANETS', payload: planetData });
  alert('Page 6 loading..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('planet data', planetData);
};
