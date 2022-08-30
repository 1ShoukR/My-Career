
export const fetchMovies = async (dispatch) => {
    const url = `https://swapi.dev/api/films/`;
    const res = await fetch(url);
    const movieData = await res.json();
    alert("Page 1 Loading..")
    dispatch({ type: 'SET_MOVIES', payload: movieData });
    console.log('movie data', movieData);
    };


