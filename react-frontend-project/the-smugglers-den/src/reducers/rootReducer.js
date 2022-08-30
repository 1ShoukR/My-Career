import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import moviesReducer from "./moviesReducer";
import peopleReducer from "./peopleReducer";
import planetReducer from "./planetsReducer";
import speciesReducer from "./speciesReducer";
import starshipReducer from "./starshipReducer";
import vehiclesReducer from "./vehiclesReducer";


const rootReducer = combineReducers({
    starshipR: starshipReducer,
    planetsR: planetReducer,
    favoritesR: favoritesReducer,
    moviesR: moviesReducer,
    peopleR: peopleReducer,
    vehiclesR: vehiclesReducer,
    speciesR: speciesReducer
})

export default rootReducer