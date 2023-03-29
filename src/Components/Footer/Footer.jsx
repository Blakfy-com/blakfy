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
                        <a href="/home">FAQ</a>
                    </li>
                    <li>
                        <a href="/home">Privacy Policy</a>{' '}
                    </li>
                    <li>
                        <a href="/home">Terms Of Service</a>
                    </li>
                    <li>
                        <a href="/home">Cookies Policy</a>
                    </li>
                    <li>
                        <a href="/contact">Contacts</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
