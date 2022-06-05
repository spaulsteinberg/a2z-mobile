import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    tickets: {},
    ids: []
}

const ticketDetail = createSlice({
    name: 'Ticket Detail',
    initialState,
    reducers: {
        addTicketDetail: (state, { payload: { id, data} }) => {
            console.log(id, data)
            state.tickets[id] = data;
            state.ids.push(id)
        }
    }
})

export const { addTicketDetail } = ticketDetail.actions

export default ticketDetail.reducer