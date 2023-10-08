import React, {FC} from 'react';
import styles from './SliderList.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SliderItem} from "./SliderItem";

export const SliderList: FC = () => {

    function SampleNextArrow({onClick}: any) {
        return (
            <div className={styles.nextArrow} onClick={onClick}>
                <FontAwesomeIcon icon={faAngleLeft}/>
            </div>
        );
    }

    function SamplePrevArrow({onClick}: any) {
        return (
            <div className={styles.prevArrow} onClick={onClick}>
                <FontAwesomeIcon icon={faAngleRight}/>
            </div>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    return (
        <section className={styles.slider}>
            <div className="container">
                <Slider {...settings} className={styles.sliderList}>
                    <SliderItem
                        title="КОМПЛЕКСНОЕ ЗАКРЫТИЕ ПРЕДПРИЯТИЯ"
                        text="Полное прекращение существования юридического лица с сохранением легальности всей предыдущей деятельности."
                    />
                    <SliderItem
                        title="КОМПЛЕКСНОЕ ЗАКРЫТИЕ"
                        text="Прекращение существованиявсей предыдущей деятельности."
                    />
                    <SliderItem
                        title="ЗАКРЫТИЕ ПРЕДПРИЯТИЯ"
                        text="Юридического лица с сохранением легальности всей предыдущей деятельности."
                    />
                </Slider>
            </div>
        </section>
    );
};
