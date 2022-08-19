import MovieContainer from './components/MovieContainer';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieInfo from './components/MovieInfo';
import "./App.css"

function App() {
  // useEffect
  // ({},[])
  // data only loads afrer you click serach
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  // useEffect(() => {

  // }, []);
  const findMovie = async () => {
    const API_KEY = `apikey=fd72e0f7`;
    const url = `http://www.omdbapi.com/?s=${searchTerm}&${API_KEY}`;
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
    setMovies(json.Search);
  };

  return (
    <div className="App">
      <h1>Movie Box</h1>
      <input
        placeholder="Search for movies"
        className="form__field"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="button" onClick={findMovie}>Search</button>

      <Routes>
        <Route
          path="/movieInfo"
          element={<MovieInfo selectedMovie={selectedMovie} />}
        />
      </Routes>
      {selectedMovie.title === 'undefined' ? null : (
        <MovieContainer
          movies={movies}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          setMovies={setMovies}
        />
      )}
    </div>
  );
}

export default App;
