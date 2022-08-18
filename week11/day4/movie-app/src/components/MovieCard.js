import React from 'react';
import { MovieContainer } from './MovieContainer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SpecificMovie from './SpecificMovie';

export const MovieCard = (props) => {
  // more than likely where you will map over movies
    // console.log(props.movie)
//   console.log(props.movies.Title)
    return (
        <Link to={`details`} >
        <div>
            {/* {props.movies.map(movie =>{
            return(
                movie
            )
        })} */}
          {/* {props.movies.Search} */}
            <p>{props.movie.Title}</p>
            <img
            src={props.movie.Poster}
            onClick={() => {}}
            alt="No Picture available"
            />
            <p>{props.movie.Year}</p>
        </div>
        </Link>
    );
};
