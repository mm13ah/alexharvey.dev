import React, { useEffect } from 'react';
import { About, Contact, Experience, Landing, Navbar } from '../../organisms';

export const Home = () => {
  useEffect(() => {
    const targets = document.querySelectorAll('.show-on-scroll');
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains('motion-safe:animate-fadein-scroll')
        ) {
          entry.target.classList.add('motion-safe:animate-fadein-scroll');
        }
      });
    };

    const observer = new IntersectionObserver(callback);
    targets.forEach((target) => {
      target.classList.add('opacity-0');
      observer.observe(target);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};
