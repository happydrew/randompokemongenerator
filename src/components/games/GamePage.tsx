import { GameInfo } from "@lib/types";
import GameArea from "./GameArea";
import React from "react";
import GameCard from "./GameCard";


interface GamePageProps {
    main_game: GameInfo;
    relate_games: GameInfo[];
    // markdown格式的文章
    Article: React.FC;
}

const GamePage = ({
    main_game,
    relate_games,
    Article
}: GamePageProps) => {
    return (
        <div className=" bg-zinc-900 p-2">
            <div className="w-full">

                {/* <div id='top-ads' className="flex justify-center items-center mb-6 w-full h-20 border border-zinc-700 relative">
                <span className='absolute top-0 left-0 from-zinc-700 to-zinc-800 opacity-50 text-[10px]'>ads</span>
            </div> */}

                <h1 className='text-3xl font-cartoon text-yellow-500 text-center font-bold mb-2'>{main_game.name}</h1>

                <div id="game-region" className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 mb-14">
                    <div id="left-side" className="order-2 lg:order-1 lg:h-full lg:flex-col flex flex-row flex-wrap justify-center items-center gap-4">
                        {relate_games && relate_games.slice(0, 5).map(game => (
                            <GameCard name={game.name} href={game.href} image={game.image} />
                        ))}
                    </div>
                    <div className="order-1 lg:order-2 flex-1 w-full lg:max-w-[60rem]">
                        <GameArea name={main_game.name}
                            iframe_url={main_game.iframe_url}
                            votes={main_game.votes}
                            score={main_game.score}
                        />
                    </div>

                    <div id="left-side" className="order-3 lg:h-full lg:flex-col flex flex-wrap justify-center items-center gap-4">
                        {relate_games && relate_games.length > 5 && relate_games.slice(5, 10).map(game => (
                            <GameCard name={game.name} href={game.href} image={game.image} />
                        ))}
                    </div>
                </div>

                <div id="article_and_recommand" className="w-full flex flex-col lg:flex-row justify-center items-start gap-10">
                    <div id="article" className="w-full lg:w-[48%] flex flex-col justify-center items-center gap-4 border-4 border-green-900 rounded-2xl p-2">
                        <h2 className="font-cartoon text-yellow-500 font-bold text-2xl">About {main_game.name}</h2>
                        <Article />
                    </div>
                    <div id="recommand" className="w-full lg:w-[48%] flex flex-col py-2 justify-center items-center gap-4 border-4 border-green-900 rounded-2xl">
                        <h2 className="font-cartoon text-yellow-500 font-bold text-2xl">Recommended Games</h2>
                        <div className="w-full flex flex-wrap justify-center items-center gap-4 px-0">
                            {relate_games && relate_games.length > 10 && relate_games.slice(10).map(game => (
                                <GameCard name={game.name} href={game.href} image={game.image} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default GamePage;