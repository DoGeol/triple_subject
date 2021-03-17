import React, { useState } from 'react';
import styles from './InfoDetail.module.scss';
import TextInfoItem from '../../../components/TextInfoItem/TextInfoItem';
import AwardInfoItem from '../../../components/AwardInfoItem/AwardInfoItem';
import PlaystoreLogo from '../../../assets/images/play-store@2x.png';
import AppstoreLogo from '../../../assets/images/app-store@2x.png';

function InfoDetail() {
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
    textInfo: [
      ['350만 명', '의 여행자'],
      ['21만 개', '의 여행 리뷰'],
      ['650만 개', '의 여행 일정'],
    ],
  };
  const [isTextFade, setIsTextFade] = useState(true);
  const [isAwardFade, setIsAwardFade] = useState(true);

  const combineTextClassName = [styles.text_info__wrapper];
  if (isTextFade) {
    combineTextClassName.push(styles.fade_base);
    combineTextClassName.push(styles.fade_active);
  }
  const combineAwardClassName = [styles.award_info__wrapper];
  if (isAwardFade) {
    combineAwardClassName.push(styles.fade_base);
    combineAwardClassName.push(styles.fade_active);
  }
  return (
    <div className={styles.info_detail__container}>
      <div className={combineTextClassName.join(' ')}>
        {initialState.textInfo.map((text, idx) => {
          return <TextInfoItem data={text} key={`textInfoItem-${idx}`} />;
        })}
      </div>
      <div className={combineAwardClassName.join(' ')}>
        {initialState.awardInfo.map((award, idx) => {
          return <AwardInfoItem data={award} key={`awardInfoItem-${idx}`} />;
        })}
      </div>
    </div>
  );
}

export default InfoDetail;
