import { createContext, useRef, useEffect } from "react";
export { TooltipContext, TooltipProvider };

const TooltipContext = createContext<{
    currentClickTooltip: React.MutableRefObject<HTMLElement | null>;
    currentClickTipElement: React.MutableRefObject<HTMLElement | null>;
    currentHoverToolTip: React.MutableRefObject<HTMLElement | null>;
    currentHoverTipElement: React.MutableRefObject<HTMLElement | null>;
}>(undefined!);

const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const currentClickTooltip = useRef<HTMLElement | null>(null);
    const currentClickTipElement = useRef<HTMLElement | null>(null);
    const currentHoverToolTip = useRef<HTMLElement | null>(null);
    const currentHoverTipElement = useRef<HTMLElement | null>(null);

    const handleClick = (event: MouseEvent) => {
        if (currentClickTooltip.current && !currentClickTooltip.current.contains(event.target as HTMLElement)
            && !currentClickTipElement!.current!.contains(event.target as HTMLElement)) {
            currentClickTooltip.current.remove();
            currentClickTooltip.current = null;
            currentClickTipElement.current = null;
        }
    };

    useEffect(() => {
        // 点击提示框以外的地方时隐藏提示框
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <TooltipContext.Provider
            value={{
                currentClickTooltip,
                currentClickTipElement,
                currentHoverToolTip,
                currentHoverTipElement,
            }}
        >
            {children}
        </TooltipContext.Provider>
    );
}