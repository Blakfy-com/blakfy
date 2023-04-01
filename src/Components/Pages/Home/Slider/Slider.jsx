import React from 'react';
import { useState } from 'react';
import './Slider.css';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

function Slider() {
    const [count, setCount] = useState(0);
    const images = [
        `/images/1-nolu-slider.webp`,
        `/images/2-nolu-slider.webp`,
        `/images/3-nolu-slider.webp`
    ];

    const handleIncrement = () => {
        if (count < images.length - 1) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    console.log(images.length);

    return (
        <div>
            <div className="sliderShow">
                <div className="mySlides">
                    <div className="sliderImage">
                        <img src={images[count]} alt="sliderImages" />
                        <div className="prev" onClick={handleDecrement}>
                            <FiArrowLeft />
                        </div>
                        <div className="next" onClick={handleIncrement}>
                            <FiArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
