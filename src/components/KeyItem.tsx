interface KeyProps {
    keyword: string;
    width?: number;
    height?: number;
}

const KeyItem: React.FC<KeyProps> = ({ keyword, width = 30, height = 30 }) => {
    return (
        <span
            className={`inline-flex justify-center items-center bg-[#999] text-white font-medium uppercase
    rounded-sm m-1 w-[${width}px] h-[${height}px] cursor-pointer sm:hover:bg-[#b2b2b2] transition-all duration-200`}
        >
            {keyword}
        </span>
    );
};

export default KeyItem;
