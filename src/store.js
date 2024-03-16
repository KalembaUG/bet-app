import { configureStore } from '@reduxjs/toolkit';
import windowSliceReducer from './features/windowSize/windowSlice';
import sportsReducer from './features/sports/sportsSlice';
import navigationReducer from './features/navigation/navigationSlice'

export default configureStore({
    reducer: {
        windowSize: windowSliceReducer,
        sports: sportsReducer,
        navigation: navigationReducer
    }
})