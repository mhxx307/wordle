import { createSlice } from "@reduxjs/toolkit";
import wordList from "../word.json";

let randomNumber = Math.floor(Math.random() * wordList.words.length);

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
    initialState: {
        board: board,
        position: 0,
        row: 0,
        key: "",
        correctWord: wordList.words[randomNumber],
    },
    reducers: {
        setBoard: (state, action) => {
            state.board = action.payload;
        },

        increasePosition: (state) => {
            ++state.position;
        },

        decreasePosition: (state) => {
            // chỉ giảm những vị trí lớn hơn 0, không cho position nhỏ hơn 0
            if (state.position > 0) --state.position;
        },

        increaseRow: (state) => {
            ++state.row;
        },

        setKey: (state, action) => {
            state.key = action.payload;
        },
    },
});

export const { setBoard, increasePosition, decreasePosition, increaseRow, setKey } =
    boardSlice.actions;

export default boardSlice.reducer;
