import React from 'react';

import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <div className="logImCo">
                <div className="imCoTop">
                    <a href="/" className="coTopNeMember">
                        New Member?
                    </a>
                    <a href="/Singup" className="coTopSignUp">
                        Sign up
                    </a>
                </div>
                <div className="imCoImages">
                    <img src="/images/svg/sign/log-in-1.png" />
                </div>
            </div>

            {/* ======================= */}

            <div className="login">
                <div className="loginLogo">
                    <a className="loginLogo-A" href="/">
                        B L A K F Y
                    </a>
                </div>

                <div className="loginyourAccount">
                    <p className="loginyourAccount-text">
                        Login your BLAKFY Account
                    </p>
                </div>

                <div className="loginInput-mail">
                    <input className=" loginInput" placeholder="Email/Phone" />
                </div>

                <div className="loginInput-pw">
                    <input className=" loginInput" placeholder="Password" />
                </div>

                <div className="resetPw">
                    <a className="resetPw-a" href="#">
                        Forgot Password ?
                    </a>
                </div>

                <div className="login-buttons">
                    <div className="loginButton">
                        <button className="register-page-Button">Login</button>
                    </div>
                    <div className="loginButton">
                        <button className="register-page-Button">
                            Reguest OTP
                        </button>
                    </div>
                </div>

                <div class="line">
                    <div class="line-div1"></div>
                    <span class="line-or">Or</span>
                    <div class="line-div1"></div>
                </div>

                <div className="social-login">
                    <div className="social-login-div">
                        <FcGoogle className="social-login-icon" />
                        <p>Google</p>
                    </div>
                    <div className="social-login-div">
                        <AiFillFacebook className="social-login-icon" />
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
