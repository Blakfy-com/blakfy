import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Slider from './Slider/Slider';
import Projects from './Projects/Projects';
import PackageAdvantage from './PackageAdvantage/PackageAdvantage';

function Home() {
    return (
        <div>
            <Navbar />
            <Slider />
            <Projects />
            <PackageAdvantage />
            <Footer />
        </div>
    );
}

export default Home;
