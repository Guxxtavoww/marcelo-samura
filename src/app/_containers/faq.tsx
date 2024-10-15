'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqData, defaultText, email } from '@/data/faq.data';

export function Faq() {
  return (
    <section className="container-wrapper text-center space-y-4" id="faq">
      <motion.h5
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5 }}
        className="font-bold text-lg"
      >
        São diversas histórias de sucesso e vidas transformadas através da
        Mentoria Samura.
      </motion.h5>
      <motion.h2
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="section-heading"
      >
        Perguntas Frequentes
      </motion.h2>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Accordion type="multiple">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={faq.question}>
              <AccordionTrigger iconType="plus-or-minus">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base font-medium leading-8">
                {faq.answer ? (
                  faq.answer.split('\n\n').map((line, lineIndex) => (
                    <p key={lineIndex} className="!text-base !leading-8">
                      {line}
                      <br />
                    </p>
                  ))
                ) : (
                  <>
                    {defaultText}{' '}
                    <Link
                      href={`mailto:${email}`}
                      className="font-bold hover:underline"
                    >
                      {email}
                    </Link>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
