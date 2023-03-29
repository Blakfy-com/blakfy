import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-img">
                <img src="/images/3.png" alt="Logo" />
            </div>

            <div className="footer-bottom">
                <ul>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>{' '}
                    </li>
                    <li>
                        <a href="#">Terms Of Service</a>
                    </li>
                    <li>
                        <a href="#">Cookies Policy</a>
                    </li>
                    <li>
                        <a href="#">Contacts</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
