import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import MainSlide from './mainSlide/MainSlide';
import Slider from './Slider/Slider';
import Projects from './Projects/Projects';
import PackageAdvantage from './PackageAdvantage/PackageAdvantage';
import ContentKnowledge from './ContentKnowledge/ContentKnowledge';

function Home() {
    return (
        <div>
            <Navbar />
            <div className="mainHome">
                <MainSlide />
                {/* <Slider /> */}
                <br />
                <Projects />
                <br />
                <PackageAdvantage />
            </div>
            <ContentKnowledge />
            <Footer />
        </div>
    );
}

export default Home;
