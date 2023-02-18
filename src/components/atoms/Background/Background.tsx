import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Background = ({ className, children }: Props) => (
  <div className={`w-screen min-h-screen flex ${className}`}>{children}</div>
);
