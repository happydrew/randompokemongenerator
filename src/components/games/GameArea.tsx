import React, { useRef, useState } from 'react';
import { Star, Fullscreen, VolumeX, Volume2 } from 'lucide-react';
import { GameInfo } from '@lib/types';

const GameArea: React.FC<GameInfo> = ({
    name,
    iframe_url,
    votes,
    score,
}: GameInfo) => {

    const gameIframeRef = useRef<HTMLIFrameElement>(null);
    const [isMuted, setIsMuted] = useState(false);

    const handleFullscreen = async () => {
        if (gameIframeRef.current) {
            if (document.fullscreenElement) {
                await document.exitFullscreen();
            } else {
                // 检测是否是移动端，并尝试锁定屏幕方向
                // if (window.screen.orientation && /Mobi|Android|iPhone/i.test(navigator.userAgent)) {
                //     try {
                //         gameIframeRef.current.style.transform = 'rotate(90deg)';
                //         gameIframeRef.current.style.width = '100vh';
                //         gameIframeRef.current.style.height = '100vw';
                //         //gameIframeRef.current.style.overflow = 'hidden';
                //     } catch (error) {
                //         console.warn("屏幕方向锁定失败：", error);
                //     }
                // }
                await gameIframeRef.current.requestFullscreen();
            }
        }
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        // 在这里添加静音或取消静音的逻辑
        if (gameIframeRef.current) {
            if (!isMuted) {
                gameIframeRef.current.querySelectorAll('video, audio').forEach(el => {
                    (el as HTMLMediaElement).muted = true;
                });
            } else {
                gameIframeRef.current.querySelectorAll('video, audio').forEach(el => {
                    (el as HTMLMediaElement).muted = false;
                });
            }
        }
    };

    return (
        <div className="w-full">
            {/* Main Game Area */}
            <div className="flex-1">
                <div className="bg-zinc-700 rounded-lg px-2 pb-1">
                    {/* UpBar */}
                    <div className="flex items-center justify-between px-4 py-1 rounded-t-lg">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4].map((star) => (
                                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                            ))}
                            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" strokeWidth={1} />
                            <span className="ml-2 text-sm text-white font-catamaran">{votes} votes {score}/5</span>
                        </div>
                        <div className="flex gap-2">
                            {/* <button className="p-2" onClick={toggleMute}>
                                    {isMuted ? <VolumeX color='#eab308' strokeWidth={4} size={24} /> : <Volume2 color='#eab308' strokeWidth={4} size={24} />}
                                </button> */}
                            <button className="p-2" onClick={handleFullscreen}><Fullscreen color='#eab308' strokeWidth={4} size={24} /></button>
                        </div>
                    </div>

                    {/* Game Iframe */}
                    <div className="aspect-video rounded-lg relative">
                        <div id="iframe-container" className='w-full h-full flex justify-center items-center'>
                            <iframe
                                ref={gameIframeRef}
                                src={iframe_url}
                                className="w-full h-full overflow-hidden"
                                tabIndex={0}
                                allowFullScreen
                            />
                        </div>
                    </div>

                    {/* Game Controls */}
                    <div className="flex justify-between mt-2">
                        <div className="flex gap-2">
                        </div>
                        <div className="flex items-center gap-2">
                            <span className='text-sm text-gray-300 font-catamaran font-bold mx-4'>
                                {/* {gameControl ? <span className='text-yellow-500'>Tip:</span> : null} {gameControl} */}

                            </span>
                        </div>
                        <a href="http://gamehome.fun"
                            className="px-4 py-2 bg-yellow-500 text-white rounded">
                            MORE GAMES
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameArea;