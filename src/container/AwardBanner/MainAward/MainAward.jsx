import React, { useState } from 'react';
import styles from './MainAward.module.scss';
import MainAwardItem from '@/components/MainAwardItem/MainAwardItem';
import TripleLogo from '@/assets/images/triple@2x.png';

function MainAward() {
  const initialState = {
    img: {
      src: TripleLogo,
      alt: 'triple logo image',
    },
    text: '2019년 2월 기준',
  };
  const [mainAwardInfo, setMainAwardInfo] = useState(initialState);
  const [isFade, setIsFade] = useState(true);
  const combineClassName = [styles.main_award__container];
  if (isFade) {
    combineClassName.push(styles.fade_base);
    combineClassName.push(styles.fade_active);
  }
  return (
    <div className={combineClassName.join(' ')}>
      <MainAwardItem data={mainAwardInfo} />
    </div>
  );
}

export default MainAward;
