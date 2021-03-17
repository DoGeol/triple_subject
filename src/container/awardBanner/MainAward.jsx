import React from 'react';
import styled from './MainAward.module.scss';
import MainAwardItem from '../../components/MainAwardItem';

function MainAward({ ...props }) {
  return (
    <div className={styled.main_award__container}>
      <MainAwardItem {...props} />
    </div>
  );
}

export default MainAward;
