import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    tickets: {},
    ids: [],
    appliedTo: []
}

const ticketDetail = createSlice({
    name: 'Ticket Detail',
    initialState,
    reducers: {
        addTicketDetail: (state, { payload: { id, data, hasApplied } }) => {
            state.tickets[id] = data;
            state.ids.push(id);
            if (hasApplied) {
                state.appliedTo.push(id)
            }
        },
        addAppliedTicket: (state, { payload }) => {
            state.appliedTo.push(payload)
        }
    }
})

export const { addTicketDetail, addAppliedTicket } = ticketDetail.actions

export default ticketDetail.reducer