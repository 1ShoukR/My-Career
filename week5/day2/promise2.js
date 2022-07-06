// fetch
// if you forget about fetch, google fetch MDN 
// CRUD



// this always needs a url
const functionName = async () =>{
    const container = document.querySelector("#container")

    // fetch from somewhere, this url 
    const url = 'https://pokeapi.co/api/v2/pokemon';
    // you have to await your fetch 
    const response = await fetch(url)
    // must convery to JSON 
    const json = await response.json()
    console.log(json.results)

    for (const monster of json.results) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList = 'pokemon-card';
    const pokemonName = document.createElement('h1');
    pokemonName.innerText = monster.name;
    pokemonCard.appendChild(pokemonName);
    container.appendChild(pokemonCard);
    }
}
functionName()

// at some point today, go to openweathermap.org



