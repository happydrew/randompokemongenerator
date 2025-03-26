
const GameCard = ({
    name,
    href,
    image
}: {
    name: string,
    href: string,
    image: string
}) => {
    return (
        <a href={href}
            style={{ backgroundImage: `url(${image})` }}
            className="relative w-[7rem] h-[7rem] bg-center bg-cover rounded-lg transform transition duration-300 hover:scale-110"
        >
            <div className="absolute flex justify-center items-center w-full bottom-0 bg-gradient-to-t rounded-lg to-transparent">
                <span
                    className="leading-4 w-full text-sm text-center mb-1 text-white font-cartoon font-bold break-words"
                    style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}
                >
                    {name}
                </span>
            </div>
        </a>
    )
}

export default GameCard;