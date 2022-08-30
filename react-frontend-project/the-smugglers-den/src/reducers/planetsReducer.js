const initialState = {
    planets: [],
};


const planetReducer = (state=initialState, action) => {
    switch (action.type) {
    case 'SET_PLANETS':
        return { ...state, planets: action.payload };
    default:
        return state
    }
}

export default planetReducer