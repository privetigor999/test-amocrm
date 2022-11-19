import React from "react";

import styles from "./styles.module.scss";
import { ReactComponent as LogoImage } from "./../../assets/logo/logo-image.svg";
import { ReactComponent as LogoName } from "./../../assets/logo/logo-name.svg";
import { ReactComponent as TelegramSvg } from "./../../assets/icon/telegram.svg";
import { ReactComponent as ViberSvg } from "./../../assets/icon/viber.svg";
import { ReactComponent as WhatsAppSvg } from "./../../assets/icon/whatsapp.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <div className={styles.navLogo}>
          <div className={styles.logos}>
            <LogoImage />
            <LogoName />
          </div>
          <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </div>

        <ul>
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Кейсы</li>
          <li>Сертификаты</li>
        </ul>
      </nav>
      <div className={styles.contactBar}>
        <a href="tel:+75555555555">+7 555 555-55-55</a>
        <div className={styles.icons}>
          <TelegramSvg className={styles.icon} />
          <ViberSvg className={styles.icon} />
          <WhatsAppSvg className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
