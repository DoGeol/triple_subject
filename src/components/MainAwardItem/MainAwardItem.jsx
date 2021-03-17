import React, { useContext } from 'react';
import styles from './MainAwardItem.module.scss';
import MainAwardContext from '../../context/MainAward.context';
import Image from '../common/Image';

function MainAwardItem() {
  const { img, text } = useContext(MainAwardContext);
  // const [mainAwardItemRef, setMainAwardItemRef] = useState(() => createRef());
  // const combineClassName = [styles.main_award__item];
  // if (isFade) {
  //   combineClassName.push(styles.fade_base);
  //   useEffect(() => {
  //     mainAwardItemRef.current.classList.add(styles.fade_active);
  //     return () => {};
  //   });
  // }

  return (
    <div className={styles.main_award__item}>
      <Image {...img} />
      <span>{text}</span>
    </div>
  );
}

export default MainAwardItem;
