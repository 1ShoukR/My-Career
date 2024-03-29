const initialState = {
    user: "Rahmin",
    weather: {weather:[]},
    location: "",
    changeMe: ""
}

const rootReducer = (state=initialState, action) =>{
    switch (action.type) {
    case 'GET_USER':
        console.log("Hi, I'm GET_USER");
        // when you grab data from redux, you dont have to pass all of state
        return { ...state };
    case 'SET_WEATHER':
        return { ...state, weather: action.payload };
    case 'SET_LOCATION':
        return { ...state, location: action.payload };
    case 'SET_CHANGEME':
        return { ...state, changeMe: action.payload };
    default:
        return state;
    }
}

export default rootReducer