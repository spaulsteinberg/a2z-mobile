import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTickets } from "../../../firebase/api";


const getAllTickets = createAsyncThunk(
    'ticket/getTickets',
    async (token) => {
        try {
            const ticketResponse = await getTickets(token)
            console.log(ticketResponse.data)
            return ticketResponse.data.tickets;
        } catch (err) {
            console.log(err)
            return "Something went wrong."
        }
    }
)

export default getAllTickets