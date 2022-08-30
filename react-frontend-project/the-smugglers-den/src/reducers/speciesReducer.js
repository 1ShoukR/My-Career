const initialState = {
    species: []
}


const speciesReducer = (state=initialState, action) => {
    switch (action.type) {
    case 'SET_SPECIES':
        return { ...state, species: action.payload };
    default:
        return state;
    }
}

export default speciesReducer