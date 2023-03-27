import React from 'react';
import './Navbar.css';

// test
function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarLeft">
                <div className="navbarLogo">
                    <img src="/images/3.png" width="60%" alt="logo" />
                </div>
            </div>

            <div className="navbarMain">
                <div className="navMain ">
                    <div className="navItem">
                        <a href="#">E-Ticaret</a>
                    </div>
                    <div className="navItem">
                        <a href="#">Fiyatlar</a>
                    </div>

                    <div className="navItem">
                        <a href="#">Referanslar</a>
                    </div>
                </div>
            </div>

            <div className="navbarRight">
                <div className="In">
                    <a href="#">Sign In</a>
                </div>
                <div className="Up">
                    <a href="#">Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
