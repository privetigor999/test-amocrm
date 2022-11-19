import React from "react";

import styles from "./styles.module.scss";

const Main = () => {
  const gifts = [
    {
      id: 1,
      title: "Виджеты",
      text: "30 готовых решений",
      smallScreen: "30 виджетов",
    },
    {
      id: 2,
      title: "Dashboard",
      text: "с показателями вашего бизнеса",
      smallScreen: "Dashboard",
    },
    {
      id: 3,
      title: "Skype Аудит",
      text: `отдела продажи CRM системы`,
      smallScreen: "Skype аудит",
    },
    {
      id: 4,
      title: "35 дней",
      text: "использования CRM",
      smallScreen: "Месяц crm",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.headInfoBlock}>
        <div>
          <p>Зарабатывайте</p>
          <p>больше</p>
          <span>с WELBEX</span>
        </div>
        <p className={styles.headerInfo}>
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div className={styles.giftsBlock}>
        <p className={styles.giftsHeader}>
          Вместе с <span>бесплатной</span>
          <span> консультацией</span> мы дарим:
        </p>
        <div className={styles.gifts}>
          {gifts.map((gift) => (
            <div className={styles.gift} key={gift.id}>
              <p className={styles.smallScreen}>
                <span>--</span>
                {gift.smallScreen}
              </p>
              <p className={styles.gift_title}>{gift.title}</p>
              <p className={styles.gift_text}>{gift.text}</p>
            </div>
          ))}
        </div>
        <button>Получить консультацию</button>
      </div>
    </div>
  );
};

export default Main;
