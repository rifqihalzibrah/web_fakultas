'use client'

import React, { useState, useEffect } from 'react';
import ImageSlide from './imageSlide';

interface SlideshowProps {
    images: string[];
    interval?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, interval }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToNextSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
            setIsTransitioning(false);
        }, 500); // 500ms transition duration
    };

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, interval);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex, interval]);

    return (
        <div className="relative w-full h-[100vh] overflow-hidden">
            {images.map((imageUrl, index) => (
                <ImageSlide
                    key={index}
                    imageUrl={imageUrl}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex
                        ? 'opacity-100'
                        : 'opacity-0 pointer-events-none'
                        }`}
                />
            ))}
        </div>
    );
};

export default Slideshow;
