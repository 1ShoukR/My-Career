import React from 'react'

const Starships = () => {
    const fetchStarships = async () => {
        const url = `https://swapi.dev/api/starships/9/`;
        const res = await fetch(url);
        const starshipData = await res.json();
        console.log('starship data', starshipData);
    };
    fetchStarships();
return (
    <div>Starships</div>
)
}

export default Starships