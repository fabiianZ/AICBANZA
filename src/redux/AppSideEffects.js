import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchArtworkList = createAsyncThunk(
    "fetchArtworkList",
    async (page, {rejectWithValue},otherNullData) => {
        try {
            const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`);
            const responseData = await response.json();
            return responseData.data;
        } catch (error) {
            throw rejectWithValue(error);
        }
    }
);

export { fetchArtworkList };
