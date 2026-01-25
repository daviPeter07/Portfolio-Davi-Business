'use client';

import { useEffect } from 'react';

const QUERY = '[data-reveal]';

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.setAttribute('data-revealed', 'true');
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px 150px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(QUERY).forEach((el) => observer.observe(el));
    };

    observeAll();

    const mo = new MutationObserver(() => {
      observeAll();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      observer.disconnect();
    };
  }, []);
}
