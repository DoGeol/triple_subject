import React from 'react';
import styles from './AwardInfoItem.module.scss';

function AwardInfoItem() {
  return (
    <>
      <div className={styles.award_info__item}>
        <img src="/assets/images/play-store@2x.png" alt="playstore" />
        <p>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </p>
      </div>
      <div className={styles.award_info__item}>
        <img src="/assets/images/app-store@2x.png" alt="appstore" />
        <p>
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </p>
      </div>
    </>
  );
}

export default AwardInfoItem;
