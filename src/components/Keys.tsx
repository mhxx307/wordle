import KeyItem from "./KeyItem";

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
                        <KeyItem key={index} keyword={keyword} />
                        {keyword === "m" && (
                            <KeyItem key={index} keyword="back" width={50} height={30} />
                        )}
                    </>
                );
            })}
        </>
    );
};

export default Keys;
