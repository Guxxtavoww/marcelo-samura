'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn.util';
import { whoIsSamuraMentoryImage } from '@/assets';

function WhatIsSamuraMentorshipParagraph({
  children,
  className,
}: WithChildren<{ className?: string }>) {
  return (
    <p className={cn('text-center text-xl font-medium leading-8', className)}>
      {children}
    </p>
  );
}

export function WhatIsSamuraMentorship() {
  return (
    <section className="container-wrapper grid place-items-center">
      <div className="flex items-center gap-4 justify-between flex-wrap max-md:justify-center">
        <motion.div
          className="flex flex-col gap-4 items-center flex-[1]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-[#264653] text-4xl text-center font-bold">
            O QUE É A MENTORIA SAMURA?
          </h2>
          <WhatIsSamuraMentorshipParagraph>
            A Mentoria Samura é um programa completo de Desenvolvimento Pessoal
            e Espiritual, 100% online, projetado para transformar a sua vida de
            maneira profunda e eficaz. Nela, você terá Soluções Personalizadas
            para todas as áreas da sua vida.
          </WhatIsSamuraMentorshipParagraph>
          <WhatIsSamuraMentorshipParagraph>
            No processo da Mentoria, identificamos os problemas que você está
            enfrentando e oferecemos soluções dentro da sua realidade atual.
            Atuamos em áreas como: familiar, profissional, relacionamentos,
            finanças, espiritualidade, saúde, alimentação. Transforme sua vida
            com abordagens específicas e eficazes para cada desafio.
          </WhatIsSamuraMentorshipParagraph>
        </motion.div>

        <motion.img
          src={whoIsSamuraMentoryImage.src}
          className="flex-[1] max-w-[550px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </section>
  );
}
