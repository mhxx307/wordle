import { createSlice } from "@reduxjs/toolkit";
const board = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];

export const boardSlice = createSlice({
    name: "board",
    initialState: { board },
    reducers: {
        setBoard: (state, action) => {
            state.board = action.payload;
        },
    },
});

export const { setBoard } = boardSlice.actions;

export default boardSlice.reducer;
