export { TipLabelNumRange };
export type { TipLabelNumRangeProps };
import React from "react";
import { TipLabel, TipLabelProps } from "./tiplabel";
import { NumRange, NumRangeProps } from "./numrange";

interface TipLabelNumRangeProps {
    tipLabelProps: TipLabelProps;
    numRangeProps: NumRangeProps;
}

const TipLabelNumRange: React.FC<TipLabelNumRangeProps> = ({
    tipLabelProps,
    numRangeProps
}) => {
    return (
        <div className="option-unit">
            <TipLabel {...tipLabelProps} />
            <NumRange {...numRangeProps} />
        </div>
    )
}