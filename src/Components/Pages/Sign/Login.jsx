import React from 'react';

import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

import './Login.css';

function Login() {
    return (
        <div className="log-container">
            <div className="log-l">
                <div className="log-l-top">
                    <a href="/" className="log-l-top-1">
                        New Member?
                    </a>
                    <a href="/Singup" className="log-l-top-2">
                        Signup
                    </a>
                </div>

                <img src="/images/svg/sign/log-in-1.png" />
            </div>

            {/* ======================= */}

            <div className="log-r">
                <a className="login-r-logo" href="/">
                    B L A K F Y
                </a>

                <p className="login-r-text">Login your BLAKFY Account</p>

                <input className="log-input" placeholder="Email/Phone" />

                <input className="log-pass" placeholder="Password" />

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
                    <div className="lsl-div">
                        <FcGoogle className="lsl-icon" />
                        <p>Google</p>
                    </div>
                    <div className="lsl-div">
                        <AiFillFacebook className="lsl-icon" />
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
