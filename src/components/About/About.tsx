import React, {FC} from 'react';
import styles from './About.module.css'
import {Button} from "../../common";

export const About: FC = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className="about__title">
          О компании
        </div>
        <div className="about__text">
          Компания специализируется на оказании услуг в сфере корпоративного права, налогового консалтинга,
          представительства в судах, ликвидации и банкротства предприятий. На сегодняшний день, коллектив
          компании объединяет
          высокопрофессиональных экспертов имеющих
          специализации в отдельных областях права.
        </div>
        <Button classStyle='default'>Узнать больше</Button>
      </div>
    </section>
  );
};
