import "./App.css";
import { useState } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

function App() {
    // board 6x5 (5 columns, 6 rows)
    const [board, setboard] = useState<string[]>([
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
    ]);

    return (
        <div className="App h-[100vh] pt-10 bg-blue-900">
            <div className="flex flex-1 flex-col items-center">
                <h1 className="font-medium text-[30px] text-blue-400">Wordle</h1>
            </div>
            <div className="flex flex-1 flex-col items-center mt-10">
                <Board board={board} />
                <Keyboard />
            </div>
        </div>
    );
}

export default App;
