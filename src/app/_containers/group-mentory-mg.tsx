'use client';

import { motion } from 'framer-motion';

import { mentoriaEmGrupoImage1, mentoriaEmGrupoImage2 } from '@/assets';

import { WantToParticipateButton } from '../_components/want-to-participate-button';

export function GroupMentoryMG() {
  return (
    <motion.section
      className="container-wrapper space-y-5 text-center"
      id="group-mentory-mg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        MENTORIA EM GRUPO- MG
      </motion.h2>
      <motion.p
        className="font-medium text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.2 }}
      >
        Desenvolvimento Pessoal e Espiritual
      </motion.p>
      <motion.h3
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.4 }}
      >
        Está perdido e não sabe o que fazer para mudar a sua vida?
        <br />
        Gostaria de ter alguém que pudesse compartilhar...?
      </motion.h3>
      <WantToParticipateButton />
      <motion.div
        className="flex items-center gap-8 w-full flex-wrap max-md:flex-col !mb-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.6 }}
      >
        <motion.img
          src={mentoriaEmGrupoImage1.src}
          alt="Grupo 1"
          className="rounded-md shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.8 }}
        />
        <motion.div
          className="flex-[1] space-y-3.5 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 1 }}
        >
          <p className="text-xl font-medium leading-10">
            Imagine ter alguém ao seu lado para compartilhar suas dúvidas e
            medos, e guiar você rumo à transformação que deseja. Não enfrente
            essa jornada sozinho. Encontre o apoio que você merece e transforme
            sua vida agora.
          </p>
          <p className="text-xl font-medium leading-10">
            Você não está mais sozinho na sua jornada, agora terá alguém que
            compreendará seus desafios e esteja ao seu lado em cada passo do
            caminho. Você não precisa enfrentar tudo isso sozinho. Encontre o
            apoio que merece e comece sua transformação agora. Juntos, podemos
            iluminar seu caminho para uma vida melhor.
          </p>
        </motion.div>
      </motion.div>
      <motion.h3
        className="text-center text-3xl font-bold !mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 1.2 }}
      >
        Pare de esperar por alguém para cuidar de você.
        <br />
        Mude a sua mentalidade e invista em um futuro melhor agora!
      </motion.h3>
      <motion.div
        className="flex justify-between items-center gap-8 w-full max-md:justify-center max-md:flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 1.4 }}
      >
        <motion.div
          className="space-y-3.5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 1.6 }}
        >
          <p className="text-xl font-medium leading-10">
            A história da humanidade é pontuada por momentos caóticos, períodos
            de incerteza, crises e mudanças. No entanto, um aspecto que continua
            a chamar a atenção é o predomínio do egocentrismo e do
            individualismo nas interações sociais. Nesta jornada de mentoria,
            propomos desafiar esse paradigma, buscando aprender com as
            experiências e perspectivas dos outros. Ao nos abrirmos para o
            aprendizado mútuo, fortalecemos laços e adquirimos uma compreensão
            mais profunda da realidade da vida, sem filtros ou disfarces.
          </p>
          <p className="text-xl font-medium leading-10">
            Durante este evento, você irá aprender técnicas desenvolvidas por
            Marcello Samura, utilizando uma metodolofia chamada, Hakusho,
            através dela você fará mudanças duradouras em sua vida. As sessões
            serão agendadas de acordo com a formação do grupo, que será mediante
            encontros virtuais ou presenciais.
          </p>
        </motion.div>
        <motion.img
          src={mentoriaEmGrupoImage2.src}
          alt="Grupo 2"
          className="rounded-md shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 1.8 }}
        />
      </motion.div>
      <motion.h3
        className="text-2xl font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 2 }}
      >
        LIGUE E ENTRE NA LISTA DE ESPERA PARA SER AVISADO DO PRÓXIMO EVENTO.
      </motion.h3>
      <WantToParticipateButton />
    </motion.section>
  );
}
