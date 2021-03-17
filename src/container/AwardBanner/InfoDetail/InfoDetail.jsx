import React from 'react';
import styles from './InfoDetail.module.scss';
import TextInfoItem from '../../../components/TextInfoItem/TextInfoItem';
import TextInfoProvider from './TextInfo.proviter';
import AwardInfoItem from '../../../components/AwardInfoItem/AwardInfoItem';
import AwardInfoProvider from './AwardInfo.provider';

function InfoDetail({ ...props }) {
  console.log(props);
  return (
    <div className={styles.info_detail__container}>
      <div className={styles.text_info__wrapper}>
        <TextInfoProvider>
          <TextInfoItem textInfoArray={props.textInfo} />
        </TextInfoProvider>
      </div>
      <div className={styles.award_info__wrapper}>
        <AwardInfoProvider>
          <AwardInfoItem awardInfoArray={props.awardInfo} />
        </AwardInfoProvider>
      </div>
    </div>
  );
}

export default InfoDetail;
