import React from 'react';
import styles from './UpCountText.module.scss';
import { CountUp } from 'use-count-up';

function UpCountText(props) {
  const [prefixText, sufixText] = props.data;
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
            easing={'linear'}
          />
          {otherText}
        </span>
        <span>{sufixText}</span>
      </p>
    </div>
  );
}

export default UpCountText;
