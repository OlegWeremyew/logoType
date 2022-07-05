import React, {FC} from 'react';
import {HeaderTop} from "./HeaderTop";
import {HeaderContent} from "./HeaderContent";
import styles from './Header.module.css'

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <HeaderTop/>
            <HeaderContent/>
        </header>
    );
};
