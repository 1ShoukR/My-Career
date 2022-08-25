import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
return (
    <div>
        <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/tos">Terms of services</Link>
        </nav>
    </div>
);
};
