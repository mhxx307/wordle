interface SquareProps {
    boardValue: string;
    position: number;
}

const Square: React.FC<SquareProps> = ({ boardValue, position }) => {
    return (
        <div
            className="flex justify-center items-center
        rounded-sm border-[1px] border-[cyan] cursor-pointer"
        ></div>
    );
};

export default Square;
