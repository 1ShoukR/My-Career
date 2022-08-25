import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 


function App() {
  const dispatch = useDispatch();
  const fetchPeople = async () =>{
    const url = `https://swapi.dev/api/people/`;
    const res = await fetch(url)
    const peopleData = await res.json()
    console.log("people Data", peopleData)
  }
  fetchPeople()

  const fetchMovies = async () =>{
    const url = `https://swapi.dev/api/films/`;
    const res = await fetch(url)
    const movieData = await res.json()
    console.log("movie data",movieData)
  }
  fetchMovies()

  const fetchStarships = async () => {
    const url = `https://swapi.dev/api/starships/9/`;
    const res = await fetch(url)
    const starshipData = await res.json()
    console.log("starship data",starshipData)
  }
  fetchStarships()
  return (
    <div className="App">
      <h1>The Smuggler's Den</h1>
      <h5>All your Star Wars needs, in one place!</h5>
    </div>
  );
}

export default App;
