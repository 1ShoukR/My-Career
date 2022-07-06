console.log('howdy');

const API_KEY = 'ff1cadec65d9f10c3aafc2a01b14612c';
const container = document.getElementById("container")
const weatherContents = document.getElementById('weather-content');
const searchButton = document.getElementById('btn');
const tempContainer = document.getElementsByClassName('temperature')
// const city_name = document.getElementById('btn');

// api.openweathermap.org/data/2.5/weather?zip=94040,us&appid={API key}

console.log(searchButton);

const searchWeather = async () => {
    weatherContents.innerText = null
    const searchInput = document.getElementById('weather-bar').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchInput},us&appid=${API_KEY}&units=imperial&`  ;
    console.log(url);
    const weatherData = await fetch(url);
    const json = await weatherData.json();
    console.log(json);
    const temp = document.createElement('p')
    temp.classList = 'show-temp'
    temp.innerText = json.main.temp + ' °F';
    const feelsLike = document.createElement('p')
    feelsLike.classList = 'feels-like'
    feelsLike.innerText = 'feels like ' + json.main.feels_like + ' °F';
    const humidity = document.createElement('p')
    humidity.classList = 'humidity'
    humidity.innerText = 'Humidity: ' + json.main.humidity + ' %'
    const minTemp = document.createElement('p')
    minTemp.classList = 'minTemp'
    minTemp.innerText = 'Low of ' + json.main.temp_min + ' °F';
    const maxTemp = document.createElement('p')
    maxTemp.classList = 'maxTemp'
    maxTemp.innerText = 'High of ' + json.main.temp_max + ' °F';
    const showIcons = document.createElement('img');
    showIcons.classList = 'jadenSmith';
    const iconImg = json.weather[0].icon
    showIcons.src = `http://openweathermap.org/img/wn/${iconImg}@2x.png`;
    const weatherDescription = document.createElement('p')
    weatherDescription.classList = 'weatherDesc'
    weatherDescription.innerText = json.weather[0].description
    weatherContents.append(temp, weatherDescription, feelsLike, humidity, minTemp, maxTemp, showIcons)
};
searchButton.onclick = () => searchWeather();



// try {
    
// } catch (error) {
    
// }
