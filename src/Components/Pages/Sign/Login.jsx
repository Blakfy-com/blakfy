import React from 'react';
import Navbar from '../../Navbar/Navbar';

import './Login.css';

function Login() {
    return (
        <div className="log-container">
            <div className="log-l">
                <div className="log-l-top">
                    <p className="log-l-top-1">New Member?</p>
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

                <input value="Email/Phone" />

                <input value="Password" />

                <a>Forgot Password</a>

                <button>Login</button>

                <button>Reguest OTP</button>

                <div>
                    <button>Google</button>
                </div>

                <div>
                    <button>Facebook</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
