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
    </div>
    )
}
