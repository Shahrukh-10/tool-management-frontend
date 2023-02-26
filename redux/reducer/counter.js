import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0,
        desc:"created to test"
    },
    reducers:{
        INC_COUNT(state,action){
            state.count = state.count + 1;
            console.log(state.desc);
        },
        DEC_COUNT(state,action){
            state.count = state.count - 1;
            console.log(state.desc);
        }
    }
})

export const {INC_COUNT,DEC_COUNT} = counterSlice.actions;
export default counterSlice.reducer