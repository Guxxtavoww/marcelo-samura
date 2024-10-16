'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

import { headerData } from '@/data/header.data';
import { useBreakpoints } from '@/hooks/use-break-points.hook';

import { MobileHeader } from './mobile-header';
import { DefaultHeader } from './default-header';

export function Header() {
  const { isMd, isSm, isXs } = useBreakpoints();

  const isMobile = useMemo(() => isMd || isSm || isXs, [isMd, isSm, isXs])

  return (
    <motion.header
      className="fixed top-0 left-0 min-w-full h-[155px] gap-1.5 px-5 flex justify-center items-center z-30 border-b bg-background max-md:px-2 max-md:h-[80px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isMobile ? (
        <MobileHeader headerData={headerData} />
      ) : (
        <DefaultHeader headerData={headerData} />
      )}
    </motion.header>
  );
}
