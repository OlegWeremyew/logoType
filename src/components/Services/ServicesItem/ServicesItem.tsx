import React, {FC} from 'react';
import {Button} from "../../../common";
import {AboutItemType} from "./types";
import styles from './ServicesItem.module.css'

export const ServicesItem: FC<AboutItemType> = ({title, text, img}) => {
    return (
        <div className={styles.services__item}>
            <img src={img} alt="about logo"/>
            <h3 className={styles.services__item_title}>
                {title}
            </h3>
            <div className={styles.services__item_text}>
                {text}
            </div>
            <div className={styles.services__item_btn}>
                <a className={styles.services__item_link} href="#">Подробнее</a>
                <Button>Заказать</Button>
            </div>
        </div>
    );
};
