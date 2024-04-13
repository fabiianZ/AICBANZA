import { createReducer } from "@reduxjs/toolkit"
import { fetchArtworkList } from "./AppSideEffects";
import { clean } from "./AppActions";

const initialState = {
    artworkList : []
}

const appReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchArtworkList.fulfilled, (state , action ) => {
            if (state.artworkList.length == 0) {
                state.artworkList = action.payload
            }else{
                state.artworkList = [...state.artworkList, ...action.payload]
            }
        })
        .addCase(clean, (state, action) => {
            state.artworkList = [];
        })
})
export default appReducer;