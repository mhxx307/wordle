import { useSelector } from "react-redux/es/exports";
import "./App.css";
import Board from "./components/Board";
import { rootState } from "./components/interface";
import Keyboard from "./components/Keyboard";

function App() {
    const board = useSelector((state: rootState) => state.board.board);
    console.log(board);
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
