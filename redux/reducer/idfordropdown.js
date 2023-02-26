import { createSlice } from "@reduxjs/toolkit";

const idfordropdownSlice = createSlice({
    name:"dropdownvalue",
    initialState:{
        id:0
    },
    reducers:{
        SET_ID(state,action){
            state.id = action.payload;
        }
    }
})

export const {SET_ID} = idfordropdownSlice.actions;
export default idfordropdownSlice.reducer;