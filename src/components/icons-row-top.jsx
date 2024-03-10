import React from 'react';
import InconInRow from './incon-in-row';
import myBets from '../assets/my-bets.png'
import live from '../assets/Live.png';
import virtual from '../assets/virtual.png'


const IconsRowTop = () => {
    return (
        <div className='icons-row-top'>
            <InconInRow name={"Live"} image={live} checked/>
            <InconInRow name={"Virtual"} image={virtual} />
            <InconInRow name={"My Bets"} image={myBets}/>
        </div>
    );
}

export default IconsRowTop;
