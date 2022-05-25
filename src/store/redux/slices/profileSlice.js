import { createSlice } from "@reduxjs/toolkit";
import getProfile from "../effects/profileEffects";

const initialState = {
    loading: false,
    data: null,
    error: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        updateProfile: (state, { payload }) => { state.data = { ...state.data, ...payload } },
        setProfilePhoto: (state, { payload }) => { state.data.photoUrl = payload },
        resetProfile: () => initialState
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

export const { updateProfile, setProfilePhoto, resetProfile } = profileSlice.actions
export default profileSlice.reducer