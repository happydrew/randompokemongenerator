
export { TipLabelDropdown };
export type { TipLabelDropdownProps };

import React from 'react';
import { Dropdown, DropdownOption } from './dropdown';
import { TipLabel } from './tiplabel';

import '../../styles/generator-tool.css';

interface TipLabelDropdownProps {
    // 主要用于html元素的id属性
    id: string;
    // 选项标签的提示信息
    dataClickTip: string;
    // 选项标签的内容
    labelContent: string;
    // 选项的复数形式，选择多个时显示n {dataPluralName}
    dataPluralName: string;
    // 是否允许显示两个选项，超过两个时，显示选中的数量
    dataAllowShowingTwo: string;
    // 全选时显示的内容
    buttonDefaultShow: string;
    // 选项值数组
    options: DropdownOption[];
}

const TipLabelDropdown: React.FC<TipLabelDropdownProps> = ({
    id,
    dataClickTip,
    labelContent,
    dataPluralName,
    dataAllowShowingTwo,
    buttonDefaultShow,
    options: optionValues }: TipLabelDropdownProps) => {

    return (
        <div className="option-unit">
            <TipLabel
                forHtmlId={id}
                dataClickTip={dataClickTip}
                labelContent={labelContent} />
            <Dropdown
                id={id}
                dataPluralName={dataPluralName}
                dataAllowShowingTwo={dataAllowShowingTwo}
                buttonDefaultShow={buttonDefaultShow}
                options={optionValues} />
        </div>
    );
};