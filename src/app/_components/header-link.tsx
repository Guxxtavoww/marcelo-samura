import Link from 'next/link';

import { cn } from '@/utils/cn.util';

export function HeaderLink({
  href,
  label,
  className,
  onClick
}: {
  label: string;
  href: string;
  className?: string;
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      className={cn(
        'font-medium text-[#264653] hover:text-[#357a8a] transition-all',
        className
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
