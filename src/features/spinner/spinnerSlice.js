import { createSlice } from "@reduxjs/toolkit";

export const spinnerSlice = createSlice({
    name: 'spinner',
    initialState: {
        show:true
    },
    reducers: {
        setSpinnerState: (state, action) => {
            state.show = action.payload
        }
    }
})

export const { setSpinnerState } = spinnerSlice.actions;
export const getSpinnerState = (state) => state.spinner.show

export default spinnerSlice.reducer;