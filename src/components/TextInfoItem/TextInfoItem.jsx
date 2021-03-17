import React, { useRef, useContext, useState } from 'react';
import styles from './TextInfoItem.module.scss';
import TextInfoContext from '../../context/TextInfo.context';

function TextInfoItem() {
  const { textInfo } = useContext(TextInfoContext);
  return (
    <>
      <div className={styles.text_info__item}>
        <p className={styles.strong}>
          <span className="js-upCnt">630</span>
          <span>만 명</span>
          <span>의 여행자</span>
        </p>
      </div>
      <div className={styles.text_info__item}>
        <p className={styles.strong}>
          <span className="js-upCnt">95</span>
          <span>만 개</span>
          <span>의 여행 리뷰</span>
        </p>
      </div>
      <div className={styles.text_info__item}>
        <p className={styles.strong}>
          <span className="js-upCnt">420</span>
          <span>만 개</span>
          <span>의 여행 일정</span>
        </p>
      </div>
    </>
  );
}

export default TextInfoItem;
