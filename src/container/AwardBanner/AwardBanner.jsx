import React from 'react';
import styles from './AwardBanner.module.scss';
import AwardMain from './AwardMain/AwardMain';
import StatisticsInfo from './StatisticsInfo/StatisticsInfo';
import AwardDetail from './AwardDetail/AwardDetail';

function AwardBanner() {
  return (
    <section className={styles.container__wrapper}>
      <div className={styles.banner__container}>
        <AwardMain />
        <div className={styles.info_detail__container}>
          <StatisticsInfo />
          <AwardDetail />
        </div>
      </div>
    </section>
  );
}

export default AwardBanner;
