import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeToTopBarChange ,topBarChanged} from '../features/navigation/navigationSlice';

const NavBarItem = ({name}) => {
    const dispatch = useDispatch();

    const checked = useSelector(subscribeToTopBarChange) === name ? 'checked' : '';

    return(
        <div className={`nav-bar-item ${checked}`} onClick={(e)=>dispatch(topBarChanged(name))}><span>{ name}</span></div>
    )
}

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <NavBarItem name={'Sports'}/>
            <NavBarItem name={'Live Now'}/>
            <NavBarItem name={'Upcomming'}/>
            <NavBarItem name={'Popular'}/>
        </div>
    );
}

export default NavBar;
