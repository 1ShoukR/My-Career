const initialState = {
    vehicles: []
}


const vehiclesReducer = (state=initialState, action) => {
    switch (action.type) {
    case 'SET_VEHICLES':
        return { ...state, vehicles: action.payload };
    default: 
        return state
    }
}


export default vehiclesReducer