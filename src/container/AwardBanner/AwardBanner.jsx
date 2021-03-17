import React from 'react';
import styles from './AwardBanner.module.scss';
import MainAward from './MainAward/MainAward';
import InfoDetail from './InfoDetail/InfoDetail';

function AwardBanner() {
  return (
    <section className={styles.container__wrapper}>
      <div className={styles.banner__container}>
        <MainAward />
        <InfoDetail />
      </div>
    </section>
  );
}

export default AwardBanner;
