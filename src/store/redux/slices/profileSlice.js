import { createSlice } from "@reduxjs/toolkit";
import getProfile from "../effects/profileEffects";


const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers: {
        updateProfile: (state, { payload }) => { state.data = payload },
        setProfilePhoto: (state, { payload }) => { state.data.photoUrl = payload }
    },
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
            state.error = "Something went wrong";
        }
    }
})

export const { updateProfile, setProfilePhoto } = profileSlice.actions
export default profileSlice.reducer