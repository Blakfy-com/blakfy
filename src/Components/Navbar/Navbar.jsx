import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    return (
        <nav class="navbar">
            <div class="navbar-left">
                <div class="bar-logo">
                    <a className="barLogo" href="/">
                        B L A K F Y
                    </a>
                </div>
            </div>

            <div class="navbar-center">
                <ul class="navbar-nav">
                    <li class="navbar-item">
                        <NavLink to={{ pathname: '/' }}>Home</NavLink>
                    </li>
                    <li class="navbar-item">
                        <NavLink to={{ pathname: '/About' }}>About</NavLink>
                    </li>
                    <li class="navbar-item">
                        <NavLink to={{ pathname: '/Contact' }}>Contact</NavLink>
                    </li>
                    <li class="navbar-item">
                        <NavLink to={{ pathname: '/Services' }}>
                            Services
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div class="navbar-right">
                <div class="navbar-auth">
                    <a className="Login" href="Login">
                        Login
                    </a>
                    <a className="Sign-Up" href="Singup">
                        Sign Up
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
