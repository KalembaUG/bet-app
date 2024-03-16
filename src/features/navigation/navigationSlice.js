import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    bottomNavSelected: 'home',
    topBarSelected:'sports'
    
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
        }
    }
})

export default navigationSlice.reducer;
export const { bottomNavChanged, topBarChanged } = navigationSlice.actions;

export const subscribeToBottomNavChange = (state) => state.navigation.bottomNavSelected;
export const subscribeToTopBarChange = (state) => state.navigation.topBarSelected;