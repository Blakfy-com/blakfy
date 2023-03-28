import React from 'react';
import './Navbar.css';

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
                        <a href="#">Home</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#">About</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#">Services</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>

            <div class="navbar-right">
                <div class="navbar-auth">
                    <a className="Sign-In" href="#">
                        Sign In
                    </a>
                    <a className="Sign-Up" href="#">
                        Sign Up
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
