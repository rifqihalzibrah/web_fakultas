import React from 'react';

interface ImageSlideProps {
    imageUrl: string;
    className: string;
}

const ImageSlide: React.FC<ImageSlideProps> = ({ imageUrl, className }) => {
    return (
        <div
            className={`w-full h-full bg-cover bg-center ${className}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
    );
};

export default ImageSlide;
