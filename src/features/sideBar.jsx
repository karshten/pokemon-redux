import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSideBarOpen: true
}

export const sideBarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state, action) => {
            state.isSideBarOpen = action.payload
        }
    }
})

export const { toggleSidebar } = sideBarSlice.actions
export default sideBarSlice.reducer