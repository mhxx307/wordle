import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { rootState } from "./interface";
import "./square.css";

interface SquareProps {
    boardValue: string;
    position: number;
}

const Square: React.FC<SquareProps> = ({ boardValue, position }) => {
    // redux state
    const positionRedux = useSelector((state: rootState) => state.board.position);
    const rowRedux = useSelector((state: rootState) => state.board.row);
    const correctWord = useSelector((state: rootState) => state.board.correctWord);
    // console.log(correctWord);

    // local state
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [isWrong, setIsWrong] = useState<boolean>(false);
    const [isAlmostCorrect, setIsAlmostCorrect] = useState<boolean>(false);

    // reset position index to 0 when row change
    const currentPosition = (positionRedux - 1) % 5;

    useEffect(() => {
        if (correctWord[currentPosition] === boardValue) setIsCorrect(true);
        else if (!isCorrect && boardValue !== "" && correctWord.includes(boardValue))
            setIsAlmostCorrect(true);
        else if (
            !isCorrect &&
            !isAlmostCorrect &&
            boardValue !== "" &&
            !correctWord.includes(boardValue)
        )
            setIsWrong(true);

        return () => {
            setIsCorrect(false);
            setIsWrong(false);
            setIsAlmostCorrect(false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [boardValue]);

    const variants = {
        filled: () => ({
            scale: [1.2, 1],
            transition: {
                duration: 0.2,
            },
        }),
        unfilled: () => ({
            scale: [1.2, 1],
            transition: {
                duration: 0.2,
            },
        }),
    };

    // check if the square is correct, almost correct or wrong when clicked
    const status: any =
        Math.floor(position / 5) < rowRedux &&
        (isCorrect ? "correct" : isAlmostCorrect ? "almost" : isWrong ? "wrong" : "");

    return (
        <motion.div
            animate={boardValue ? "filled" : "unfilled"}
            variants={variants}
            className={`h-[60px] flex justify-center items-center
        rounded-sm border-[1px] border-[cyan] cursor-pointer ${
            (status === "correct" && "bg-[#10A19D] square") ||
            (status === "wrong" && "bg-[red] square") ||
            (status === "almost" && "bg-[yellow] square")
        }`}
        >
            {boardValue.toUpperCase()}
        </motion.div>
    );
};

export default Square;
