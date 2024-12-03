// PhotoCard.js
import React from 'react';
import PhotoCarousel from './PhotoCarousel';
import './PhotoCard.css'; 

import  image1 from './media/image1.jpg';
import  image2 from './media/image2.jpg';
import  image3 from './media/image3.jpg';

const PhotoCard = () => {
    
    const images = [
        image1,
        image2,
        image3,
        'https://example.com/image4.jpg',
        'https://example.com/image5.jpg',
        'https://example.com/image6.jpg',
        'https://example.com/image7.jpg',
        'https://example.com/image8.jpg',
        'https://example.com/image9.jpg',
        'https://example.com/image10.jpg',
        'https://example.com/image11.jpg',
        'https://example.com/image12.jpg',
        'https://example.com/image13.jpg',
        'https://example.com/image14.jpg',
        'https://example.com/image15.jpg',
        'https://example.com/image16.jpg',
        'https://example.com/image17.jpg',
        'https://example.com/image18.jpg',
    ];

    return (
        <div className="photo-card">
            <PhotoCarousel images={images} />
        </div>
    );
};

export default PhotoCard;