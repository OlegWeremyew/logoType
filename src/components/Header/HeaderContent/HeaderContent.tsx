import React, {FC} from 'react';
import logo from "../../../assets/img/logo.png";
import styles from './HeaderContent.module.css'

export const HeaderContent:FC = () => {
    return (
        <div className={styles.header__content}>
            <div className="container">
                <div className={styles.header__content_inner}>
                    <div className={styles.header__logo}>
                        <a href="#">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                    <nav className={styles.menu}>
                        <ul>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">О компании</a></li>
                            <li><a href="#">Услуги</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};
