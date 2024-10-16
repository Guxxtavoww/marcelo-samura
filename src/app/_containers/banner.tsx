'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';

import { bannerImage } from '@/assets';
import { Button } from '@/components/ui/button';

export function Banner() {
  return (
    <section className="container-wrapper grid grid-cols-2 gap-1.5 place-items-center max-md:grid-cols-1">
      <motion.div
        className="flex flex-col gap-2 items-start max-md:items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-6xl font-semibold max-md:text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Domine as Maiores Ferramentas de Desenvolvimento Pessoal e Espiritual
          da Internet.
        </motion.h2>
        <motion.p
          className="text-lg max-md:text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Aprimore sua vida pessoal e espiritual com técnicas poderosas de
          transformação.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Button className="mt-3 flex items-center gap-2" size="lg">
            <FaWhatsapp className="text-white text-xl" /> QUERO ENTRAR NA
            MENTORIA
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.img
          src={bannerImage.src}
          alt="Banner"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="rounded-sm"
        />
      </motion.div>
    </section>
  );
}
