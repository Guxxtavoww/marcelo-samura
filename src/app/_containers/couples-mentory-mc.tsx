'use client';

import { motion } from 'framer-motion';

import { mentoriaParaCasalImage1 } from '@/assets';
import { WantToParticipateButton } from '../_components/want-to-participate-button';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function CouplesMentoryMC() {
  return (
    <section className="container-wrapper text-center" id="couples-mentory-mc">
      <motion.h2
        className="section-heading mb-3"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        MENTORIA PARA CASAIS - MC
      </motion.h2>

      <motion.p
        className="text-xl font-semibold text-center mb-3"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.1 }}
        variants={fadeInUp}
      >
        O seu casamento está em crise e o divórcio parece inevitável? <br />
        Supere o medo e encontre soluções com nossa orientação especializada!
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={fadeInUp}
      >
        <WantToParticipateButton className="mb-12" />
      </motion.div>

      <motion.div
        className="grid grid-cols-2 gap-2 place-items-center mb-10"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        variants={fadeInUp}
      >
        <motion.img
          src={mentoriaParaCasalImage1.src}
          className="rounded-md shadow-lg"
        />
        <motion.div className="flex flex-col gap-3 max-h-fit">
          <h3 className="text-2xl font-bold text-center">
            Você tem medo do divórcio? <br /> Não está sabendo como resolver?
          </h3>
          <p className="text-lg leading-10">
            Ao longo do tempo, todo casamento enfrenta altos e baixos únicos. Às
            vezes, os problemas parecem impossíveis de serem resolvidos. Porém,
            em 8 anos de Mentoria, aprendi que tudo é possível, desde de que, o
            casal reconhece a necessidade de mudar. Este processo não só resolve
            os conflitos, mas também transforma e fortalece a relação. Acredite:
            investir na sua relação, mesmo quando a mudança parece impossível,
            pode salvar seu casamento e a estrutura da sua família, caso tenha
            filhos.
          </p>
        </motion.div>
      </motion.div>

      <motion.h3
        className="text-4xl font-semibold text-center mb-10"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={fadeInUp}
      >
        Separação! Você gostaria de ter alguém que pudesse compartilhar...?
      </motion.h3>
    </section>
  );
}
