'use client';

import Image from 'next/image';
import { Link } from 'react-scroll';

import { headerData } from '@/data/header.data';

import { HeaderLink } from './header-link';
import { HeaderParentHoverCard } from './header-hover-cards';

export function Header() {
  return (
    <header className="fixed top-0 left-0 min-w-full h-20 px-5 flex justify-center items-center z-30 border-b bg-background max-md:px-2">
      <div className="mx-auto w-full max-w-[1428px] flex justify-between items-center">
        <Link to="#" className="cursor-pointer" offset={0}>
          <Image src="/logo.png" alt="Logo" width={175} height={80} />
        </Link>
        <div className="flex items-center justify-center gap-7">
          {headerData.map((parentLink, parentIndex) => {
            if ('href' in parentLink) {
              return (
                <HeaderLink
                  href={parentLink.href}
                  label={parentLink.linkLabel}
                  className="text-lg"
                  key={parentIndex}
                />
              );
            }

            return <HeaderParentHoverCard {...parentLink} key={parentIndex} />;
          })}
        </div>
      </div>
    </header>
  );
}
