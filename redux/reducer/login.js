import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:"login",
    initialState:{
        login:false,
        user:{}
    },
    reducers:{
        SET_LOGIN(state,action){
            state.login = action.payload
        },
        SET_USER(state,action){
            state.user = action.payload;
        }
    }
})

export const {SET_LOGIN,SET_USER} = loginSlice.actions;
export default loginSlice.reducer;