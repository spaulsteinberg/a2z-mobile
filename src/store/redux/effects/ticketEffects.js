import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTickets } from "../../../firebase/api";


const getAllTickets = createAsyncThunk(
    'ticket/getTickets',
    async (payload) => {
        try {
            const ticketResponse = await getTickets(payload.token, payload.lat, payload.lng)
            return ticketResponse.data.tickets;
        } catch (err) {
            console.log(err)
            return Promise.reject(err)
        }
    }
)

export default getAllTickets