import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    bottomNavSelected: 'home',
    topBarSelected: 'sports',
    rightNavSelected:'HOME'
    
}
export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        bottomNavChanged: (state, action) => {
            state.bottomNavSelected = action.payload
        },
        topBarChanged: (state, action) => {
            state.topBarSelected = action.payload
        },
        rightNavChanged: (state, action) => {
            state.rightNavSelected = action.payload
        }
    }
})

export default navigationSlice.reducer;
export const { bottomNavChanged, topBarChanged ,rightNavChanged} = navigationSlice.actions;

export const subscribeToBottomNavChange = (state) => state.navigation.bottomNavSelected;
export const subscribeToTopBarChange = (state) => state.navigation.topBarSelected;
export const subscribeToRightNavChange = (state) => state.navigation.rightNavSelected;