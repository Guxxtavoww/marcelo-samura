'use client';

import { motion } from 'framer-motion';

import type { EbookData } from '@/data/ebooks.data';
import { formatToCurrency } from '@/utils/currency.util';
import { CustomLink } from '@/components/tools/custom-link';

export function Ebook({
  bannerSrc,
  price,
  sectionId,
  synopsisParagraps,
  linkHref,
}: EbookData) {
  return (
    <section
      className="container-wrapper flex items-center gap-8 max-lg:flex-col"
      id={sectionId}
    >
      <motion.div
        className="flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={bannerSrc}
          alt={bannerSrc}
          transition={{ duration: 0.4 }}
          className="rounded-md shadow-lg min-w-[500px]"
        />

        <motion.h3
          className="font-bold text-[#a73520] text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {formatToCurrency(price)}
        </motion.h3>

        <CustomLink href={linkHref || '#'} size="lg" variant="default">
          Comprar Agora
        </CustomLink>
      </motion.div>

      <motion.div
        className="text-center space-y-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.h2
          className="section-heading !mb-7"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SINOPSE
        </motion.h2>

        {synopsisParagraps.map((p, index) => (
          <motion.p
            key={index}
            className="!text-justify leading-9 text-lg font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {p}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
