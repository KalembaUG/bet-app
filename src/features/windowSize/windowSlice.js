import { createSlice } from "@reduxjs/toolkit"; 


export const windowSlice = createSlice({
    name: "windowSlice",
    initialState: { width: window.screen.width },
    reducers: {
        widthChange: (state, action) => {
            state.width = action.payload
        }
    }

});
export const { widthChange } = windowSlice.actions;
export const listenToWindowChange = (state) => state.windowSize.width;
export default windowSlice.reducer;