import React from 'react'
import { MovieCard } from './MovieCard'

export default function SpecificMovie(props) {
    console.log("Hello")
    console.log(props)
    const searchByID = async (e) => {
        e.preventDefault();
        console.log("submitting")
    }
    return (
    <div>
        <h2>Movie Details</h2>
        <h1>{props.setRahminMovie.Title}</h1>
        <img src={props.setRahminMovie.Poster} alt="" srcset="" />
    </div>
    )
}
