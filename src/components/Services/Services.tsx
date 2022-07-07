import React, {FC} from 'react';
import styles from './Services.module.css'
import {ServicesItem} from "./ServicesItem";
import img1 from 'assets/img/about_1.png'
import img2 from 'assets/img/about_2.png'
import img3 from 'assets/img/about_3.png'
import {ServicesTop} from "./ServicesTop";

export const Services: FC = () => {
    return (
        <section className={styles.services}>
            <div className='container'>
                <ServicesTop/>
                <div className={styles.services__items}>
                    <ServicesItem
                        title="Банкротство и ликвидация"
                        text="Полное прекращение существования юридического лица с сохранением легальности всей предыдущей
                    деятельности"
                        img={img1}
                    />
                    <ServicesItem
                        title="Адвокатское сопровождение"
                        text="Мы гарантируем полное профессиональное обслуживание клиентов в заявленных сферах деятельности и соблюдение
                    конфиденциальности."
                        img={img2}
                    />
                    <ServicesItem
                        title="Налоговый аудит"
                        text="Налоговый аудит проводят перед проведением налоговых проверок; при оценке возможных налоговых рисков; при
                     оптимизации налогообложения."
                        img={img3}
                    />
                </div>
            </div>
        </section>
    );
};
