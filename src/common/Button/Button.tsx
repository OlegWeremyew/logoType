import React, {FC} from 'react';
import styles from './Button.module.css'
import {ButtonType} from "./types";

export const Button: FC<ButtonType> = ({children, classStyle}) => {
    const btnStyle = classStyle === 'default' ? styles.default__btn : `${styles.default__btn} ${styles.black}`;

    return (
        <button type='button' className={btnStyle}>
            {children}
        </button>
    );
};
