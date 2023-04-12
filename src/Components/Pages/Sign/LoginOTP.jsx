import React from 'react';

import './LoginOTP.css';

function LoginOTP() {
    return (
        <div className="log-container">
            <div className="log-l">
                <div className="log-l-top">
                    <a href="/" className="log-l-top-1">
                        New Member?
                    </a>
                    <p className="log-l-top-2">Signup</p>
                </div>

                <img src="/images/svg/sign/log-in-1.png" />
            </div>

            {/* ======================= */}

            <div className="log-r">
                <a className="log-r-log" href="/">
                    B L A K F Y
                </a>

                <p className="log-r-t">
                    Please enter the OTP sent to 7049712552.
                </p>

                <input className="log-input" placeholder="Enter OTP" />

                <div className="log-r-otp">
                    <a className="log-r-res-pw" href="#">
                        Not received your code?
                    </a>
                    <a className="log-r-res-pw log-r-blue" href="#">
                        Resend code
                    </a>
                </div>

                <div className="lrlis">
                    <button className="lrlis-button">Verify</button>
                </div>
            </div>
        </div>
    );
}

export default LoginOTP;
