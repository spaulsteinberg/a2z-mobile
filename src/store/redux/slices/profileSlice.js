import { createSlice } from "@reduxjs/toolkit";
import getProfile from "../effects/profileEffects";


const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getProfile.pending]: (state) => {
            state.loading = true
        },
        [getProfile.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.error = null
        },
        [getProfile.rejected]: (state, { payload }) => {
            state.loading = false;
            state.data = null;
            state.error = payload;
        }
    }
})

export default profileSlice.reducer