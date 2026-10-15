import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let frame = 0;

    if (hash) {
      // Wait until the destination route has committed its DOM before scrolling.
      frame = window.requestAnimationFrame(() => {
        const target = document.getElementById(hash.slice(1));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
