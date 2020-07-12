import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(
        <div>
            <ul id="dropdown1" className="dropdown-content">
            <li><NavLink className="cyan-text" to="/profile">Profile<i className="col s2 small material-icons">group</i></NavLink></li>
            <li><NavLink className="cyan-text" to="/setting">Setting<i className="col s2 small material-icons">settings</i></NavLink></li>
            <li><NavLink className="cyan-text" to="/signout">Sign Out<i className="col s2 small material-icons">forward</i></NavLink></li>
            </ul>
            <nav>
            <div className="nav-wrapper Medium cyan lighten-1">
                <Link to="/" className="brand-logo center">tryAxiosAndTestMySelf</Link>
                <Link to="/avatars" className="">randomAvatar</Link>
                <ul className="right">
                <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="large material-icons">account_circle</i></a></li>
                </ul>
            </div>
            </nav>
        </div>        
    )
}

export default Navbar;