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
    options: DropdownOption[];
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
    options }: DropdownProps) => {

    const dropdownElement = useRef<HTMLDivElement>(null);
    const buttonElement = useRef<HTMLButtonElement>(null);
    const popupElement = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     // 点击弹出框外隐藏下拉框
    //     const handleOutsideClick = (event: Event) => {
    //         if (event.target instanceof HTMLElement && event.target != buttonElement.current
    //             && !popupElement.current!.contains(event?.target)) {
    //             popupElement.current!.classList.remove("visible");
    //             document.removeEventListener("click", handleOutsideClick);
    //         }
    //     };
    //     // 添加按钮点击事件，点击按钮弹出下拉框
    //     buttonElement.current!.addEventListener("click", e => {
    //         const isPopupVisible = popupElement.current!.classList.toggle("visible");
    //         popupElement.current!.style.left = (dropdownElement.current!.clientWidth - popupElement.current!.clientWidth) / 2 + "px";
    //         if (isPopupVisible) {
    //             document.addEventListener("click", handleOutsideClick);
    //         }
    //     });

    //     // 添加选项值变化事件，更新下拉框标题
    //     dropdownElement.current!.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
    //         checkbox.addEventListener("change", () => updateDropdownTitle(dropdownElement.current!));
    //     });
    // }, []);

    return (
        <div className="dropdown" id={id} ref={dropdownElement}>
            <button
                ref={buttonElement}
                type="button"
                data-plural-name={dataPluralName}
                data-allow-showing-two={dataAllowShowingTwo}
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
                                    defaultChecked={optionValue.defaultChecked}
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