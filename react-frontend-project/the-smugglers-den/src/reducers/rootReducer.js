
const initialState = {
    starships: [],
    planets: [],
    favorites: [],
    movies: [],
    people: [],
    vehicles: [],
    species: []
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
    case "SET_MOVIES":
        return {...state, movies: action.payload}
    case "SET_PEOPLE":
        return {...state, people: action.payload}
    case "SET_VEHICLES":
        return {...state, vehicles: action.payload}
    case "SET_SPECIES": 
            return {...state, species: action.payload}
    default:
        return state
    }
}

export default rootReducer