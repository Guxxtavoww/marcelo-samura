import Link from 'next/link';
import { Fragment } from 'react';

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
      <h5 className="font-bold text-lg">
        São diversas histórias de sucesso e vidas transformadas através da
        Mentoria Samura.
      </h5>
      <h2 className="section-heading">Perguntas Frequentes</h2>
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
    </section>
  );
}
