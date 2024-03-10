import React from 'react';
import bannerImage from '../assets/betkawa-banner-image.jpeg'

const BannerImage = () => {
    return (
        <div className='banner-image'>
            <img src={bannerImage} alt="Bet kawa banner image" />
        </div>
    );
}

export default BannerImage;
