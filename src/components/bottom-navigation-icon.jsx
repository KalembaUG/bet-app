import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeToBottomNavChange ,bottomNavChanged} from '../features/navigation/navigationSlice';

const BottomNavigationIcon = ({ icon, iconWhite, name }) => {
    const dispatch = useDispatch()
    const checked = useSelector(subscribeToBottomNavChange) === name;
    function handleClick(e) {
        dispatch(bottomNavChanged(name))
    }
    return (
        checked ?
            (<div className='bottom-nav-item checked' onClick={handleClick}>
                <div className='nav-icon'><img src={icon} alt={name} /></div>
                <div><span className='nav-name'>{ name}</span></div>
            </div >)
            :  (<div className='bottom-nav-item' onClick={handleClick}>
            <div className='nav-icon'><img src={iconWhite} alt={name} /></div>
            <div><span className='nav-name'>{ name}</span></div>
        </div >)
    );
}

export default BottomNavigationIcon;
