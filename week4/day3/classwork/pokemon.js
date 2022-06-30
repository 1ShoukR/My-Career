const dropDown = document.getElementById("pokemon")
const showContentContainer = document.querySelector(".pokemon-card")
const pokemonChoice = (pokemon) => {
    showContentContainer.innerHTML = null
    const pokeName = document.createElement("h1")
    const pokeImg = document.createElement("img")
    const pokeDescription = document.createElement("p")
    pokeName.classList = "pokemon-name"
    pokeImg.classList = "pokemon-img"
    pokeDescription.classList = "pokemon-description"
    if (pokemon === 'bulb'){
        pokeName.innerText = "Bulbasaur"
        pokeImg.src = 'https://bit.ly/2Lo9RzG';
        pokeDescription.innerText = "This is bulbasaur. Grass type pokemon"
    } 
    else if (pokemon === "char"){
        pokeName.innerText = "Charizard"
        pokeImg.src = 'https://bit.ly/3P8o1SH';
        pokeDescription.innerText = "Fire type pokemon"
    }
    else if (pokemon === "pik"){
        pokeName.innerText = "Pikachu"
        pokeImg.src = 'https://bit.ly/2orICad';
        pokeDescription.innerText = "Electric type pokemon"
    }
    else if (pokemon === "blast"){
        pokeName.innerText = "Blastoise"
        pokeImg.src = 'https://bit.ly/3ufEHPV';
        pokeDescription.innerText = "Water type pokemon"
    }
    else if (pokemon === "gar"){
        pokeName.innerText = "Garchomp"
        pokeImg.src = "https://bit.ly/3I5kr9A"
        pokeDescription.innerText = "Dark type pokemon"
    }
    showContentContainer.append(pokeName, pokeImg, pokeDescription)
}

dropDown.onchange = (e) => pokemonChoice(e.target.value)