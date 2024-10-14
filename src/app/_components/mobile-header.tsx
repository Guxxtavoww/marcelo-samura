import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import type { HeaderData } from '@/data/header.data';

import { HeaderLink } from './header-link';
import { HeaderParentHoverCard } from './header-hover-cards';

export function MobileHeader({ headerData }: { headerData: HeaderData[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col items-start">
      <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <div className="flex w-full justify-between items-center p-4">
          <Link
            href="#"
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={60}
              priority
            />
          </Link>

          <PopoverTrigger className="focus:outline-none">
            {isMenuOpen ? <X /> : <Menu />}
          </PopoverTrigger>
        </div>

        <PopoverContent
          className="min-w-[calc(100vw-3rem)] flex items-center justify-center flex-col gap-5 py-7"
          align="center"
        >
          {headerData.map((parentLink, parentIndex) => {
            if ('href' in parentLink) {
              return (
                <HeaderLink
                  href={parentLink.href}
                  label={parentLink.linkLabel}
                  openOnAnotherWindow={parentLink.openInOtherWindow}
                  onClick={() => setIsMenuOpen(false)}
                  key={parentIndex}
                />
              );
            }

            return (
              <HeaderParentHoverCard
                {...parentLink}
                onLinksClick={() => setIsMenuOpen(false)}
                key={parentIndex}
              />
            );
          })}
        </PopoverContent>
      </Popover>
    </div>
  );
}
