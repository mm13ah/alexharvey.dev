import React from 'react';

interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Background = ({ id, className, children }: Props) => (
  <section id={id} className={`w-screen min-h-screen flex ${className}`}>
    {children}
  </section>
);
