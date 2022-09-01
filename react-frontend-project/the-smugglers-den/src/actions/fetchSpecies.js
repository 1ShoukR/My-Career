export const fetchSpecies = async (dispatch) => {
  const url = `https://swapi.dev/api/species/`;
  const res = await fetch(url);
  const speciesData = await res.json();
  alert("Species page 1 loaded..")
  dispatch({ type: 'SET_SPECIES', payload: speciesData });
  console.log('species data',speciesData);
};

export const nextSpeciesPage2 = async (dispatch) => {
    const url = `https://swapi.dev/api/species/?page=2`;
    const res = await fetch(url)
    const speciesData = await res.json()
    dispatch({ type: 'SET_SPECIES', payload: speciesData });
    alert("Species page 2 loaded..")
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    console.log('species data', speciesData);
}

export const nextSpeciesPage3 = async (dispatch) => {
    const url = `https://swapi.dev/api/species/?page=3`;
    const res = await fetch(url);
    const speciesData = await res.json();
    dispatch({ type: 'SET_SPECIES', payload: speciesData });
    alert("species page 3 loaded..")
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    console.log('species data', speciesData);
}

export const nextSpeciesPage4 = async (dispatch) => {
  const url = `https://swapi.dev/api/species/?page=4`;
  const res = await fetch(url);
  const speciesData = await res.json();
  dispatch({ type: 'SET_SPECIES', payload: speciesData });
  alert('species page 4 loaded..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('species data', speciesData);
};


