import React, { useState } from 'react';
import styles from './TextInfo.module.scss';
import TextInfoItem from '../../../components/TextInfoItem/TextInfoItem';

function TextInfo() {
  const initialState = {
    textInfo: [
      ['350만 명', '의 여행자'],
      ['21만 개', '의 여행 리뷰'],
      ['650만 개', '의 여행 일정'],
    ],
  };

  const [isTextFade, setIsTextFade] = useState(true);

  const combineTextClassName = [styles.text_info__wrapper];
  if (isTextFade) {
    combineTextClassName.push(styles.fade_base);
    combineTextClassName.push(styles.fade_active);
  }
  return (
    <div className={combineTextClassName.join(' ')}>
      {initialState.textInfo.map((text, idx) => {
        return <TextInfoItem data={text} key={`textInfoItem-${idx}`} />;
      })}
    </div>
  );
}

export default TextInfo;
