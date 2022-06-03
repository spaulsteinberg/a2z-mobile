import { createSlice } from "@reduxjs/toolkit"
import getAllTickets from '../effects/ticketEffects'


const initialState = {
    loading: false,
    data: null,
    error: null
}

const ticketSlice = createSlice({
    name: "Ticket Slice",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllTickets.pending]: state => {
            state.loading = true
        },
        [getAllTickets.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.error = null
        },
        [getAllTickets.rejected]: state => {
            state.loading = false;
            state.data = null;
            state.error = "An error occurred. Please reload and try again."
        }
    }
})

export default ticketSlice.reducer