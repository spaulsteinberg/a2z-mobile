import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAccount } from "../../../firebase/api";

const getProfile = createAsyncThunk(
    'profile/getProfile',
    async (token) => {
        return await getAccount(token)
        .then(res => Promise.resolve(res.data.data))
        .catch(err => {
            console.log(err, err.response)
            return Promise.reject("Something went wrong")
        })
    }
)

export default getProfile