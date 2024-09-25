import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
    },
})

console.log("INITIATE: " + JSON.stringify(store.getState().user));
store.subscribe(() => {
    console.log("CHANGE: " + JSON.stringify(store.getState().user))
})

export default store