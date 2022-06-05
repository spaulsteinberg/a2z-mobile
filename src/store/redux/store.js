import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './slices/profileSlice'
import ticketReducer from './slices/ticketSlice'
import ticketDetail from './slices/ticketDetailSlice'

const store = configureStore({
    reducer: {
        profile: profileReducer,
        tickets: ticketReducer,
        details: ticketDetail
    }
})

export default store