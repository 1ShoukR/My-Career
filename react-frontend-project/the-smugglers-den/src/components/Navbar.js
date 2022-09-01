import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';
import "../css/navbar.css"

export const Navbar = () => {
return (
<div>
    {/* <nav className="navbar navbar-inverse navbar-fixed-top">
      <Link to="/">Home</Link>
      <Link to="/people">People</Link>
      <Link to="/starships">Starships</Link>
      <Link to="/movies">Movies</Link>
      <Link to="planets">Planets</Link>
      <Link to="vehicles">Vehicles</Link>
      <Link to="species">Species</Link>
      <Link to="/tos">Terms of services</Link>
      <Link to="favorites">Favorites</Link>
    </nav> */}

    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li><Link  to="/"><img className='mainLogo'src="https://www.freepnglogos.com/uploads/star-wars-logo-0.png" alt="home" /></Link></li>
          <li><Link className='topNav' to="/people">People</Link></li>
          <li><Link className='topNav' to="/starships">Starships</Link></li>
          <li><Link className='topNav' to="/movies">Movies</Link></li>
          <li><Link className='topNav' to="planets">Planets</Link></li>
          <li><Link className='topNav' to="vehicles">Vehicles</Link></li>
          <li><Link className='topNav' to="species">Species</Link></li>
          <li><Link className='topNav' to="/tos">Terms of services</Link></li>
          <li><Link className='topNav' to="favorites">Favorites</Link></li>
      </ul>
    </div>
</nav> 
</div>
);
};
