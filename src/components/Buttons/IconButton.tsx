import React from 'react';
import classNames from 'classnames';

type Props = {
  href?: string;
  onClick?: VoidFunction;
  Icon?: React.ReactNode;
  opacityEnabled?: boolean;
};

export function IconButton({
  href,
  onClick,
  Icon,
  opacityEnabled = true,
}: Props) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={classNames('px-2 cursor-pointer transition-all', {
        'opacity-60 hover:opacity-100': opacityEnabled,
      })}
    >
      {Icon}
    </a>
  );
}
