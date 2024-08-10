export { TipLabelCheckbox };
export type { TipLabelCheckboxProps };
import React from "react";
import { TipLabel, TipLabelProps } from "./tiplabel";

interface TipLabelCheckboxProps {
    tipLabelProps: TipLabelProps;
    checkboxId: string;
    defaultChecked?: boolean;
}

const TipLabelCheckbox: React.FC<TipLabelCheckboxProps> = ({ tipLabelProps, checkboxId, defaultChecked = true }) => {
    return (
        <div className="option-unit-small">
            <TipLabel {...tipLabelProps} />
            <input type="checkbox" id={checkboxId} defaultChecked={defaultChecked} />
        </div>
    )
}