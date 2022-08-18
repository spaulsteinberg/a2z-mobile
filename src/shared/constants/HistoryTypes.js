const HISTORY_TYPE = Object.freeze({
    OPEN: "OPEN",
    COMPLETED: "COMPLETED",
    INPROGRESS: "INPROGRESS", // usually IN_PROGRESS, but for history its easier to read
    REJECTED: "REJECTED",
    CANCELLED: "CANCELLED"
})

export default HISTORY_TYPE