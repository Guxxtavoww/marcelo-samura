import Link from 'next/link';

import { cn } from '@/utils/cn.util';

export function HeaderLink({
  href,
  label,
  className,
  onClick,
  openOnAnotherWindow,
}: {
  label: string;
  href: string;
  className?: string;
  onClick?: () => void;
  openOnAnotherWindow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'font-medium text-[#264653] cursor-pointer hover:text-[#357a8a] transition-all',
        className
      )}
      onClick={onClick}
      target={openOnAnotherWindow ? '_blank' : undefined}
    >
      {label}
    </Link>
  );
}
