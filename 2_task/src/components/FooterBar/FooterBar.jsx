import React from "react";

import styles from "./styles.module.scss";
import { ReactComponent as TelegramSvg } from "./../../assets/icon/telegram.svg";
import { ReactComponent as ViberSvg } from "./../../assets/icon/viber.svg";
import { ReactComponent as WhatsAppSvg } from "./../../assets/icon/whatsapp.svg";

const FooterBar = () => {
  return (
    <>
      <div className={styles.footerBar}>
        <div className={styles.menu}>
          <p>О компании</p>
          <ul>
            <li>Партнёрская программа</li>
            <li>Вакансии</li>
          </ul>
        </div>
        <div className={styles.menu}>
          <p>Меню</p>
          <div>
            <ul>
              <li>Расчёт стоимости</li>
              <li>Вакансии</li>
              <li>Виджеты</li>
              <li>Интеграции</li>
              <li>Наши клиенты</li>
            </ul>
            <ul>
              <li>Кейсы</li>
              <li>Благодарственные письма</li>
              <li>Сертификаты</li>
              <li>Блог на Youtube</li>
              <li>Вопрос / Ответ</li>
            </ul>
          </div>
        </div>
        <div className={styles.contacts}>
          <p>Контакты</p>

          <a href="tel:+75555555555">+7 555 555-55-55</a>
          <div className={styles.icons}>
            <TelegramSvg className={styles.icon} />
            <ViberSvg className={styles.icon} />
            <WhatsAppSvg className={styles.icon} />
          </div>
          <p>Москва, Путевой проезд 3с1, к 902</p>
        </div>
      </div>
      <div className={styles.footer}>
        <p>©WELBEX 2022. Все права защищены.</p>
        <p>Политика конфиденциальности</p>
      </div>
    </>
  );
};

export default FooterBar;
