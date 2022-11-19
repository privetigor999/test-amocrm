import React from "react";

import styles from "./styles.module.scss";

const Balls = () => {
  return (
    <>
      <div className={styles.purpleBall} />
      <div className={styles.purpleLight} />
      <div className={styles.redBall} />
      <div className={styles.smallRedBall} />
      <div className={styles.redLight} />
    </>
  );
};

export default Balls;
