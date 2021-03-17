import React from 'react';
import styles from './InfoDetail.module.scss';
import TextInfoItem from '../../components/TextInfoItem';
import AwardInfoItem from '../../components/AwardInfoItem';

function InfoDetail(props) {
  return (
    <div className={styles.info_detail__container}>
      <div className={styles.text_info__wrapper}>
        <TextInfoItem />
      </div>
      <div className={styles.award_info__wrapper}>
        <AwardInfoItem />
      </div>
    </div>
  );
}

export default InfoDetail;
