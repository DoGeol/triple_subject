import React from 'react';
import styles from './index.module.scss';
import MainAward from './MainAward';
import InfoDetail from './InfoDetail';

function AwardBanner() {
  const data = {
    main: {
      img: {
        src: '/assets/images/triple@2x.png',
        alt: 'triple logo image',
      },
      text: '2021년 1월 기준',
    },
    textInfo: [
      '630{/}만 명{/}의 여행자',
      '90{/}만 개{/}의 여행 리뷰',
      '360{/}만 개{/}의 여행 일정',
    ],
    awardInfo: [
      {
        img: {
          src: '/assets/images/play-store@2x.png',
          alt: 'play store logo image',
        },
        title: ['2018 구글 플레이스토어', '올해의 앱 최우수상 수상'],
      },
      {
        img: {
          src: '/assets/images/app-store@2x.png',
          alt: 'app store logo image',
        },
        title: ['2018 애플 앱스토어', '오늘의 여행앱 선'],
      },
    ],
  };

  return (
    <section className={styles.container__wrapper}>
      <div className={styles.banner__container}>
        <MainAward {...data.main} />
        <InfoDetail />
      </div>
    </section>
  );
}

export default AwardBanner;
