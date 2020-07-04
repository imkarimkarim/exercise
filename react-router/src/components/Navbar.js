import React from 'react';

const Navbar = () =>{
    return(
        <nav>
            <div className="nav-wrapper deep-purple accent-4">
            <a href="/" className="brand-logo">Karim</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/shop">Shop</a></li>
            </ul>
            </div>
        </nav>
            
    )
}

export default Navbar;