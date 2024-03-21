import React from 'react';
import img1 from '../../assets/flags/usa.png'
import { DownIcon } from './icons';

const GroupItem = ({itemName}) => {
    return (
        <div className='group-item'>
            <div className="group-item-left">
                <img src={img1} className='flag' alt="" />
                <span>{itemName}</span>
            </div>
            <div className="group-item-right">
                <span>4</span>
                <div className='group-item-icon'><DownIcon/></div>
            </div>
        </div>
    );
}

export default GroupItem;
