'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn.util';
import { willItWorkFormMeData } from '@/data/will-it-work-for-me.data';

export function WillItWorkForMe() {
  return (
    <section className="container-wrapper flex flex-col gap-6 items-center">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        A MENTORIA SAMURA FUNCIONA PRA MIM?
      </motion.h2>

      <motion.p
        className="text-lg font-medium text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A Mentoria Samura serve para qualquer pessoa que deseja dominar as
        ferramentas de <br /> autoconhecimento e sobre a espiritualidade para
        transformar a sua vida.
      </motion.p>

      <div className="w-full grid grid-cols-2 gap-8 max-md:flex max-md:flex-col">
        {willItWorkFormMeData.map((item, index, arr) => (
          <motion.div
            key={index}
            className={cn(
              'flex flex-col transition-all items-center min-h-[313px] gap-3 border rounded-md p-3 hover:bg-slate-50',
              {
                'col-span-2': arr.length - 1 === index,
              }
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <motion.img
              src={item.iconSrc}
              alt={item.title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <motion.h3
              className="text-[#a73520] text-2xl text-center font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              className="text-lg leading-9 text-center font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
      <p className="font-bold text-2xl text-center mt-3">
        Quem sonha em mudar a sua vida, tem o dever de assumir a
        responsabilidade sobre si mesmo. A Mentoria Samura é uma solução
        abrangente para qualquer pessoa disposta a investir no seu
        desenvolvimento pessoal e espiritual.
      </p>
    </section>
  );
}
