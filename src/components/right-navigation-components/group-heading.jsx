import React from 'react';
import { DownIcon,UpIcon } from './icons';


const GroupHeading = ({ groupName, onClick, showDropDown, className = '', numberOfItems = '5', imgSrc = '' }) => {
    return (
        <div className={'group-heading' + ' ' + className} onClick={onClick}>
            <div>
            {imgSrc && <img src={imgSrc} className='flag' alt="" />}
            <span>{groupName}</span>  

            </div>
            <div>
            <span>{numberOfItems}</span>
            <span>{showDropDown ?   <UpIcon/> : <DownIcon/>}</span>
            </div>
        </div>
    );
}

export default GroupHeading;
