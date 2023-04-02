import React, { useState, useEffect } from 'react';
import './Slider.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import {motion} from 'framer-motion';

function Slider() {
    const [count, setCount] = useState(0);
    const images = [
        `/images/1-nolu-slider.webp`,
        `/images/2-nolu-slider.webp`,
        `/images/3-nolu-slider.webp`
    ];
    
    <motion.div
    initial={{ scale: 0 }}
    animate={{ rotate: 180, scale: 1 }}
    transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
    }}
    />


    const handleIncrement = () => {
        if (count < images.length - 1) {
            setCount(count + 1);
        } else {
            setCount(0);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(images.length - 1);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleIncrement();
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div>
            <div className="sliderShow">
                <div className="mySlides">
                <div className="sliderImage">
                        <motion.div
                            initial={{ scale: 10 }}
                            animate={{ rotate: 180, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                        >
                            <img src={images[count]} alt="sliderImages" />
                        </motion.div>
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
