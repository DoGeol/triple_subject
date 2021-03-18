import React, { useState } from 'react';
import styles from './AwardInfo.module.scss';
import AwardInfoItem from '@/components/AwardInfoItem/AwardInfoItem';
import PlayStoreLogo from '@/assets/images/play-store@2x.png';
import AppStoreLogo from '@/assets/images/app-store@2x.png';

function AwardInfo() {
  const initialState = {
    awardInfo: [
      {
        img: {
          src: PlayStoreLogo,
          alt: 'play store logo image',
        },
        text: `2018 구글 플레이스토어\r\n올해의 앱 최우수상 수상`,
      },
      {
        img: {
          src: AppStoreLogo,
          alt: 'app store logo image',
        },
        text: `2018 애플 앱스토어\r\n오늘의 여행앱 선정`,
      },
    ],
  };
  const [awards, setAwards] = useState(initialState.awardInfo);
  const [isFade, setIsAwardFade] = useState(true);
  const combineClassName = [styles.award_info__wrapper];
  if (isFade) {
    combineClassName.push(styles.fade_base);
    combineClassName.push(styles.fade_active);
  }
  return (
    <div className={combineClassName.join(' ')}>
      {awards.map((award, idx) => {
        return <AwardInfoItem data={award} key={`awardInfoItem-${idx}`} />;
      })}
    </div>
  );
}

export default AwardInfo;
