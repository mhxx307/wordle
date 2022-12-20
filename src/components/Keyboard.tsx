import KeyItem from "./KeyItem";
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
                            <KeyItem keyword="enter" width="w-[70px]" height="h-[30px]" />
                        )}
                        <Keys keywordsRow={keywordsRow} />
                    </div>
                );
            })}
        </div>
    );
};

export default Keyboard;
