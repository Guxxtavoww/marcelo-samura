'use client';

import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

import { cn } from '@/utils/cn.util';

export function HeaderLink({
  href,
  label,
  className,
  onClick,
  type = 'scroll',
}: {
  label: string;
  href: string;
  className?: string;
  onClick?: () => void;
  type?: 'scroll' | 'link';
}) {
  if (type === 'link') {
    return (
      <ScrollLink
        to={href}
        className={cn(
          'font-medium text-[#264653] cursor-pointer hover:text-[#357a8a] transition-all',
          className
        )}
        onClick={onClick}
        smooth={true}
        offset={0}
      >
        {label}
      </ScrollLink>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        'font-medium text-[#264653] cursor-pointer hover:text-[#357a8a] transition-all',
        className
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
