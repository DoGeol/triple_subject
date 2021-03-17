import React from 'react';
import styled from './MainAward.module.scss';
import MainAwardItem from '../../../components/MainAwardItem/MainAwardItem';
import MainAwardProvider from './MainAward.provider';

function MainAward() {
  return (
    <div className={styled.main_award__container}>
      <MainAwardProvider>
        <MainAwardItem />
      </MainAwardProvider>
    </div>
  );
}

export default MainAward;
