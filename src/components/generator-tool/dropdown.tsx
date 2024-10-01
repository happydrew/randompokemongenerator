export { Dropdown };
export type { DropdownOption, DropdownProps as DropdownProps };

import React, { useRef, useEffect } from 'react';
import '../../styles/generator-tool.css';

interface DropdownOption {
    value: string;
    label: string;
    labelTip?: string;
    // is this option value used to select all?
    dataSelectAll?: string;
    // short name for this option value
    dataShortName?: string;
    defaultChecked: boolean;
}

interface DropdownProps {
    // 主要用于html元素的id属性
    id: string;
    // 选项的复数形式，选择多个时显示n {dataPluralName}
    dataPluralName: string;
    // 是否允许显示两个选项，超过两个时，显示选中的数量
    dataAllowShowingTwo: string;
    // 全选时显示的内容
    buttonDefaultShow: string;
    // 选项值数组
    options: DropdownOption[],
    // 默认选中的值数组，这个选项会覆盖options里面的defaultChecked属性
    defaultSelected?: string[];
    fixedSelected?: string[];
    buttonTextClassName?: string;
}

/**
 * listenr for select all checkbox change event
 * @param event 
 * @returns 
 */
// @ts-expect-error
function selectAllCheckboxChangeListener(event) {
    if (!(event.target instanceof HTMLInputElement)) {
        return;
    }
    const selectAll = event.target.checked;
    const container = event.target.closest(".popup") as HTMLElement;
    container.querySelectorAll("input[type='checkbox']:not([data-select-all])")
        .forEach((checkbox: Element) => (checkbox as HTMLInputElement).checked = selectAll);
}

const Dropdown: React.FC<DropdownProps> = ({
    id,
    dataPluralName,
    dataAllowShowingTwo,
    buttonDefaultShow,
    options,
    defaultSelected,
    fixedSelected,
    buttonTextClassName }: DropdownProps) => {

    const dropdownElement = useRef<HTMLDivElement>(null);
    const buttonElement = useRef<HTMLButtonElement>(null);
    const popupElement = useRef<HTMLDivElement>(null);
    // 固定选中指定元素
    if (fixedSelected) {
        defaultSelected = fixedSelected;
    }

    useEffect(() => {
        if (fixedSelected) {
            const checkboxElements = Array.from(popupElement.current!.querySelectorAll("input[type='checkbox']:not([data-select-all])")).map(checkbox => checkbox as HTMLInputElement);
            checkboxElements.forEach((checkbox: HTMLInputElement) => {
                if (fixedSelected.includes(checkbox.value)) {
                    checkbox.checked = true;
                } else {
                    checkbox.checked = false;
                }
                Object.defineProperty(checkbox, "checked", {
                    set: (newVal: boolean) => { }
                });
                checkbox.disabled = true;
            });
        }
    }, []);

    return (
        <div className="dropdown" id={id} ref={dropdownElement}>
            <button
                ref={buttonElement}
                type="button"
                data-plural-name={dataPluralName}
                data-allow-showing-two={dataAllowShowingTwo}
                {...(buttonDefaultShow && { className: buttonTextClassName })}
            >
                {buttonDefaultShow}
            </button>
            <div className="popup" ref={popupElement}>
                <ul>
                    {options.map((optionValue) => (
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    name={id}
                                    value={optionValue.value}
                                    {...(optionValue.dataSelectAll && { "data-select-all": "true" })}
                                    {...(optionValue.dataShortName && { "data-short-name": optionValue.dataShortName })}
                                    defaultChecked={(defaultSelected != undefined && defaultSelected != null) ? defaultSelected.includes(optionValue.value) : optionValue.defaultChecked}
                                />
                                <span {...(optionValue.labelTip && { title: optionValue.labelTip })}>{optionValue.label}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

function updateDropdownTitle(dropdownContainer: HTMLElement) {
    const button = dropdownContainer.querySelector("button")!;
    const selectAllCheckbox: HTMLInputElement | null = dropdownContainer.querySelector("input[type='checkbox'][data-select-all='true']");
    const allCheckboxes: HTMLInputElement[] = Array.from(dropdownContainer.querySelectorAll("input[type='checkbox']:not([data-select-all])"));
    const selectedCheckboxes: HTMLInputElement[] = allCheckboxes.filter(checkbox => checkbox.checked && !checkbox.disabled);
    const allAreSelected = selectedCheckboxes.length == allCheckboxes.length;
    const allowNoSelection = !!button.dataset.allowNone;
    const pluralName = button.dataset.pluralName;

    // Update the "select all" checkbox if one exists.
    if (selectAllCheckbox) {
        selectAllCheckbox.checked = selectedCheckboxes.length == allCheckboxes.length;
        selectAllCheckbox.indeterminate = selectedCheckboxes.length > 0 && selectedCheckboxes.length < allCheckboxes.length;
    }

    // Update the text on the title button.
    let displayText;
    if (allowNoSelection && selectedCheckboxes.length == 0) {
        displayText = "No " + pluralName;
    } else if (allAreSelected || selectedCheckboxes.length == 0) {
        displayText = button.dataset.allName ?? ("All " + pluralName);
    } else if (selectedCheckboxes.length == 1) {
        displayText = getNameForCheckbox(selectedCheckboxes[0]);
    } else if (button.dataset.allowShowingTwo && selectedCheckboxes.length == 2) {
        displayText = getNameForCheckbox(selectedCheckboxes[0]) + ", " + getNameForCheckbox(selectedCheckboxes[1]);
    } else {
        const nameForCount = button.dataset.nameForCount ?? pluralName;
        displayText = selectedCheckboxes.length + " " + nameForCount;
    }
    button.innerText = displayText;
}

function getNameForCheckbox(checkbox: HTMLInputElement) {
    if (checkbox.dataset.shortName) {
        return checkbox.dataset.shortName;
    } else {
        return checkbox.parentElement!.innerText;
    }
}