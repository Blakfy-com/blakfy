import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

import {
    SiMicrostrategy,
    SiAffinitydesigner,
    SiAffinitypublisher,
    SiTencentqq
} from 'react-icons/si';

import './Services.css';

function Services() {
    return (
        <div className="about-about">
            <Navbar />

            <div className="about-main">
                <h2>Dive Into the New Age of Accelerated Analytics</h2>
            </div>

            <div className="about-center">
                <div className="about-title">
                    <div className="about-logo">
                        <SiMicrostrategy className="SiMicrostrategy" />
                    </div>
                    <div className="about-comment">
                        <h4>Determining the most appropriate strategy</h4>
                        <p>
                            Do you know what you really need? As a result of the
                            needs analysis we will do for you, the most suitable
                            web design service for your budget is provided.
                        </p>
                    </div>
                </div>
                <div className="about-title">
                    <div className="about-logo">
                        <SiAffinitydesigner className="SiAffinitydesigner" />
                    </div>
                    <div className="about-comment">
                        <h4>Website design process</h4>
                        <p>
                            Increase your reliability in the market with the
                            most suitable web design for your real needs, high
                            quality, which gives confidence to your customers.
                        </p>
                    </div>
                </div>
                <div className="about-title">
                    <div className="about-logo">
                        <SiAffinitypublisher className="SiAffinitypublisher" />
                    </div>
                    <div className="about-comment">
                        <h4>Development publishing and delivery</h4>
                        <p>
                            Thanks to the content management panel we have
                            written specially for you, you will be able to
                            intervene in the site from anywhere with internet.
                            If you want to host your website on our servers, we
                            offer you the speed kit that we have specially
                            developed, which allows your website to load 1.5 to
                            4 times faster. In this way, you will have the
                            privilege of having the fastest opening website in
                            Turkey.
                        </p>
                    </div>
                </div>
                <div className="about-title">
                    <div className="about-logo">
                        <SiTencentqq className="SiTencentqq" />
                    </div>
                    <div className="about-comment">
                        <h4>Support process</h4>
                        <p>
                            We offer an opportunity to work with a team that you
                            can always reach and consult, produce quick
                            solutions in possible situations and genuinely care
                            about you.
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-footer">
                <div className="about-footer-title">
                    <h2>We Integrate With Your Ecosystem</h2>
                </div>

                <div className="about-footer-comment">
                    <p>
                        As blakfy.com, we prepare websites that are in target
                        searches by revealing the right strategies. At this
                        point, we ensure that you have websites with a simple,
                        fast and manageable interface design that are compatible
                        with computers, tablets and mobile devices.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Services;
