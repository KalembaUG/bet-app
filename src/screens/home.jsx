import React from 'react';
import TopBar from '../components/top-bar';
import NavBar from '../components/nav-bar';
import BottomNavigation from '../components/bottom-navigation';
import ImageCarousel from '../components/image-carousel';

import { Images } from '../components/image-carousel';
import IconsRowTop from '../components/icons-row-top';
import BannerImage from '../components/banner-image';

const Home = () => {
    return (
        <div className='home-container'>
            <TopBar />
            <NavBar />
            <ImageCarousel images={Images} />
            <IconsRowTop />
            <BannerImage/>
            <BottomNavigation />
        </div>
    );
}

export default Home;
