'use client';

import { mentoriaEmpresarialImage1, mentoriaEmpresarialImage2 } from '@/assets';

import { WantToParticipateButton } from '../_components/want-to-participate-button';
import { motion } from 'framer-motion';

export function BusinessMentoringME() {
  return (
    <motion.section
      className="container-wrapper text-center space-y-4"
      id="business-mentoring-me"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        MENTORIA EMPRESARIAL- ME
      </motion.h2>
      <motion.h4
        className="text-2xl font-semibold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Está enfrentando dificuldades na sua vida pessoal e empresarial?
        <br />
        Você gostaria de ter alguém que pudesse compartilhar...?
      </motion.h4>
      <WantToParticipateButton />
      <motion.div
        className="flex items-center gap-6 max-md:flex-col !mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="leading-10 text-lg font-medium">
            Ser empresário é uma jornada repleta de desafios diários,
            enfrentando concorrência feroz, problemas de fluxo de caixa e a
            pressão constante para inovar e crescer. Além disso, você lida com
            questões que afetam profundamente sua vida pessoal e relacionamentos
            com as pessoas. Gerenciar uma empresa vem com uma enorme
            responsabilidade: sustentar famílias, inspirar a equipe e realizar
            sonhos. Isso pode levar a estresse, isolamento e desequilíbrio entre
            vida profissional e pessoal.
          </p>
          <p className="leading-10 text-lg font-medium">
            A linha entre trabalho e casa se torna indistinta, gerando culpa por
            não estar presente para a família e amigos. O estresse constante
            pode levar à exaustão, depressão ou ansiedade. Não enfrente esses
            desafios sozinho. Juntos, podemos criar um futuro onde você e seu
            negócio prosperem. Invista em você e veja como isso se refletirá em
            todos os aspectos da sua vida. Transforme sua jornada empresarial e
            pessoal hoje. O futuro que você deseja começa com a decisão que toma
            agora.
          </p>
        </motion.div>
        <motion.img
          src={mentoriaEmpresarialImage2.src}
          alt="Empresarial 2"
          className="rounded-md shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        />
      </motion.div>
      <motion.h4
        className="text-center font-bold text-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        Está cansado de carregar o piano sozinho? Transforme e ilumine o seu
        caminho. <br />
        Você gostaria de ter alguém que pudesse compartilhar...?
      </motion.h4>
      <WantToParticipateButton />
      <motion.div
        className="flex items-center gap-6 !mb-6 max-md:flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <motion.img
          src={mentoriaEmpresarialImage1.src}
          alt="Empresarial 1"
          className="rounded-md shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
        />
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        >
          <p className="leading-10 text-lg font-medium">
            Ser empresário é uma jornada repleta de desafios diários,
            enfrentando concorrência feroz, problemas de fluxo de caixa e a
            pressão constante para inovar e crescer. Além disso, você lida com
            questões que afetam profundamente sua vida pessoal e relacionamentos
            com as pessoas. Gerenciar uma empresa vem com uma enorme
            responsabilidade, sustentar famílias, inspirar a equipe e realizar
            sonhos. Isso pode levar a estresse, isolamento e desequilíbrio entre
            vida profissional e pessoal.
          </p>
          <p className="leading-10 text-lg font-medium">
            A linha entre trabalho e casa se torna indistinta, gerando culpa por
            não estar presente para a família e amigos. O estresse constante
            pode levar à exaustão, depressão ou ansiedade. Não enfrente esses
            desafios sozinho. Juntos, podemos criar um futuro onde você e seu
            negócio prosperem. Invista em você e veja como isso se refletirá em
            todos os aspectos da sua vida. Transforme sua jornada empresarial e
            pessoal hoje. O futuro que você deseja começa com a decisão que toma
            agora.
          </p>
        </motion.div>
      </motion.div>
      <motion.h2
        className="section-heading !text-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.8 }}
      >
        A Mentoria Empresarial serve para quem?
      </motion.h2>
    </motion.section>
  );
}
