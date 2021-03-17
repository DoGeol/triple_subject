import React from 'react';
import styles from './AwardInfoItem.module.scss';

function AwardInfoItem(props) {
  const { img, text } = props.data;
  return (
    <div className={styles.award_info__item}>
      <img {...img} />
      <pre>{text.join('\n\r')}</pre>
    </div>
  );
}

export default AwardInfoItem;
