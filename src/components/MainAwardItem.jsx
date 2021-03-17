import React from 'react';
import styles from './MainAwardItem.module.scss';
import Image from './common/Image';

function MainAwardItem({ ...props }) {
  const { img, text } = props;
  return (
    <div className={styles.main_award__item}>
      <Image {...img} />
      <span>{text}</span>
    </div>
  );
}

export default MainAwardItem;
