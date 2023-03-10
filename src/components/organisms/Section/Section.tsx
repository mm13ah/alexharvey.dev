import React from 'react';
import { IconRow } from '../../molecules';

interface Props {
  title: string;
  text: string[] | { link: string; text: string }[];
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ title, text, children, className }: Props) => (
  <div className={className}>
    <IconRow title={title}>{children}</IconRow>
    <ul className="list-disc mt-2 ml-5">
      {text.map((item) =>
        typeof item === 'string' ? (
          <li
            className="text-white font-light tracking-wide leading-relaxed"
            key={item}
          >
            {item}
          </li>
        ) : (
          <li
            className="text-white font-light tracking-wide leading-relaxed underline"
            key={item.link}
          >
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.text}
            </a>
          </li>
        )
      )}
    </ul>
  </div>
);
