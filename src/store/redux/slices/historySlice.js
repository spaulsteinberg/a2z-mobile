import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

const historySlice = createSlice({
    name: 'historySlice',
    initialState,
    reducers: {
        setHistory: (state, { payload }) => {
            state.data = payload;
        }
    }
})

export const { setHistory } = historySlice.actions
export default historySlice.reducer