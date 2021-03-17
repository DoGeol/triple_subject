import React, { useState, useRef, useEffect } from 'react';
import styled from './MainAward.module.scss';
import MainAwardItem from '../../../components/MainAwardItem/MainAwardItem';
import MainAwardProvider from './MainAward.provider';

function MainAward() {
  const [isFade, setIsFade] = useState(true);
  const mainAwardRef = useRef();
  useEffect(() => {
    if (isFade) {
      mainAwardRef.current.classList.add(styled.fade_active);
    }
    return () => {};
  });

  return (
    <div
      className={`${styled.main_award__container} ${styled.fade_base}`}
      ref={mainAwardRef}
    >
      <MainAwardProvider>
        <MainAwardItem />
      </MainAwardProvider>
    </div>
  );
}

export default MainAward;
