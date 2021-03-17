import React, { useEffect, useRef, useState } from 'react';
import styles from './InfoDetail.module.scss';
import TextInfoItem from '../../../components/TextInfoItem/TextInfoItem';
import TextInfoProvider from './TextInfo.proviter';
import AwardInfoItem from '../../../components/AwardInfoItem/AwardInfoItem';
import AwardInfoProvider from './AwardInfo.provider';

function InfoDetail() {
  const [isTextFade, setIsTextFade] = useState(true);
  const [isAwardFade, setIsAwardFade] = useState(true);
  const textRef = useRef();
  const awardRef = useRef();

  useEffect(() => {
    if (isTextFade) {
      textRef.current.classList.add(styles.fade_active);
    }
    if (isAwardFade) {
      awardRef.current.classList.add(styles.fade_active);
    }
    return () => {};
  });

  return (
    <div className={styles.info_detail__container}>
      <div
        className={`${styles.text_info__wrapper} ${
          isTextFade ? styles.fade_base : ''
        }`}
        ref={textRef}
      >
        <TextInfoProvider>
          <TextInfoItem />
        </TextInfoProvider>
      </div>
      <div
        className={`${styles.award_info__wrapper} ${
          isAwardFade ? styles.fade_base : ''
        }`}
        ref={awardRef}
      >
        <AwardInfoProvider>
          <AwardInfoItem />
        </AwardInfoProvider>
      </div>
    </div>
  );
}

export default InfoDetail;
