type State = {
    counter: number;
    user: string;
};

const initialState: State = {
    counter: 0,
    user: "joe"
};

type Action = {
    type: string;
    payload?: any;
};

const rootReducer = (state = initialState, action: Action) => {
switch (action?.type) {
    case 'INCREMENT':
        return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
        return {...state, counter: state.counter - 1}
    default:
        return state;
}
};

export default rootReducer;
