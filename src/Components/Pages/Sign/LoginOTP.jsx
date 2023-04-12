import React from 'react';

import './LoginOTP.css';

function LoginOTP() {
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
                        Please enter the OTP sent to 7049712552.
                    </p>
                </div>

                <div className="loginInput-mail">
                    <input
                        className=" loginInput"
                        placeholder="Write to OTP code"
                    />
                </div>

                <div className="log-r-otp">
                    <a className="resetPw-a ">Not received your code?</a>
                    <a className="resetPw-a  log-r-blue" href="#">
                        Resend code
                    </a>
                </div>

                <div className=".login-buttons">
                    <button className="register-page-Button">Verify</button>
                </div>
            </div>
        </div>
    );
}

export default LoginOTP;
