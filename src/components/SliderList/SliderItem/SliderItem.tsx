import React, {FC} from 'react';
import styles from "./SliderItem.module.css";
import {Button} from "../../../common";
import {SliderItemType} from "./types";

export const SliderItem:FC<SliderItemType> = ({title, text}) => {
    return (
        <div className={styles.slider__item}>
            <div className={styles.slider__title}>
                {title}
            </div>
            <div className={styles.slider__text}>
                {text}
            </div>
            <Button>Оставить заявку</Button>
        </div>
    );
};
