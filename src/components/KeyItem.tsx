import { useDispatch, useSelector } from "react-redux";
import {
    decreasePosition,
    increasePosition,
    increaseRow,
    setBoard,
} from "../redux/boardSlice";
import { rootState } from "./interface";

interface KeyProps {
    keyword: string;
    width?: string;
    height?: string;
}

const KeyItem: React.FC<KeyProps> = ({ keyword, width, height }) => {
    const board = useSelector((state: rootState) => state.board.board);
    const position = useSelector((state: rootState) => state.board.position);
    const row = useSelector((state: rootState) => state.board.row);
    const currentRow = Math.floor(position / 5);
    const dispatch = useDispatch();

    const handleClickKey = () => {
        if (keyword.toLowerCase() === "back") {
            const rowBefore = Math.floor((position - 1) / 5);
            // chỉ được back trong cùng 1 hàng (row === rowBefore) - hàng hiện tại là row , hàng trước là rowBefore
            if (rowBefore < row) return;
            const newBoard = [...board];
            newBoard[position - 1] = "";
            dispatch(decreasePosition());
            dispatch(setBoard(newBoard));
        } else if (keyword.toLowerCase() === "enter") {
            const isRowFinal: Boolean = position % 5 === 0 && position !== 0;
            isRowFinal && dispatch(increaseRow());
        } else if (position >= 30) {
            return; // đặc điều kiện ở đây để không bị dừng khi đến vị trí cuối cùng do lúc nào cũng vào điều kiện này
        } else if (currentRow > row) {
            return; // điều kiện để dừng khi đến vị trí cuối cùng của hàng, đặt ở đây vì như trên
        } else {
            const newBoard = [...board];
            newBoard[position] = keyword;
            dispatch(setBoard(newBoard));
            dispatch(increasePosition());
        }
    };

    return (
        <span
            className={`${width} ${height} inline-flex justify-center items-center
            bg-[#999] text-white font-medium uppercase rounded-sm m-1
            cursor-pointer sm:hover:bg-[#b2b2b2] transition-all duration-200 select-none`}
            onClick={handleClickKey}
        >
            {keyword}
        </span>
    );
};

export default KeyItem;
