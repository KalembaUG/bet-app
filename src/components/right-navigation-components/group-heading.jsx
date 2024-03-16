import React from 'react';
import { RightIcon } from './icons';


const GroupHeading = ({groupName}) => {
    return (
        <div className='group-heading'>
            <span>{groupName}</span>  
            <span><RightIcon/></span>
        </div>
    );
}

export default GroupHeading;
