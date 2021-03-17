import React, { useState } from 'react';
import AwardInfoContext from '../../../context/AwardInfo.context';

const AwardInfoProvider = ({ children }) => {
  const initialState = {
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
        title: ['2018 애플 앱스토어', '오늘의 여행앱'],
      },
    ],
  };
  const [awardInfoState] = useState(initialState);
  return (
    <AwardInfoContext.Provider value={awardInfoState}>
      {children}
    </AwardInfoContext.Provider>
  );
};

export default AwardInfoProvider;
