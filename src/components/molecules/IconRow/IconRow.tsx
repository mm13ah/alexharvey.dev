import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const IconRow = ({ title, children }: Props) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-x-5">
    <h3 className="text-white font-medium tracking-wider text-2xl">{title}</h3>
    <div className="flex gap-x-5 my-2 sm:my-0">{children}</div>
  </div>
);
