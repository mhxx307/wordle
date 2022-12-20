import Keys from "./Keys";

const Keyboard: React.FC = () => {
    const keywordsRows: string[] = [
        "q w e r t y u i o p",
        "a s d f g h j k l",
        "z x c v b n m",
    ];

    return (
        <div className="mt-5">
            {keywordsRows.map((keywordsRow, index) => {
                return (
                    <div key={index} className="flex justify-center">
                        {index === 2 && (
                            <span
                                key={index}
                                className="inline-flex justify-center items-center bg-[#999] text-white font-medium uppercase
                    rounded-sm m-1 w-[60px] h-[30px] cursor-pointer sm:hover:bg-[#b2b2b2] transition-all duration-200"
                            >
                                enter
                            </span>
                        )}
                        <Keys keywordsRow={keywordsRow} />
                    </div>
                );
            })}
        </div>
    );
};

export default Keyboard;
