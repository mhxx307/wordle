interface KeyProps {
    keywordsRow: string;
}

const Keys: React.FC<KeyProps> = ({ keywordsRow }) => {
    const keywords: string[] = keywordsRow.split(" ");
    return (
        <>
            {keywords.map((keyword, index) => {
                return (
                    <>
                        <span
                            key={index}
                            className="inline-flex justify-center items-center bg-[#999] text-white font-medium uppercase
                            rounded-sm m-1 w-[30px] h-[30px] cursor-pointer sm:hover:bg-[#b2b2b2] transition-all duration-200"
                        >
                            {keyword}
                        </span>
                        {keyword === "m" && (
                            <span
                                key={index}
                                className="inline-flex justify-center items-center bg-[#999] text-white font-medium uppercase
                        rounded-sm m-1 w-[50px] h-[30px] cursor-pointer sm:hover:bg-[#b2b2b2] transition-all duration-200"
                            >
                                back
                            </span>
                        )}
                    </>
                );
            })}
        </>
    );
};

export default Keys;
