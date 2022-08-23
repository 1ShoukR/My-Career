import { useAppSelector, useAppDispatch } from '../app/hooks';
import Cart from './Cart';
import Product from './Product';
import { createClient } from '@supabase/supabase-js';



const Homepage = (): JSX.Element => {
    const supabaseUrl = 'https://mxakcphctxajogkuteth.supabase.co';
    const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDE0NTg3OCwiZXhwIjoxOTM1NzIxODc4fQ.0qra9FQYuKCkgMteZ0ZAe2wrMx2v1IFGwsU60Oi4KwY';
    const sendToDatabase = async () => {
        const { data, error } = await supabase
        .from('ProductsDatabase')
        .insert([{ name: 'Rahmin', items: cart }]);
        console.log(data)
    };
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const products = useAppSelector((state) => state.products);
    const cart = useAppSelector((state) => state.cart)
    console.log(products);
return (
    <div className="productContainer">
        <div className="homepage">
        <h1>Homepage</h1>
        </div>
        <button 
        onClick={sendToDatabase}>complete order</button>
        {products.map((product) => (
        <Product product={product}/>
    ))}
    <div className="cartContainer">
        <h1>cart items go here</h1>
    </div>
    <Cart />
    </div>
);
};

export default Homepage;
