type ProductDetail = {
    description: string;
    price: string
}

type State = {
  counter: number;
  user: string;
  products: ProductDetail[];
  cart: ProductDetail[];
  order: {};
};

type Action = {
    type: string;
    payload?: any;
};

type Product = {
    description: string;
    price: string;
};

type Order = {
    name: string;
    items: {}[];
};

const initialProduct = [
    { description: 'Shirt', price: '$29.99' },
    { description: 'Pants', price: '$49.99' },
    { description: 'Yeezys', price: '$400.99' },
    { description: 'Hat', price: '$89.99' },
    { description: 'The Blke Sports Coat', price: '$6,000,000.00' },
    { description: 'Gloves', price: '$39.99' },
    ]


const initialState: State = {
    counter: 0,
    user: 'joe',
    products: initialProduct,
    order: {
        name: "Rahmin",
        items: []
    },
    cart: []
};



const rootReducer = (state = initialState, action: Action) => {
switch (action?.type) {
    case 'INCREMENT':
        return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
        return {...state, counter: state.counter - 1}
    case "ADD_TO_CART":
        const newCart = state.cart
        return {...state, cart: [...newCart, action?.payload]}
    case "REMOVE_FROM_CART":
        return {...state, cart: [...state.cart].filter(product => product !== action.payload)}
    default:
        return state;
}
};

export default rootReducer;
