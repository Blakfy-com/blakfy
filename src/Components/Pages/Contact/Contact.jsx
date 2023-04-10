import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

import './Contact.css';

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="con-form-main">
                <div className="contact-form">
                    <div className="form-left">
                        <div className="left-col-1">
                            <h1>Let`s Talk</h1>
                            <p>
                                Have same big idea or brand to develop and need
                                help? Then reach out we`d love to hear about
                                your project and provide help
                            </p>
                        </div>
                        <div className="left-col-2">
                            <h4>Email</h4>
                            <a href="#">info@blakfy.com</a>
                        </div>
                        <div className="left-col-2">
                            <h4>Socials</h4>
                            <a href="#">Instagram</a>
                            <a href="#">Twitter</a>
                            <a href="#">Facebook</a>
                        </div>
                    </div>

                    <div className="form-right">
                        <div className="form-input-name">
                            <label>Name</label>
                            <input />
                        </div>

                        <div className="form-input-email">
                            <label>Email</label>
                            <input />
                        </div>

                        <div className="form-input-commit">
                            <label>Message</label>
                            <textarea />
                        </div>

                        <div className="form-submit">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;
