import React from 'react';
import TopBar from '../components/top-bar';
import NavBar from '../components/nav-bar';
import BottomNavigation from '../components/bottom-navigation';
import ImageCarousel from '../components/image-carousel';
import { listenToWindowChange } from '../features/windowSize/windowSlice';
import { subscribeToBottomNavChange } from '../features/navigation/navigationSlice';

import { Images } from '../components/image-carousel';
import IconsRowTop from '../components/icons-row-top';
import BannerImage from '../components/banner-image';
import withSplashScreen from '../components/withSplashScreen';
import { fetchSports } from '../features/sports/sportsSlice';
import { useDispatch,useSelector } from 'react-redux';
import RightNavigation from '../components/right-navigation-components/right-navigation';
import Matches from '../components/middle-container/matches';


const Home = () => {
    const dispatch = useDispatch();
    const mobile = useSelector(listenToWindowChange) <= 767;//767max
    const bottomNavSelected = useSelector(subscribeToBottomNavChange);
    
    

     dispatch(fetchSports());
    // console.log('*****************',mobile)

    return (
        <div className='home-container'>
            <TopBar />
            <NavBar />
            <div className='sub-main-container'>
                {(!mobile || (bottomNavSelected === 'find'))
                    && (<div className='right-navigation'>
                    {/* right navigation logic */}
                    <RightNavigation />
                </div>)}

            {(!mobile || (bottomNavSelected === 'home')) && (<div className='sub-home-container'>
                {/* Home */}
                <ImageCarousel images={Images} />
                    <IconsRowTop />
                
                <Matches/>


                <BannerImage/>
            </div>)}
           {(!mobile || (bottomNavSelected === 'Bet Slip')) && (<div className='slip-container'>
                {/* slip logic */}

            </div>)}
            </div>
            <BottomNavigation />
        </div>
    );
}

export default withSplashScreen(Home);
