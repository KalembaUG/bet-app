import React from 'react';

const BottomNavigationIcon = ({icon,iconWhite,name,checked= false}) => {
    return (
        checked ?
            (<div className='bottom-nav-item checked'>
                <div className='nav-icon'><img src={iconWhite} alt={name} /></div>
                <div><span className='nav-name'>{ name}</span></div>
            </div >)
            :  (<div className='bottom-nav-item'>
            <div className='nav-icon'><img src={icon} alt={name} /></div>
            <div><span className='nav-name'>{ name}</span></div>
        </div >)
    );
}

export default BottomNavigationIcon;
