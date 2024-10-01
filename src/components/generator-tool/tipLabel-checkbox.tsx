export { TipLabelCheckbox };
export type { TipLabelCheckboxProps };
import React, { useEffect } from "react";
import { TipLabel, TipLabelProps } from "./tiplabel";

interface TipLabelCheckboxProps {
    tipLabelProps: TipLabelProps;
    checkboxId: string;
    defaultChecked?: boolean;
    fixedChecked?: boolean;
}

const TipLabelCheckbox: React.FC<TipLabelCheckboxProps> = ({ tipLabelProps, checkboxId, defaultChecked, fixedChecked }) => {
    const checkboxRef = React.useRef<HTMLInputElement>(null);
    if (fixedChecked != null && fixedChecked != undefined) {
        defaultChecked = fixedChecked;
        useEffect(() => {
            checkboxRef.current!.checked = fixedChecked;
            Object.defineProperty(checkboxRef.current, "checked", {
                set: (newVal: boolean) => { }
            })
        });
    }

    return (
        <div className="option-unit-small">
            <TipLabel {...tipLabelProps} />
            <input
                ref={checkboxRef}
                type="checkbox"
                id={checkboxId}
                defaultChecked={defaultChecked == null || defaultChecked == undefined || defaultChecked}
                {...(fixedChecked != null && fixedChecked != undefined && { disabled: true })}
            />
        </div>
    )
}