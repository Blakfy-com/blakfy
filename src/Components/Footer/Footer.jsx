import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer class="footer">
            <div class="footer-left">
                <div class="bar-logo">
                    <a className="footer-logo-color" href="#">
                        B L A K F Y
                    </a>
                </div>
            </div>

            <div class="footer-center">
                <ul class="footer-nav">
                    <li class="footer-item">
                        <a>FAQ</a>
                    </li>
                    <li class="footer-item">
                        <a>Privacy Policy</a>
                    </li>
                    <li class="footer-item">
                        <a>Terms Of Service</a>
                    </li>
                    <li class="footer-item">
                        <a>Cookies Policy</a>
                    </li>
                    <li class="footer-item">
                        <a>Contacts</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
