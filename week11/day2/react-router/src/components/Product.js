import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

let products = [
  {
    name: 'Santa Monica',
    id: 1995,
    amount: '$10,800',
    due: '12/05/1995',
  },
  {
    name: 'Stankonia',
    id: 2000,
    amount: '$8,000',
    due: '10/31/2000',
  },
  {
    name: 'Ocean Avenue',
    id: 2003,
    amount: '$9,500',
    due: '07/22/2003',
  },
  {
    name: 'Tubthumper',
    id: 1997,
    amount: '$14,000',
    due: '09/01/1997',
  },
  {
    name: 'Wide Open Spaces',
    id: 1998,
    amount: '$4,600',
    due: '01/27/1998',
  },
];

export default function Product() {
    return (
    <div>
        Product
        {products.map((product) => {
        return <Link to={`/product/${product.id}`}>
            <ProductCard product={product} />
        </Link>;
        })}
    </div>
    );
}
