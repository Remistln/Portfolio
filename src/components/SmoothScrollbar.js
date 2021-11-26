import React, { useEffect, useRef } from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import { useLocation } from 'react-router-dom';

export default function SmoothScrollbar({ children }) {
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const { scrollbar } = ref.current;
    scrollbar.setPosition(0, 0);
  }, [pathname]);

  return (
    <Scrollbar ref={ref} damping="0.09">
      {children}
    </Scrollbar>
  );
}
