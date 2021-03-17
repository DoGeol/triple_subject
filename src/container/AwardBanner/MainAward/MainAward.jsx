import React, { useState, useRef, useEffect } from 'react';
import styles from './MainAward.module.scss';
import MainAwardItem from '../../../components/MainAwardItem/MainAwardItem';
import MainAwardProvider from './MainAward.provider';

function MainAward() {
  const [isFade, setIsFade] = useState(true);
  const mainAwardRef = useRef();
  useEffect(() => {
    if (isFade) {
      mainAwardRef.current.classList.add(styles.fade_active);
    }
    return () => {};
  });

  return (
    <div
      className={`${styles.main_award__container} ${
        isFade ? styles.fade_base : ''
      }`}
      ref={mainAwardRef}
    >
      <MainAwardProvider>
        <MainAwardItem />
      </MainAwardProvider>
    </div>
  );
}

export default MainAward;
