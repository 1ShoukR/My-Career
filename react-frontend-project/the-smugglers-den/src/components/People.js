import React from 'react'

const People = () => {
    const fetchPeople = async () => {
        const url = `https://swapi.dev/api/people/`;
        const res = await fetch(url);
        const peopleData = await res.json();
        console.log('people Data', peopleData);
    };
    fetchPeople();
return (
    <div>
        <h1>
            The People of Star Wars
        </h1>
    </div>
)
}

export default People