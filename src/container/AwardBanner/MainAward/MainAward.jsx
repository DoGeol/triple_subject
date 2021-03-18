import React from 'react';
import MainAwardItem from '@/components/MainAwardItem/MainAwardItem';
import TripleLogo from '@/assets/images/triple@2x.png';
import config from '@/commons/config';
import styles from './MainAward.module.scss';

function MainAward() {
  const initialState = {
    img: {
      src: TripleLogo,
      alt: 'triple logo image',
    },
    text: '2019년 2월 기준',
  };
  const combineClassName = [styles.main_award__container];
  if (config.mainAward.isFade) {
    combineClassName.push(styles.fade_base);
    combineClassName.push(styles.fade_active);
  }
  return (
    <div className={combineClassName.join(' ')}>
      <MainAwardItem data={initialState} />
    </div>
  );
}

export default MainAward;
