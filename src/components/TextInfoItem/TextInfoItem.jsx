import React, { useContext } from 'react';
import styles from './TextInfoItem.module.scss';
import TextInfoContext from '../../context/TextInfo.context';
import { CountUp } from 'use-count-up';

function TextInfoItem() {
  const { textInfo = [] } = useContext(TextInfoContext);
  return (
    <>
      {textInfo.map((info, idx) => {
        const [count, middleText, lastText] = info.split('{/}');
        return (
          <div className={styles.text_info__item} key={`textInfo-${idx}`}>
            <p className={styles.strong}>
              <CountUp
                isCounting
                start={0}
                end={Number(count)}
                duration={1.5}
                easing={'linear'}
              />
              <span>{middleText}</span>
              <span>{lastText}</span>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default TextInfoItem;
