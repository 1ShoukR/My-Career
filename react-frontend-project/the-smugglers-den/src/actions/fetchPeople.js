export const fetchPeople = async (dispatch) => {
  const url = `https://swapi.dev/api/people/`;
  const res = await fetch(url);
  const peopleData = await res.json();
  alert("Page 1 Loading..")
  dispatch({ type: 'SET_PEOPLE', payload: peopleData });
  console.log('people Data', peopleData);
};

export const nextPeoplePage2 = async (dispatch) =>{
  const url = `https://swapi.dev/api/people/?page=2`;
  const res = await fetch(url);
  const peopleData = await res.json();
  dispatch({ type: 'SET_PEOPLE', payload: peopleData });
  alert("Page 2 loading..")
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('people Data', peopleData);
}

export const nextPeoplePage3 = async (dispatch) => {
  const url = `https://swapi.dev/api/people/?page=3`;
  const res = await fetch(url);
  const peopleData = await res.json();
  dispatch({ type: 'SET_PEOPLE', payload: peopleData });
  alert('Page 3 loading..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('people Data', peopleData);
};

export const nextPeoplePage4 = async (dispatch) => {
  const url = `https://swapi.dev/api/people/?page=4`;
  const res = await fetch(url);
  const peopleData = await res.json();
  dispatch({ type: 'SET_PEOPLE', payload: peopleData });
  alert('Page 4 loading..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('people Data', peopleData);
};

export const nextPeoplePage5 = async (dispatch) => {
  const url = `https://swapi.dev/api/people/?page=5`;
  const res = await fetch(url);
  const peopleData = await res.json();
  dispatch({ type: 'SET_PEOPLE', payload: peopleData });
  alert('Page 5 loading..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('people Data', peopleData);
};

export const nextPeoplePage6 = async (dispatch) => {
  const url = `https://swapi.dev/api/people/?page=6`;
  const res = await fetch(url);
  const peopleData = await res.json();
  dispatch({ type: 'SET_PEOPLE', payload: peopleData });
  alert('Page 6 loading..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('people Data', peopleData);
};

export const nextPeoplePage7 = async (dispatch) => {
  const url = `https://swapi.dev/api/people/?page=7`;
  const res = await fetch(url);
  const peopleData = await res.json();
  dispatch({ type: 'SET_PEOPLE', payload: peopleData });
  alert('Page 7 loading..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('people Data', peopleData);
};

export const nextPeoplePage8 = async (dispatch) => {
  const url = `https://swapi.dev/api/people/?page=8`;
  const res = await fetch(url);
  const peopleData = await res.json();
  dispatch({ type: 'SET_PEOPLE', payload: peopleData });
  alert('Page 8 loading..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('people Data', peopleData);
};

export const nextPeoplePage9 = async (dispatch) => {
  const url = `https://swapi.dev/api/people/?page=9`;
  const res = await fetch(url);
  const peopleData = await res.json();
  dispatch({ type: 'SET_PEOPLE', payload: peopleData });
  alert('Page 9 loading..');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  console.log('people Data', peopleData);
};



