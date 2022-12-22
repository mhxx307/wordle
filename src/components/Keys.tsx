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
                    <div key={index}>
                        <KeyItem keyword={keyword} width="w-[30px]" height="h-[30px]" />
                        {keyword === "m" && (
                            <KeyItem
                                key={index}
                                keyword="back"
                                width="w-[50px]"
                                height="h-[30px]"
                            />
                        )}
                    </div>
                );
            })}
        </>
    );
};

export default Keys;
