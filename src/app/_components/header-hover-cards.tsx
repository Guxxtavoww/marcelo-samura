'use client';

import { useState } from 'react';

import type {
  SubLinkWithLinks,
  HeaderDataWithMenuLinks,
} from '@/data/header.data';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { cn } from '@/utils/cn.util';

import { HeaderLink } from './header-link';

function HeaderChildHoverCard({
  onClick,
  ...subLink
}: SubLinkWithLinks & { onClick: () => void }) {
  const [isHoverCardOpen, setIsHoverCardOpen] = useState<boolean>(false);

  return (
    <HoverCard
      openDelay={0}
      closeDelay={0}
      open={isHoverCardOpen}
      onOpenChange={setIsHoverCardOpen}
    >
      <HoverCardTrigger className="cursor-pointer font-medium !text-[#264653] !hover:text-[#357a8a]">
        {subLink.label}
      </HoverCardTrigger>
      <HoverCardContent
        className="flex flex-col gap-2 items-start justify-center z-40"
        align="start"
        sideOffset={4}
      >
        {subLink.links.map((link, linkIndex) => (
          <HeaderLink
            href={link.href || '#'}
            label={link.label}
            key={linkIndex}
            onClick={() => {
              setIsHoverCardOpen(false);
              onClick();
            }}
          />
        ))}
      </HoverCardContent>
    </HoverCard>
  );
}

export function HeaderParentHoverCard(parentLink: HeaderDataWithMenuLinks) {
  const [isHoverCardOpen, setIsHoverCardOpen] = useState<boolean>(false);

  return (
    <HoverCard
      openDelay={0}
      closeDelay={0}
      open={isHoverCardOpen}
      onOpenChange={setIsHoverCardOpen}
    >
      <HoverCardTrigger className="text-lg font-medium !text-[#264653] hover:text-[#357a8a] cursor-pointer">
        {parentLink.linkLabel}
      </HoverCardTrigger>
      <HoverCardContent
        className={cn('min-w-64 w-full p-3 flex flex-col gap-4', {
          'justify-center items-center': parentLink.menuLinks.length === 1,
        })}
        align="center"
        sideOffset={8}
      >
        {parentLink.menuLinks.map((subLink, subIndex) => {
          if ('links' in subLink) {
            return (
              <HeaderChildHoverCard
                {...subLink}
                onClick={() => setIsHoverCardOpen(false)}
                key={subIndex}
              />
            );
          }

          return (
            <HeaderLink
              href={subLink.href || '#'}
              label={subLink.label}
              key={subIndex}
              onClick={() => setIsHoverCardOpen(false)}
            />
          );
        })}
      </HoverCardContent>
    </HoverCard>
  );
}
