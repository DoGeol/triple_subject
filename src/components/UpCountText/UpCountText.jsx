import React from 'react';
import { CountUp } from 'use-count-up';
import styles from './UpCountText.module.scss';

function UpCountText({ data }) {
  const [prefixText, suffixText] = data;
  const upCountValue = prefixText.match(/[0-9]/g).join('') * 1;
  const otherText = prefixText.replace(/[0-9]/g, '');
  return (
    <div className={styles.up_count_text__item}>
      <p className={styles.strong}>
        <span>
          <CountUp
            isCounting
            start={0}
            end={upCountValue}
            duration={1.5}
            easing="linear"
          />
          {otherText}
        </span>
        <span>{suffixText}</span>
      </p>
    </div>
  );
}

export default UpCountText;
