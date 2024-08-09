export { TipLabelNumRangeDropdown };
export type { TipLabelNumRangeDropdownProps };

import React from 'react';
import { Dropdown, DropdownProps } from './dropdown';
import { TipLabel, TipLabelProps } from './tiplabel';
import { NumRange, NumRangeProps } from './numrange';

import '../../styles/generator-tool.css';

interface TipLabelNumRangeDropdownProps {
    tipLabelProps: TipLabelProps;
    numRangeProps: NumRangeProps;
    dropdownProps: DropdownProps;
}

const TipLabelNumRangeDropdown: React.FC<TipLabelNumRangeDropdownProps> = ({
    tipLabelProps,
    numRangeProps,
    dropdownProps }: TipLabelNumRangeDropdownProps) => {

    return (
        <div className="option-unit-medium">
            <TipLabel {...tipLabelProps} />
            <NumRange {...numRangeProps} />
            <Dropdown {...dropdownProps} />
        </div>
    );
};