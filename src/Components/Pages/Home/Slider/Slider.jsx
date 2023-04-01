import React from 'react';
import { useState } from 'react';
import './Slider.css';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

function Slider() {
    const [images, setImages] = useState('');

    function img(setImages) {
        setImages = ['1', '2', '3'];

        for (let index = 0; index < setImages.length; index++) {
            const element = setImages[index];
        }
    }

    return (
        <div>
            <div className="sliderShow">
                <div className="mySlides">
                    <div className="sliderImage">
                        <img
                            src="/images/1-nolu-slider.webp"
                            alt="sliderImage1"
                        />
                        <div className="prev">
                            <FiArrowLeft />
                        </div>
                        <div className="next">
                            <FiArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
