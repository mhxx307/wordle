interface KeyProps {
    keyword: string;
    width?: string;
    height?: string;
}

const KeyItem: React.FC<KeyProps> = ({ keyword, width, height }) => {
    return (
        <span
            className={`${width} ${height} inline-flex justify-center items-center
            bg-[#999] text-white font-medium uppercase rounded-sm m-1
            cursor-pointer sm:hover:bg-[#b2b2b2] transition-all duration-200`}
        >
            {keyword}
        </span>
    );
};

export default KeyItem;
