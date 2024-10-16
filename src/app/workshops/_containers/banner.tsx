'use client';

import { motion } from 'framer-motion';

import { workshopsBannerImage } from '@/assets';
import { WantToParticipateButton } from '@/app/_components/want-to-participate-button';

export function Banner() {
  return (
    <motion.section
      className="container-wrapper text-center flex flex-col gap-20"
      id="#"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="section-heading">
          A MAIOR PREPARAÇÃO PARA VOCÊ VENCER NA VIDA É O TREINAMENTO.
        </h2>
        <p className="text-xl font-medium">
          Ele é o caminho para te lapidar e desvendar a melhor versão de si
          mesmo.
        </p>
        <WantToParticipateButton />
      </motion.div>
      <motion.img
        src={workshopsBannerImage.src}
        alt="Banner"
        className="rounded-md shadow-md mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.section>
  );
}
