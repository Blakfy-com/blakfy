import React from 'react';
import Navbar from '../../Navbar/Navbar';

import './Login.css';

function Login() {
    return (
        <div className="log-container">
            <div className="log-l">
                <div className="log-l-top">
                    <a href="/" className="log-l-top-1">
                        New Member?
                    </a>
                    <p className="log-l-top-2">Signup</p>
                </div>

                <img src="/images/svg/sign/log-in.png" />
            </div>

            {/* ======================= */}

            <div className="log-r">
                <a className="log-r-log" href="/">
                    B L A K F Y
                </a>

                <p className="log-r-t">Login your BLAKFY Account</p>

                <input className="log-input" placeholder="Email/Phone" />

                <input className="log-input" placeholder="Password" />

                <a className="log-r-res-pw" href="#">
                    Forgot Password ?
                </a>

                <div className="lrlis">
                    <button className="lrlis-button">Login</button>
                    <button className="lrlis-button">Reguest OTP</button>
                </div>

                <div class="lglbr">
                    <div class="lglbrc"></div>
                    <span class="lglbr-or">Or</span>
                    <div class="lglbrc"></div>
                </div>

                <div className="lsl">
                    <button className="lsl-button">Google</button>
                    <button className="lsl-button">Facebook</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
