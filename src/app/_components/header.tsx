import Link from 'next/link';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { cn } from '@/utils/cn.util';
import { headerData } from '@/data/header.data';

export function Header() {
  return (
    <header className="fixed top-0 left-0 min-w-full h-20 px-3 flex justify-center items-center">
      <div className="w-full max-w-screen-lg flex items-center justify-center gap-7">
        {headerData.map((parentLink, parentIndex) => {
          if ('href' in parentLink) {
            return (
              <Link
                key={parentIndex}
                href={parentLink.href}
                className="!text-lg font-medium text-[#264653] hover:!text-[#357a8a]"
              >
                {parentLink.linkLabel}
              </Link>
            );
          }

          return (
            <HoverCard key={parentIndex} openDelay={0} closeDelay={0}>
              <HoverCardTrigger className="text-lg font-medium !text-[#264653] !over:text-[#357a8a] cursor-pointer">
                {parentLink.linkLabel}
              </HoverCardTrigger>
              <HoverCardContent
                className={cn('min-w-64 w-full p-3 flex flex-col gap-4', {
                  'justify-center items-center':
                    parentLink.menuLinks.length === 1,
                })}
              >
                {parentLink.menuLinks.map((subLink, subIndex) => {
                  if ('links' in subLink) {
                    return (
                      <HoverCard key={subIndex} openDelay={0} closeDelay={0}>
                        <HoverCardTrigger className="cursor-pointer font-medium !text-[#264653] !hover:text-[#357a8a]">
                          {subLink.label}
                        </HoverCardTrigger>
                        <HoverCardContent
                          className="flex flex-col gap-2 items-start justify-center z-40"
                          align="end"
                        >
                          {subLink.links.map((link, linkIndex) => (
                            <Link
                              href={link.href || '#'}
                              className="font-medium !text-[#264653] hover:text-[#357a8a]"
                              key={linkIndex}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </HoverCardContent>
                      </HoverCard>
                    );
                  }

                  return (
                    <Link
                      href={subLink.href || '#'}
                      key={subIndex}
                      className="font-medium !text-[#264653] hover:text-[#357a8a] transition-all"
                    >
                      {subLink.label}
                    </Link>
                  );
                })}
              </HoverCardContent>
            </HoverCard>
          );
        })}
      </div>
    </header>
  );
}
