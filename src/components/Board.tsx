import { memo } from "react";
import Square from "./Square";

interface BoardProps {
    board: string[];
}

const Board: React.FC<BoardProps> = ({ board }) => {
    return (
        <div
            className="w-[300px] h-[300px] text-white grid grid-cols-5 gap-1 mb-[100px]
        bg-blue-900 text-[30px]"
        >
            {board.map((boardValue, index) => {
                return <Square boardValue={boardValue} position={index} key={index} />;
            })}
        </div>
    );
};

export default memo(Board);
