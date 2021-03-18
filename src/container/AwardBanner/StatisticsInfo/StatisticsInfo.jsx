import React from 'react';
import UpCountText from '@/components/UpCountText/UpCountText';
import config from '@/commons/config';
import styles from './StatisticsInfo.module.scss';

function StatisticsInfo() {
  const initialState = {
    statisticsInfo: [
      {
        id: 1,
        text: ['350만 명', '의 여행자'],
      },
      {
        id: 2,
        text: ['21만 개', '의 여행 리뷰'],
      },
      {
        id: 3,
        text: ['650만 개', '의 여행 일정'],
      },
    ],
  };
  const combineClassName = [styles.text_info__wrapper];
  if (config.statisticsInfo.isFade) {
    combineClassName.push(styles.fade_base);
    combineClassName.push(styles.fade_active);
  }
  return (
    <div className={combineClassName.join(' ')}>
      {initialState.statisticsInfo.map((statisticsItem) => (
        // eslint-disable-next-line react/no-array-index-key
        <UpCountText data={statisticsItem.text} key={statisticsItem.id} />
      ))}
    </div>
  );
}

export default StatisticsInfo;
