import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav>
            <div className="nav-wrapper deep-purple accent-4">
            <a href="/" className="brand-logo">Karim</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
            </ul>
            </div>
        </nav>
            
    )
}

export default Navbar;