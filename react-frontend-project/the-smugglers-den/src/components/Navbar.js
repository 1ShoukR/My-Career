import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
return (
    <div>
        <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/people">People</Link>
        <Link to="/starships">Starships</Link>
        <Link to="/movies">Movies</Link>
        <Link to="planets">Planets</Link>
        <Link to="vehicles">Vehicles</Link>
        <Link to="species">Species</Link>
        <Link to="/tos">Terms of services</Link>
        <Link to="favorites">Favorites</Link>
        </nav>
    </div>
);
};
