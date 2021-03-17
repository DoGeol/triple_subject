import { createContext } from 'react';

const MainAwardContext = createContext({
  img: {
    src: '',
    alt: '',
  },
  text: '',
});

export default MainAwardContext;
