import React from 'react';
import BottomNavigationIcon from './bottom-navigation-icon';
import homeIcon from '../assets/home-icon.png';
import homeWhite from '../assets/home-white.png';
import findIcon from '../assets/find.png';
import findWhite from '../assets/find white.png';
import inPlay from '../assets/in-play.png';
import inplayWhite from '../assets/in-play white.png';
import betSlip from '../assets/slip.png';
import betSlipWhite from '../assets/slip white.png';
import moreIcon from '../assets/more.png';
import moreWhite from '../assets/more white.png';


const BottomNavigation = () => {
    return (
        <div className='bottom-navigation'>
            <div className='icons-row'>
                <BottomNavigationIcon name={"home"} icon={homeIcon} iconWhite={homeWhite} />
                <BottomNavigationIcon name={"find"} icon={findIcon} iconWhite={findWhite} />
                <BottomNavigationIcon name={"In-Play"} icon={inPlay} iconWhite={inplayWhite} />
                <BottomNavigationIcon icon={betSlip} iconWhite={betSlipWhite} name={"Bet Slip"} />
                <BottomNavigationIcon icon={moreIcon} iconWhite={moreWhite} name={"More"}/>
            </div>
            <div className='balance-button-row'><button>Balance</button></div>
        </div>
    );
}

export default BottomNavigation;
