import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice = createSlice({
    name: "toggle",
    initialState: {
        isOpen: false
    }
    ,
    reducers: {
        toggleHandler: (state, action) => {
            state.isOpen = !state.isOpen;
        },
        closeSideBar : (state,action )=>{
            state.isOpen = false
        }
    }
})



export const { toggleHandler ,closeSideBar } = ToggleSlice.actions;
export default ToggleSlice.reducer;