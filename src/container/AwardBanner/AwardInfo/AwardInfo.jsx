import React, { useState } from 'react';
import styles from './AwardInfo.module.scss';
import AwardInfoItem from '../../../components/AwardInfoItem/AwardInfoItem';
import PlaystoreLogo from '../../../assets/images/play-store@2x.png';
import AppstoreLogo from '../../../assets/images/app-store@2x.png';

function AwardInfo() {
  const initialState = {
    awardInfo: [
      {
        img: {
          src: PlaystoreLogo,
          alt: 'play store logo image',
        },
        text: [`2018 구글 플레이스토어`, `올해의 앱 최우수상 수상`],
      },
      {
        img: {
          src: AppstoreLogo,
          alt: 'app store logo image',
        },
        text: ['2018 애플 앱스토어', '오늘의 여행앱 선정'],
      },
    ],
  };

  const [isAwardFade, setIsAwardFade] = useState(true);

  const combineAwardClassName = [styles.award_info__wrapper];
  if (isAwardFade) {
    combineAwardClassName.push(styles.fade_base);
    combineAwardClassName.push(styles.fade_active);
  }
  return (
    <div className={combineAwardClassName.join(' ')}>
      {initialState.awardInfo.map((award, idx) => {
        return <AwardInfoItem data={award} key={`awardInfoItem-${idx}`} />;
      })}
    </div>
  );
}

export default AwardInfo;
