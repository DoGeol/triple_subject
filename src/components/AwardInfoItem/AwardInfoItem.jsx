import React from 'react';
import styles from './AwardInfoItem.module.scss';

function AwardInfoItem({ data }) {
  const { img, text } = data;
  return (
    <div className={styles.award_info__item}>
      <img src={img.src} alt={img.alt} />
      <pre>{text}</pre>
    </div>
  );
}

export default AwardInfoItem;
