const initialState = {
    starships: [],
};


const starshipReducer = (state=initialState, action) => {
    switch (action.type) {
    case "SET_STARSHIPS":
        return {...state, starships: action.payload}
    default:
        return state
}
}

export default starshipReducer