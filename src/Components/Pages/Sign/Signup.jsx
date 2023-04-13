import React from 'react';
import './Signup.css';

import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

function Signup() {
    return (
        <div className="Signup login-container">
            <div className="left ">
                <div className="loginLogo left-logo">
                    <a className="loginLogo-A" href="/">
                        B L A K F Y
                    </a>
                </div>

                <div className="loginyourAccount left-logo">
                    <p className="loginyourAccount-text">
                        Create your Clipo Account
                    </p>
                </div>

                <form className="register-form">
                    <input
                        className="register-form-input first_name "
                        placeholder="First Name"
                    />
                    <input
                        className="register-form-input email"
                        placeholder="Email"
                    />
                    <input
                        className="register-form-input gender"
                        placeholder="Gender"
                    />
                    <input
                        className="register-form-input password"
                        placeholder="Password"
                    />
                    <input
                        className="register-form-input last_name"
                        placeholder="Last name"
                    />
                    <input
                        className="register-form-input number"
                        placeholder="number"
                    />
                    <input
                        className="register-form-input prrofession"
                        placeholder="Profession"
                    />
                    <input
                        className="register-form-input confirm_password"
                        placeholder="Confirm password"
                    />
                </form>

                <div className="register-privacy ">
                    <input className="privacy-checkbox" type="checkbox"></input>
                    <p>
                        Creating an account means you’re okay with our
                        <a>Terms of Service</a> , <a>Privacy Policy</a>, and our
                        default <a>Notification Settings</a> .
                    </p>
                </div>

                <div className="login-buttons signup-button">
                    <div className="loginButton">
                        <button className="register-page-Button">
                            Register
                        </button>
                    </div>
                </div>

                <div className="register-privacy ">
                    <p>
                        This site is protected by reCAPTCHA and the Google
                        <a>Privacy Policy</a> and <a>Terms of Service</a> apply.
                    </p>
                </div>

                <div class="line singup-line">
                    <div class="line-div1"></div>
                    <span class="line-or">Or</span>
                    <div class="line-div1"></div>
                </div>

                <div className="social-login singup-social">
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

            {/*      */}
            <div className="logImCo">
                <div className="imCoTop">
                    <a href="/login" className="coTopNeMember">
                        Already a member ?
                    </a>
                    <a href="/login" className="coTopSignUp">
                        Login
                    </a>
                </div>
                <div className="imCoImages">
                    <img src="/images/svg/sign/log-in.png" />
                </div>
            </div>
        </div>
    );
}

export default Signup;
