import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Background = ({ className, children }: Props) => (
  <div
    className={`w-screen h-screen flex flex-col items-center
    justify-center bg-gradient-to-r from-cyan-500 to-blue-500
    ${className}`}
  >
    {children}
  </div>
);
