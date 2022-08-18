import { createSelector, current } from "@reduxjs/toolkit";

const earningSelector = createSelector(
    (state) => state.history,
    ({ data }) => {
        if (data && data.completed) return data.completed.reduce((acc, cur) => acc += parseFloat(cur.ticketTotal), 0)
        return 0
    }
)

const milesDrivenSelector = createSelector(
    state => state.history,
    ({ data }) => {
        if (data && data.completed) return data.completed.reduce((acc, cur) => acc += parseFloat(cur.ticketDistance), 0)
        return 0
    }
)

export { earningSelector, milesDrivenSelector }