import React, { useState } from 'react';
import TextInfoContext from '../../../context/TextInfo.context';

const TextInfoProvider = ({ children }) => {
  const initialState = {
    textInfo: [
      '350{/}만 명{/}의 여행자',
      '21{/}만 개{/}의 여행 리뷰',
      '650{/}만 개{/}의 여행 일정',
    ],
  };
  const [textInfoState] = useState(initialState);
  return (
    <TextInfoContext.Provider value={textInfoState}>
      {children}
    </TextInfoContext.Provider>
  );
};

export default TextInfoProvider;
