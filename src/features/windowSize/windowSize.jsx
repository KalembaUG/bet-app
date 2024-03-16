import React from 'react';
import { listenToWindowChange, widthChange } from './windowSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';



const WindowSize = () => {
    // const [screenWidth, setScreenWidth] = useState(window.screen.width);
    // const width = useSelector(listenToWindowChange)
    const dispatch = useDispatch();
  
    
    useEffect(() => {
        const handleResize = () => {
            // setScreenWidth(window.screen.width)
            dispatch(widthChange(window.screen.width));
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    

    return (
      <div>
      </div>
    );
  }
  
export default WindowSize;
