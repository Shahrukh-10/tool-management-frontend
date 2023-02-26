import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducer/counter"
import idfordropdownSlice from "./reducer/idfordropdown";
import loginSlice from "./reducer/login";

export default configureStore({
    reducer:{
        counter:counterSlice,
        dropdownid:idfordropdownSlice,
        login:loginSlice,
    }
})