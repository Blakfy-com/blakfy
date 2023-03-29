import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

// test
function Navbar() {
    return (
        <nav class="navbar">
            <div class="navbar-left">
                <div class="navbar-logo">
                    <img src="/images/3.png" alt="Logo" />
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
                    <a className="Sign-In" href="Singin">
                        Sign In
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
