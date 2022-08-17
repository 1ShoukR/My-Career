import React from 'react'
import {useState} from "react"
import "../App.css"

export default function Pokemon(props) {
    const [front, setFront] = useState(true)

    return (
        <div>

        <h1>{props.pokemon.name}</h1>
        <button onClick={() =>{
            props.deleteCard(props.pokemon)
        }}>Delete</button>
        <h1>{props.pokemon.hp}</h1>
        <img
            onClick={() => setFront(!front)}
            src={
            front
                ? props?.pokemon?.sprites?.front
                : props?.pokemon?.sprites?.back
            }
        />
        </div>
    );
}
