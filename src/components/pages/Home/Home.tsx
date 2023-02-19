import React, { useEffect } from 'react';
import { About, Experience, Landing } from '../../organisms';

export const Home = () => {
  useEffect(() => {
    // Get all the elements you want to show on scroll
    const targets = document.querySelectorAll('.show-on-scroll');

    // Callback for IntersectionObserver
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Is the element in the viewport?
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains('motion-safe:animate-fadein-scroll')
        ) {
          // Add the fadeIn class:
          entry.target.classList.add('motion-safe:animate-fadein-scroll');
        }
      });
    };

    // Set up a new observer
    const observer = new IntersectionObserver(callback);

    // Loop through each of the target
    targets.forEach((target) => {
      // Hide the element
      target.classList.add('opacity-0');

      // Add the element to the watcher
      observer.observe(target);
    });
  }, []);

  return (
    <div>
      <Landing />
      <About />
      <Experience />
    </div>
  );
};
