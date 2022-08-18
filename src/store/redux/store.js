import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './slices/profileSlice'
import ticketReducer from './slices/ticketSlice'
import ticketDetail from './slices/ticketDetailSlice'
import historyReducer from './slices/historySlice'

const store = configureStore({
    reducer: {
        profile: profileReducer,
        tickets: ticketReducer,
        details: ticketDetail,
        history: historyReducer
    }
})

export default store