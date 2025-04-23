'use client';

import { useState, useEffect } from 'react';
import MenuMobile from './menuMobile/MenuMobile';
import MenuDesktop from './menuDesktop/MenuDesktop';

const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 766);

    checkIsMobile(); 
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <>
      {isMobile ? <MenuMobile /> : <MenuDesktop />}
    </>
  );
};

export default Menu;
