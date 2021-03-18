import React from 'react';
import styles from './AwardMainItem.module.scss';

function AwardMainItem({ data }) {
  const { img, text } = data;
  return (
    <div className={styles.main_award__item}>
      <img src={img.src} alt={img.alt} />
      <span>{text}</span>
    </div>
  );
}

export default AwardMainItem;
