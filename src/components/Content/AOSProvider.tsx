// app/components/AOSProvider.jsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
    setTimeout(() => AOS.refresh(), 100); // Refresh for dynamic content
  }, []);

  return <>{children}</>;
}