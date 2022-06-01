import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './slices/profileSlice'
import ticketReducer from './slices/ticketSlice'

const store = configureStore({
    reducer: {
        profile: profileReducer,
        tickets: ticketReducer
    }
})

export default store