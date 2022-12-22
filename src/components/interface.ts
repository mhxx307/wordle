interface boardState {
    board: string[];
    position: number;
    row: number;
    key: string;
    correctWord: string;
}

export interface rootState {
    board: boardState;
}
