import { useEffect, useState } from 'react';

export const useWindowSize = (): {
  width: number;
  height: number;
  mobile: boolean;
} => {
  const isSSR = typeof window === 'undefined';
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  const changeWindowSize = () =>
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

  const mobile = !isSSR && windowSize.width < 500;

  useEffect(() => {
    window.addEventListener('resize', changeWindowSize);
    return () => window.removeEventListener('resize', changeWindowSize);
  }, []);

  return { width: windowSize.width, height: windowSize.height, mobile };
};
