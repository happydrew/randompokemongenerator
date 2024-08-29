export { TipLabel };
export type { TipLabelProps };

import React, { useRef, RefObject } from 'react';
import '../../styles/generator-tool.css';
import { processClickTipEvent } from '@/code/generator-tool/random';

interface TipLabelProps {
    // 主要用于html元素的id属性
    forHtmlId?: string;
    // 选项标签的提示信息
    dataClickTip: string;
    // 选项标签的内容
    labelContent: string;
    className?: string;
}

/**
* 点击提示tip的事件监听函数
* @param clickElement 
* @param event 
* @returns 
*/
// function processClickTipEvent(event, context: {
//     currentClickTooltip: React.MutableRefObject<HTMLElement | null>,
//     currentClickTipElement: React.MutableRefObject<HTMLElement | null>,
//     currentHoverToolTip: React.MutableRefObject<HTMLElement | null>,
//     currentHoverTipElement: React.MutableRefObject<HTMLElement | null>
// }): void {
//     const { currentClickTooltip, currentClickTipElement, currentHoverToolTip, currentHoverTipElement } = context;
//     const clickElement: HTMLElement = event.currentTarget as HTMLElement;
//     const content = clickElement.getAttribute('data-click-tip');
//     // 如果该元素的悬浮提示框正在显示，则隐藏它
//     if (currentHoverToolTip.current && currentHoverTipElement.current == event.currentTarget) {
//         currentHoverToolTip.current.remove();
//         currentHoverToolTip.current = null;
//         currentHoverTipElement.current = null;
//     }
//     // 如果该元素的点击提示框正在显示，则这次事件负责隐藏它
//     if (currentClickTipElement.current && currentClickTipElement.current == event.currentTarget) {
//         currentClickTooltip!.current!.remove();
//         currentClickTooltip.current = null;
//         currentClickTipElement.current = null;
//         return;
//     }
//     // 如果已经有一个提示框在显示，先隐藏它
//     if (currentClickTooltip.current) {
//         currentClickTooltip.current.remove();
//         currentClickTooltip.current = null;
//     }

//     // 创建提示框
//     const tooltip = document.createElement('div');
//     tooltip.className = 'click-tip-tooltip';
//     if (clickElement.hasAttribute("tool-tip-style")) {
//         tooltip.style.cssText = clickElement.getAttribute("tool-tip-style")!;
//     }
//     tooltip.textContent = content || '';
//     tooltip.style.maxWidth = window.innerWidth + "px";
//     tooltip.style.display = 'block';
//     tooltip.style.visibility = 'invisible';
//     document.body.appendChild(tooltip);

//     // 设置提示框位置
//     const clickRect = clickElement.getBoundingClientRect();

//     // 首先决定提示框的横向位置，即左边缘的位置
//     const tooltipLeft = Math.min(clickRect.right - 0.5 * clickElement.offsetWidth, window.innerWidth - tooltip.offsetWidth) + window.scrollX;
//     tooltip.style.left = tooltipLeft + "px";
//     // 决定提示框的纵向位置，即上边缘的位置
//     // 主元素上下两边，哪边空间更大，就往哪边放
//     const clickUpDistance = clickRect.top;
//     const clickDownDistance = window.innerHeight - clickRect.bottom;
//     if (clickDownDistance > clickUpDistance) {
//         // 下边空间大，往下边放
//         const tooltipTop = Math.min(clickRect.bottom, window.innerHeight - tooltip.offsetHeight) + window.scrollY;
//         tooltip.style.top = tooltipTop + "px";
//     } else {
//         // 上边空间大，往上边放
//         const tooltipTop = Math.max(clickRect.top, tooltip.offsetHeight) + window.scrollY - tooltip.offsetHeight;
//         tooltip.style.top = tooltipTop + "px";
//     }
//     // 显示提示框
//     tooltip.style.visibility = "visible";
//     currentClickTooltip.current = tooltip;
//     currentClickTipElement.current = clickElement;
// }

const TipLabel: React.FC<TipLabelProps> = ({
    forHtmlId,
    dataClickTip,
    labelContent,
    className }: TipLabelProps) => {

    const labelElement: RefObject<HTMLLabelElement> = useRef<HTMLLabelElement>(null);
    // @ts-expect-error
    const handleTipClick = (event) => {
        processClickTipEvent(labelElement.current!, event);
    }

    return (
        <label
            // ref={labelElement}
            {...(forHtmlId && { htmlFor: forHtmlId })}
            className={`dotted-underline click-tip${className ? ` ${className}` : ''}`}
            data-click-tip={dataClickTip}
        // onClick={handleTipClick}
        >
            {labelContent}:
        </label>
    );
};