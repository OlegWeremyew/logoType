import React, {FC} from 'react';
import styles from './HeaderTop.module.css'
import {faPhone, faEnvelope, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const HeaderTop: FC = () => {
    return (
        <div className={styles.header__top}>
            <div className="container">
                <div className={styles.header__contacts}>
                    <a className={styles.header__phone} href="tel:380963092145"><FontAwesomeIcon icon={faPhone}/> <span
                        className={styles.header__text}>+38 (096) 309 21 45</span></a>
                    <a className={styles.header__email} href="mailto:layout585@gmail.com"><FontAwesomeIcon icon={faEnvelope}/>
                        <span className={styles.header__text}>layout585@gmail.com</span></a>
                    <a className={styles.header__btn} href="#"><FontAwesomeIcon icon={faBriefcase}/> <span
                        className={styles.header__text}>Бесплатная консультация</span></a>
                </div>
            </div>
        </div>
    );
};
