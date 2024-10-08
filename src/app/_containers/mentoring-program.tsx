'use client';

import { ElementRef, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { mentoringProgramImage } from '@/assets';
import { Button } from '@/components/ui/button';

export function MentoringProgram() {
  const ref = useRef<ElementRef<'section'>>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  return (
    <section
      className="container-wrapper flex flex-col items-center"
      ref={ref}
      id="mentory"
    >
      <motion.h2
        className="text-3xl text-[#264653] font-bold text-center mb-3"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        MEU PROGRAMA DE MENTORIA
      </motion.h2>

      <motion.p
        className="text-center text-lg mb-10 max-w-fit"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        O programa de Mentoria Samura serve para qualquer pessoa que deseja
        mudar a sua vida, utilizando as melhores ferramentas de desenvolvimento
        pessoal e espiritual.
      </motion.p>

      <motion.div
        className="w-full flex items-center justify-between gap-10 mb-8 flex-wrap max-md:justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <p className="text-2xl text-justify font-bold max-w-[500px]">
          Desvendar a Si Mesmo! Este é o único trabalho para uma alma
          transformar a sua jornada de vida <br />
          <span className="text-xl font-normal">- Marcello Samura</span>
        </p>
        <motion.img
          src={mentoringProgramImage.src}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1, ease: 'easeOut' }}
          className="rounded-sm shadow-xl"
        />
      </motion.div>

      <motion.div
        className="w-full flex justify-center items-start flex-col gap-3 max-md:items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <p className="max-w-screen-sm max-md:text-center">
          INSCREVA-SE ABAIXO PARA RECEBER CONTEÚDOS DE DESENVOVIMENTO PESSOAL E
          ESPIRITUAL SOBRE COMO VOCÊ PODE TRANSFORMAR A SUA VIDA
        </p>
        <Button>QUERO RECEBER</Button>
      </motion.div>
    </section>
  );
}
