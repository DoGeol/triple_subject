import React, { useState } from 'react';
import TextInfoContext from '../../../context/TextInfo.context';

const TextInfoProvider = ({ children }) => {
  const initialState = {
    textInfo: [
      '630{/}만 명{/}의 여행자',
      '90{/}만 개{/}의 여행 리뷰',
      '360{/}만 개{/}의 여행 일정',
    ],
  };
  const [mainAwardState] = useState(initialState);
  return (
    <TextInfoContext.Provider value={mainAwardState}>
      {children}
    </TextInfoContext.Provider>
  );
};

export default TextInfoProvider;
