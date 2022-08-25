import React from 'react'

const initialState = {
    // starships: {starship:[]},
    // plantes: {planet:[]}
    starships: [],
    planets: [],
    favorites: [],
};

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
    case "SET_STARSHIPS":
        return {...state, starships: action.payload}
    case "SET_PLANETS":
        return {...state, planets: action.payload}
    case "SET_FAVORITES":
        return {
            ...state, 
            favorites: [...state.favorites, action.payload]}
    default:
        return state
    }
}

export default rootReducer