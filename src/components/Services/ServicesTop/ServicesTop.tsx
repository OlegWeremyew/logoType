import React, {FC} from 'react';
import styles from "./Services.module.css";

export const ServicesTop: FC = () => {
    return (
        <div className={styles.services__top}>
            <div className={styles.services__title_box}>
                <div className={styles.services__title}>
                    Наши Услуги
                </div>
                <div className={styles.services__text}>
                    Комплексный подход к вашему вопросу, своевременная правовую помощь, представление интересов
                    во всех судебных инстанциях.
                </div>
            </div>
            <div className={styles.services__btn}>
                <a href="#">
                    Показать все услуги
                </a>
            </div>
        </div>
    );
};
