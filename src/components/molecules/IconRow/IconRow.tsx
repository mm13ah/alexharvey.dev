import React from 'react';
import { SiGraphql, SiNodedotjs, SiReact, SiTypescript } from 'react-icons/si';

interface Props {
  color?: string;
}

export const IconRow = ({ color }: Props) => (
  <div className="flex items-center gap-x-10">
    <SiTypescript size={38} color={color ?? 'white'} />
    <SiReact size={38} color={color ?? 'white'} />
    <SiGraphql size={38} color={color ?? 'white'} />
    <SiNodedotjs size={38} color={color ?? 'white'} />
  </div>
);
