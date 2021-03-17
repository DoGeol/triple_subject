import React, { useState } from 'react';
import MainAwardContext from '../../../context/MainAward.context';

const MainAwardProvider = ({ children }) => {
  const initialState = {
    img: {
      src: '/assets/images/triple@2x.png',
      alt: 'triple logo image',
    },
    text: '2019년 2월 기준',
  };
  const [mainAwardState] = useState(initialState);
  return (
    <MainAwardContext.Provider value={mainAwardState}>
      {children}
    </MainAwardContext.Provider>
  );
};

export default MainAwardProvider;
