import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';

const Cart = (): JSX.Element => {
    const cart = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch();
    return <div className="cartCard">
        {cart.map((product) =>{
            return (
                <>
                <div className='cartContainer'>
                    <h1 className='cartName'>{product.description}</h1>
                    <p className='cartPrice'>{product.price}</p>
                    <button 
                    onClick={() => {
                        dispatch({type: "REMOVE_FROM_CART", payload: product})
                    }
                    }>remove</button>
                </div>
                </>
            )
        })}
    </div>;
};

export default Cart