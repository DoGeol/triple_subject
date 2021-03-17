import React from 'react';
import styles from './MainAwardItem.module.scss';

function MainAwardItem(props) {
  const { img, text } = props.data;
  return (
    <div className={styles.main_award__item}>
      <img {...img} />
      <span>{text}</span>
    </div>
  );
}

export default MainAwardItem;
