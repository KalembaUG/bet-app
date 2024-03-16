import React from 'react';
import { useSelector } from 'react-redux';
import { selectSportsGroups } from '../../features/sports/sportsSlice';
import Group from './group';
import SportSelectConatainer from './sport-select-conatainer';


const RightNavigation = () => {

    // console.log('**************************',groups)
    return (
        <div>
            <SportSelectConatainer/>


                    <Group  />


        </div>
    );
}

export default RightNavigation;
