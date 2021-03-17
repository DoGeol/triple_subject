import React, { useContext } from 'react';
import styles from './AwardInfoItem.module.scss';
import AwardInfoContext from '../../context/AwardInfo.context';

function AwardInfoItem() {
  const { awardInfo = [] } = useContext(AwardInfoContext);
  return (
    <>
      {awardInfo.map((info, idx) => {
        return (
          <div className={styles.award_info__item} key={`awardInfoItem-${idx}`}>
            <img {...info.img} />
            <pre>{info.text.join('\n\r')}</pre>
          </div>
        );
      })}
    </>
  );
}

export default AwardInfoItem;
