import React, {FC} from 'react';
import styles from './Button.module.css'

export const Button:FC<any> = ({children}) => {
    return (
        <button type='button' className={styles.default__btn}>
            {children}
        </button>
    );
};
