import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Slider from './Slider/Slider';
import Projects from './Projects/Projects';
import PackageAdvantage from './PackageAdvantage/PackageAdvantage';
import ContentKnowledge from './ContentKnowledge/ContentKnowledge';

function Home() {
    return (
        <div>
            <Navbar />
            <Slider />
            <br />
            <Projects />
            <br />
            <PackageAdvantage />
            <ContentKnowledge />
            <Footer />
        </div>
    );
}

export default Home;
