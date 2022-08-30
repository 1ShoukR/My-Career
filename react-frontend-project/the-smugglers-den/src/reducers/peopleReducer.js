const initialState = {
    people: []
}


const peopleReducer = (state=initialState, action) => {
    switch (action.type) {
    case 'SET_PEOPLE':
        return { ...state, people: action.payload };
    default: 
        return state
    }
}


export default peopleReducer