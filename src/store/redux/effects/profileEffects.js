import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const getProfile = createAsyncThunk(
    'profile/getProfile',
    async (token) => {
        try {
            const profile = await axios.get('http://127.0.0.1:3000/api/v1/account', { headers: { token } })
            console.log(profile, profile.data)
            return profile.data.data
        } catch (err) {
            console.log(err)
            return "Something went wrong loading profile. Please try again later."
        }
    }
)

export default getProfile