import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Slider from './Slider/Slider';

function Home() {
    return (
        <div>
            <Navbar />
            <h1>Burasi Home sayfasi</h1>

            <Slider />
            <Footer />
        </div>
    );
}

export default Home;
