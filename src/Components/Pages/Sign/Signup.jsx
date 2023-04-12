import React from 'react';
import './Signup.css';

function Signup() {
    return (
        <div className="Signup">
            <div className="LEFT">
                <div>
                    <p>B L A K F Y</p>
                </div>

                <div>
                    <p>Create your Clipo Account</p>
                </div>

                <form>
                    <input placeholder="First Name" />
                    <input placeholder="Email" />
                    <input placeholder="Gender" />
                    <input placeholder="Password" />
                    <input placeholder="Last name" />
                    <input placeholder="number" />
                    <input placeholder="Profession" />
                    <input placeholder="Confirm password" />
                </form>

                <div>
                    <input type="checkbox"></input>
                    <p>
                        This site is protected by reCAPTCHA and the Google
                        <a>Privacy Policy</a> and <a>Terms of Service</a> apply.
                    </p>
                </div>

                <div>
                    <button>
                        <p>Register</p>
                    </button>
                </div>

                <div>
                    <p>
                        This site is protected by reCAPTCHA and the Google{' '}
                        <a>Privacy Policy</a> and <a>Terms of Service</a> apply.
                    </p>
                </div>

                <div>
                    <p>---</p>
                    <p>Or</p>
                    <p>---</p>
                </div>

                <div>
                    <button>Google</button>
                    <button>Facebook</button>
                </div>
            </div>

            <div className="RIGHT">
                <div>
                    <p>Already a member ?</p>
                    <button>Sign In</button>
                </div>
                <div>
                    <img src="/images/svg/sign/log-in.png" />
                </div>
            </div>
        </div>
    );
}

export default Signup;
