import { createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { getAccount } from "../../../firebase/api";
import { logout } from '../../../firebase/api'
const getProfile = createAsyncThunk(
    'profile/getProfile',
    async (token) => {
        return await getAccount(token)
        .then(res => {
            const { data: { isDriver }} = res.data
            if (!isDriver) { 
                return Alert.alert("Unauthorized", "You are not authorized on this app.", [
                    {
                        text: 'Logout', style: 'destructive',
                        onPress: async () => await logout().catch(err => console.log(err))
                    }
                ])
            }
            return Promise.resolve(res.data.data)
        })
        .catch(err => {
            console.log(err, err.response)
            return Promise.reject("Something went wrong")
        })
    }
)

export default getProfile