import React from "react";
import styles from "./GeneratorButton.module.css";

interface GeneratorButtonProps {
    htmlId?: string;
    onClick?: (event: React.MouseEvent) => void;
}

const GeneratorButton: React.FC<GeneratorButtonProps> = ({
    htmlId,
    onClick
}: GeneratorButtonProps) => {
    return (
        <button {...(htmlId && { id: htmlId })} {...(onClick && { onClick: onClick })} className={styles.generateButton} >
            Generate
        </button>
    )
}

export { GeneratorButton };