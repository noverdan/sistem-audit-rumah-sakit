import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        login: (state, action) => {
            state.user_id = action.payload.user_id;
            state.username = action.payload.username;
            state.role = action.payload.role;
        },
        logout: (state) => {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");

            state.user_id = "";
            state.username = "";
            state.role = "";
        }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;