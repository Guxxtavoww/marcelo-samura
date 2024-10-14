'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  testemonialsData,
  type TestemonialData,
} from '@/data/testemonials.data';
import { cn } from '@/utils/cn.util';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

function Testemonial({
  location,
  name,
  portraitSrc,
  profession,
  testemonial,
  isLastItem,
}: TestemonialData & { isLastItem?: boolean }) {
  const [isNotCollapsed, setIsNotCollapsed] = useState(false);

  return (
    <Collapsible
      open={isNotCollapsed}
      onOpenChange={setIsNotCollapsed}
      className={cn(
        'flex flex-col gap-2.5 items-center p-3 rounded-md border',
        {
          'col-span-2 max-md:col-span-1': isLastItem,
        }
      )}
    >
      <motion.div
        whileInView={{ opacity: [0, 1], y: [20, 0] }} // Apply framer motion animation
        transition={{ duration: 0.5 }}
      >
        <Image
          src={portraitSrc}
          alt={name}
          width={200}
          height={100}
          className="rounded-md shadow-lg w-[200px] h-[150px]"
        />
      </motion.div>
      <motion.h4
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-bold text-lg"
      >
        {name}
      </motion.h4>
      <motion.p
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {profession}
      </motion.p>
      <motion.p
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {location}
      </motion.p>
      {testemonial.length > 151 ? (
        <>
          {!isNotCollapsed ? (
            <motion.p
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="leading-10 text-base font-medium"
            >
              {testemonial.substring(0, 151)}...
            </motion.p>
          ) : null}
          <CollapsibleContent>
            <motion.p
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="leading-10 text-base font-medium"
            >
              {testemonial}
            </motion.p>
          </CollapsibleContent>
          <CollapsibleTrigger asChild>
            <Button>{!isNotCollapsed ? 'Ler Mais' : 'Ler Menos'}</Button>
          </CollapsibleTrigger>
        </>
      ) : (
        <motion.p
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="leading-10 text-base font-medium"
        >
          {testemonial}
        </motion.p>
      )}
    </Collapsible>
  );
}

export function Testemonials() {
  return (
    <section
      className="container-wrapper text-center space-y-4"
      id="testemonials"
    >
      <motion.h2
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        Veja o que dizem sobre a Mentoria Samura:
      </motion.h2>
      <motion.h3
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl font-bold"
      >
        Contra fatos reais não há argumentos, confira abaixo os resultados
        <br />
        dos membros da Mentoria Samura espalhados por todo o Brasil.
      </motion.h3>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {testemonialsData.map((testemonial, index, arr) => (
          <Testemonial
            {...testemonial}
            isLastItem={arr.length - 1 === index}
            key={index}
          />
        ))}
      </motion.div>
    </section>
  );
}
