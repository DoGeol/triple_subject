import React, { useState } from 'react';
import styles from './StatisticsInfo.module.scss';
import UpCountText from '@/components/UpCountText/UpCountText';

function StatisticsInfo() {
  const initialState = {
    statisticsInfo: [
      ['350만 명', '의 여행자'],
      ['21만 개', '의 여행 리뷰'],
      ['650만 개', '의 여행 일정'],
    ],
  };
  const [statisticsInfo, setStatisticsItems] = useState(
    initialState.statisticsInfo,
  );
  const [isFade, setIsFade] = useState(true);
  const combineClassName = [styles.text_info__wrapper];
  if (isFade) {
    combineClassName.push(styles.fade_base);
    combineClassName.push(styles.fade_active);
  }
  return (
    <div className={combineClassName.join(' ')}>
      {statisticsInfo.map((item, idx) => {
        return <UpCountText data={item} key={`textInfoItem-${idx}`} />;
      })}
    </div>
  );
}

export default StatisticsInfo;
