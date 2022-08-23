import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';

const Product = (props: any): JSX.Element => {
    const product = useAppSelector((state) => state.products)
    const dispatch = useAppDispatch()
return <div className="productCard">
    <h2> {props.product.description}</h2>
    <h3>{props.product.price}</h3>
    <button 
    className='productButton' 
    value={props.product.price}
    name={props.product.description} 
    onClick={() =>{
        dispatch({type: "ADD_TO_CART", payload: props.product})
    }}
    >add to cart</button>
    </div>;
};

export default Product