import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../todoRedux/userSlice"

export default configureStore({
    reducer: {
        user: userReducer,
    }
});