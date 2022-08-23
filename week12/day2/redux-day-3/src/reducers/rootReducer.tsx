type State = {
    counter: number;
};

const initialState: State = {
    counter: 0,
};

type Action = {
    type: string;
    payload?: any;
};

const rootReducer = (state = initialState, action: Action) => {
switch (action?.type) {
    case 'ADD':
        return { ...state };
    default:
        return state;
}
};

export default rootReducer;
