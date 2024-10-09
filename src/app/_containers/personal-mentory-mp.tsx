'use client';

import { motion } from 'framer-motion';

import {
  mentoriaPessoalImage1,
  mentoriaPessoalImage2,
  mentoriaPessoalImage3,
} from '@/assets';

import { WantToParticipateButton } from '../_components/want-to-participate-button';

function ContentRowWrapper({ children }: WithChildren) {
  return (
    <div className="w-full flex items-center gap-5 max-md:flex-col [&_p]:text-[#264653] [&_p]:font-bold [&_p]:text-xl [&_img]:rounded-md [&_img]:shadow-md">
      {children}
    </div>
  );
}

export function PersonalMentoryMp() {
  return (
    <motion.section
      className="container-wrapper space-y-12 text-center"
      id="personal-mentory-mp"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        MENTORIA PESSOAL - MP
      </motion.h2>

      <motion.p
        className="text-xl font-bold"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        NÃO IMPORTA O QUE ESTÁ PASSANDO AGORA, SAIBA QUE VOCÊ NÃO ESTÁ
        SOZINHO(A)!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <WantToParticipateButton />
      </motion.div>

      <motion.div
        className="w-full flex items-center gap-5 justify-center max-md:flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={mentoriaPessoalImage1.src}
          alt="Image 1"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="rounded-md"
        />
        <motion.p
          className="flex-[1] text-center text-xl leading-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          O cotidiano das pessoas pode apresentar uma série de desafios e
          problemas que impactam significativamente em suas vidas. Medo,
          Ansiedade, Depressão, Insonia e tantos outros fatores que acabam
          tornando a jornada de vida solitária e sem sentido. Consequentemente,
          este panorama pode afetar no relacionamento amoroso, trabalho, núcleo
          familiar, no ciclo de amizades e social. Quando se vê, a pessoa acaba
          tendo experiências de uma realidade de vida extremamente problemática
          e além de uma enormidade de situações comportamentais nocivas para o
          seu desenvolvimento, inevitavelmente, se torna uma pessoa fraca
          emocional e mentalmente.
        </motion.p>
      </motion.div>
      <motion.h3
        className="text-2xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }} // Initial state (faded out and shifted up)
        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
        transition={{ duration: 0.7, ease: 'easeInOut' }} // Smooth transition
      >
        Está sozinho e enfrentando dificuldades na sua vida pessoal? <br /> Você
        gostaria de ter alguém que pudesse compartilhar...?
      </motion.h3>

      <ContentRowWrapper>
        <motion.img
          src={mentoriaPessoalImage2.src}
          alt="Image 2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          VOCÊ SE SENTE PROFUNDAMENTE FRUSTRADO COM A FALTA DE PROGRESSO EM
          DIREÇÃO AOS SEUS OBJETIVOS E COM O RUMO ATUAL DA SUA VIDA? E PARA
          PIORAR, NÃO SABE COMO MUDAR ISSO?
        </motion.p>
      </ContentRowWrapper>

      <ContentRowWrapper>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          VOCÊ ESTÁ SE SENTINDO INSEGURA SOBRE A SUA VIDA AGORA? ESTÁ
          ENFRENTANDO INCERTEZAS NO TRABALHO, PROBLEMS DE SAÚDE, OU OUTRAS ÁREAS
          DA SUA VIDA?
        </motion.p>
        <motion.img
          src={mentoriaPessoalImage3.src}
          alt="Image 3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      </ContentRowWrapper>
      <WantToParticipateButton />
    </motion.section>
  );
}
