import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTickets } from "../../../firebase/api";


const getAllTickets = createAsyncThunk(
    'ticket/getTickets',
    async (token) => {
        try {
            const ticketResponse = await getTickets(token)
            return ticketResponse.data.tickets;
        } catch (err) {
            console.log(err)
            return Promise.reject(err)
        }
    }
)

export default getAllTickets