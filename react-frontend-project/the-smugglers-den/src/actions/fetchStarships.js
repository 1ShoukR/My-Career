
export const fetchStarships = async (dispatch) => {
  alert("Page 1 loading..")
  const url = `https://swapi.dev/api/starships/`;
  const res = await fetch(url);
  const starshipData = await res.json();
  dispatch({ type: 'SET_STARSHIPS', payload: starshipData });
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('starship data', starshipData);
};

export const fetchStarshipsPage2 = async (dispatch) => {
  const url = `https://swapi.dev/api/starships/?page=2`;
  const res = await fetch(url);
  const starshipData = await res.json();
  dispatch({ type: 'SET_STARSHIPS', payload: starshipData });
  alert("Page 2 loading..")
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  console.log('starship data', starshipData);
};

export const fetchStarshipsPage3 = async (dispatch) => {
  const url = `https://swapi.dev/api/starships/?page=3`;
  const res = await fetch(url);
  const starshipData = await res.json();
  dispatch({ type: 'SET_STARSHIPS', payload: starshipData });
  alert('Page 3 loading..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('starship data', starshipData);
};

export const fetchStarshipsPage4 = async (dispatch) => {
  const url = `https://swapi.dev/api/starships/?page=4`;
  const res = await fetch(url);
  const starshipData = await res.json();
  dispatch({ type: 'SET_STARSHIPS', payload: starshipData });
  alert('Page 4 loading..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('starship data', starshipData);
};


