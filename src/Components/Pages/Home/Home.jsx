import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Slider from './Slider/Slider';
import Projects from './Projects/Projects';

function Home() {
    return (
        <div>
            <Navbar />
            <h1>Burasi Home sayfasi</h1>
            <Slider />
            <Projects />
            <Footer />
        </div>
    );
}

export default Home;
