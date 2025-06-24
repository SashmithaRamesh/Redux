import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slice/userSlice';
const store = configureStore({
    reducer:{
        usersInfo:userReducer
    }
});
export default store;