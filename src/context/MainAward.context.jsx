import { createContext } from 'react';

const MainAwardContext = createContext({
  img: {
    src: '',
    alt: '',
  },
  text: '',
  isFade: false,
});

export default MainAwardContext;
