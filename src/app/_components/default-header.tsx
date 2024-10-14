import Link from 'next/link';
import Image from 'next/image';

import type { HeaderData } from '@/data/header.data';

import { HeaderLink } from './header-link';
import { HeaderParentHoverCard } from './header-hover-cards';

export function DefaultHeader({ headerData }: { headerData: HeaderData[] }) {
  return (
    <div className="mx-auto w-full max-w-[1428px] flex flex-col items-center">
      <Link href="#" className="cursor-pointer">
        <Image src="/logo.png" alt="Logo" width={200} height={80} priority />
      </Link>
      <div className="flex items-center justify-center gap-10 flex-wrap w-full">
        {headerData.map((parentLink, parentIndex) => {
          if ('href' in parentLink) {
            return (
              <HeaderLink
                href={parentLink.href}
                label={parentLink.linkLabel}
                className="text-lg"
                key={parentIndex}
                openOnAnotherWindow={parentLink.openInOtherWindow}
              />
            );
          }

          return <HeaderParentHoverCard {...parentLink} key={parentIndex} />;
        })}
      </div>
    </div>
  );
}
