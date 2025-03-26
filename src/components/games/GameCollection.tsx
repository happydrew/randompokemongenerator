import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface GameCollectionProps {
    title: string;
    games: { title: string, href: string, image: string }[];
}

const GameCollection: React.FC<GameCollectionProps> = ({
    title,
    games
}: GameCollectionProps) => {

    return (
        <div className=" bg-zinc-800 p-4">
            <div className="max-w-6xl mx-auto">

                <h1 className='text-2xl font-catamaran text-yellow-500 mb-2 text-center font-bold'>{title}</h1>

                {/* Main Game Area */}
                <div className="flex-1">
                    <div className="flex justify-around items-center bg-zinc-700 rounded-lg p-2">
                        {/* recommend */}
                        <div className="w-24">
                            {games.map((game) => (
                                <a
                                    href={game.href}
                                    style={{ backgroundImage: game.image }}
                                    className={`block bg-white rounded-lg mb-2 cursor-pointer hover:shadow-lg transition-shadow relative w-24 h-24`}
                                >
                                    <p className="text-xs text-center font-medium absolute bottom-0 left-0 w-full h-8">{game.title}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default GameCollection;