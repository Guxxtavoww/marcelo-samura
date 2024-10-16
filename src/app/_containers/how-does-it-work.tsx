'use client';

import { motion } from 'framer-motion';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { howDoesItWorkData } from '@/data/how-does-it-work.data';

import { WantToParticipateButton } from '../_components/want-to-participate-button';

export function HowDoesItWork() {
  return (
    <motion.section
      id="how-does-it-work"
      className="container-wrapper space-y-10 text-center mb-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        COMO FUNCIONA A MENTORIA SAMURA?
      </motion.h2>

      <Accordion type="multiple" className="w-full">
        {howDoesItWorkData.map((item, index) => (
          <AccordionItem value={item.title} key={index}>
            <AccordionTrigger className="text-[#a73520] text-lg font-semibold">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <motion.p
        className="text-xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Comece a sua jornada para um melhor você hoje, com o nosso programa de
        mentoria diária e personalizada. Abrace a oportunidade de alcançar o
        sucesso e a realização que você sempre sonhou.
      </motion.p>

      <WantToParticipateButton />
    </motion.section>
  );
}
