import Square from "./Square";

interface BoardProps {
    board: string[];
}

const Board: React.FC<BoardProps> = ({ board }) => {
    return (
        <div className="md:w-[300px] md:h-[300px] text-white grid grid-cols-5 gap-1 mb-1 bg-blue-900">
            {board.map((boardValue, index) => {
                return (
                    <>
                        <Square boardValue={boardValue} position={index} />
                    </>
                );
            })}
        </div>
    );
};

export default Board;
