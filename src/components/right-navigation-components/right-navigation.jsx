import React from 'react';
import { useSelector } from 'react-redux';
import { selectSportsGroups } from '../../features/sports/sportsSlice';
import Group from './group';
import SportSelectConatainer from './sport-select-conatainer';
import RightNavMain from './right-nav-main';


const RightNavigation = () => {

    // console.log('**************************',groups)
    return (
        <div>
            <SportSelectConatainer/>
                <RightNavMain/>

                    <Group  />


        </div>
    );
}

export default RightNavigation;
