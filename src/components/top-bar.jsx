import React from 'react';
import sheildImg from '../assets/sheild-with-icon-01.png';
import logo from '../assets/logo.png'

const TopBar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-left'>
                <div className='nav-logo'>
                    <img src={logo} alt="bet kawa logo" />
                </div>
            </div>
            
            <div className='nav-right'>
                
                <div className='bet-responsibly'>
                    <img src={sheildImg} alt="bet responsibly" />
                </div>
                <button className='login'> <span className='login-text'>login</span></button>
                <button className='join'> <span className='join-text'>join</span></button>
            </div>
        </div>
    );
}

export default TopBar;
