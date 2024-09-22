import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: initialUser(),
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.fullName = action.payload.fullName;
            state.role = action.payload.role;
        },
        logout: (state) => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            state.username = "";
            state.fullName = "";
            state.role = 0;
        }
    }
})

function initialUser() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (user && token) {
        return JSON.parse(atob(user));
    }
    return {
        username: "",
        fullName: "",
        role: 0
    }
}

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;