export { NumRange };
export type { NumRangeProps };
import React, { useEffect, useRef } from "react";

interface NumRangeProps {
    id: string;
    abbr: string;
    min: string;
    max: string;
    "min-default"?: string;
    "max-default"?: string;
    step?: string;
}

//@ts-expect-error
const handleNumRangeBlur = (event) => {
    const numberInput = event.currentTarget as HTMLInputElement
    const curValue = parseFloat(numberInput.value)
    if (Number.isNaN(curValue)) {
        numberInput.value = numberInput.getAttribute("value")!;
        return;
    }
    // 校验最小值
    const minValStr = numberInput.getAttribute("min")
    if (minValStr) {
        const minValue = parseFloat(minValStr);
        if (curValue < minValue) {
            numberInput.value = minValStr
        }
    }
    // 校验最大值
    const maxValStr = numberInput.getAttribute("max")
    if (maxValStr) {
        const maxValue = parseFloat(maxValStr);
        if (curValue > maxValue) {
            numberInput.value = maxValStr
        }
    }
}

const NumRange: React.FC<NumRangeProps> = ({
    id,
    abbr,
    min,
    max,
    "min-default": minDefault,
    "max-default": maxDefault,
    step }: NumRangeProps) => {
    const minInputRef = useRef<HTMLInputElement>(null);
    const maxInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (minInputRef.current) {
            minInputRef.current.setAttribute("range-min", "true");
        }
        if (maxInputRef.current) {
            maxInputRef.current.setAttribute("range-max", "true");
        }
    }, []);

    return (
        <div className="num_rangecontainer">
            <div className="num_range" id={id}>
                <input ref={minInputRef} type="number" range-min name={`${abbr}_min`} id={`${abbr}_min`} min={min} max={max}
                    defaultValue={minDefault ? minDefault : min} {...(step && { step: step })} />
                <label>-</label>
                <input ref={maxInputRef} type="number" range-max name={`${abbr}_max`} id={`${abbr}_max`} min={min} max={max}
                    defaultValue={maxDefault ? maxDefault : max} {...(step && { step: step })} />
            </div>
        </div>
    );
}

