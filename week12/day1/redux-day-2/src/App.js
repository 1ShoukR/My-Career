import './App.css';
import { useSelector, useDispatch } from "react-redux" 
import Welcome from './components/Welcome';
import WeatherCard from "./components/WeatherCard"
import SearchButton from './components/SearchButton';

function App() {
  const dispatch = useDispatch()
  const weather = useSelector(state => state.weather)
  const user = useSelector(state => state.user)
  const changeMe = useSelector((state) => state.area)
  const location = useSelector((state) => state.location)
  const getWeather = async() =>{
    const API_KEY = `d302f715167db2c8c419c1956b33aab0`
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location},us&appid=${API_KEY}&units=imperial&
`;
    const weatherJSON = await fetch(url)
    const json = await weatherJSON.json()
    dispatch({type: "SET_WEATHER", payload: json})
    console.log(json)
  }
  return (
    <div className="App">
      <Welcome />
      <div>
        <SearchButton />
      <WeatherCard />
      </div>
    </div>
  );
}

export default App;
