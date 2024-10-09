'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { headerData } from '@/data/header.data';

import { HeaderLink } from './header-link';
import { HeaderParentHoverCard } from './header-hover-cards';

export function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 min-w-full h-[140px] gap-1.5 px-5 flex justify-center items-center z-30 border-b bg-background max-md:px-2 max-md:h-fit">
      <div className="mx-auto w-full max-w-[1428px] flex flex-col items-center">
        <button
          className="cursor-pointer"
          onClick={() => {
            window?.scrollTo({ top: 0, behavior: 'smooth' });
            router.replace('/');
          }}
        >
          <Image src="/logo.png" alt="Logo" width={200} height={80} priority />
        </button>
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
    </header>
  );
}
