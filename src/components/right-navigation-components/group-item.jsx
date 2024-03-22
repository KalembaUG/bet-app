import React from 'react';
import { DownIcon } from './icons';

const GroupItem = ({itemName, imgSrc ,count='',onClick=(e)=>{}}) => {
    return (
        <div className='group-item' onClick={onClick}>
            <div className="group-item-left">
               {imgSrc && <img src={imgSrc} className='flag' alt="" />}
                <span>{itemName}</span>
            </div>
            <div className="group-item-right">
                {count ? <span>4</span>: ''}
                <div className='group-item-icon'><DownIcon/></div>
            </div>
        </div>
    );
}

export default GroupItem;
