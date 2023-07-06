import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    user: {
      username: "omanyu",
      email: "omanyu@gmail.com",
      token: "null",
      id: "",
    },
    todo: {
        desc: "",
    }
  },
  reducers: {
    login: (state, action)=>{
      state.user = action.payload;
    },
    logout: (state, action)=>{
        state.user = {
            username: "",
            email: "",
            token: "",
            id: "",
        };
    },
    addtodos: (state, action)=>{
        state.todo = action.payload;
    }
  },
});
export const { login,addtodos } = userSlice.actions;
export default userSlice.reducer;
