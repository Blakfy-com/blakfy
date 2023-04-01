import React from 'react';
import './Slider.css';

function Slider() {
    return (
        <div>
            <div className="sliderShow">
                <div className="mySlides">
                    <div className="numberText">1/3</div>
                    <img src="/images/1-nolu-slider.webp" alt="sliderImage1" />
                    <div className="text">Slider 1</div>
                </div>
                <div className="mySlides">
                    <div className="numberText">2/3</div>
                    <img src="/images/2-nolu-slider.webp" alt="sliderImage2" />
                    <div className="text">Slider 2</div>
                </div>
                <div className="mySlides">
                    <div className="numberText">3/3</div>
                    <img src="/images/3-nolu-slider.webp" alt="sliderImage2" />
                    <div className="text">Slider 3</div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
