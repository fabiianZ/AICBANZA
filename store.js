import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./src/redux/AppReducer"

export const store = configureStore({
    reducer: {
        appReducer: appReducer
    }
})