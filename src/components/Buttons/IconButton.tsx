import React from 'react';

type Props = {
  href?: string;
  onClick?: VoidFunction;
  Icon?: React.ReactNode;
};

export function IconButton({ href, onClick, Icon }: Props) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-2 cursor-pointer transition-all opacity-60 hover:opacity-100"
    >
      {Icon}
    </a>
  );
}
