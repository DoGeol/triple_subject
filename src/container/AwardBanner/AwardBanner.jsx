import React from 'react';
import styles from './AwardBanner.module.scss';
import MainAward from './MainAward/MainAward';
import TextInfo from './TextInfo/TextInfo';
import AwardInfo from './AwardInfo/AwardInfo';

function AwardBanner() {
  return (
    <section className={styles.container__wrapper}>
      <div className={styles.banner__container}>
        <MainAward />
        <div className={styles.info_detail__container}>
          <TextInfo />
          <AwardInfo />
        </div>
      </div>
    </section>
  );
}

export default AwardBanner;
