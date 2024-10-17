'use client';

import { WantToParticipateButton } from '@/app/_components/want-to-participate-button';
import { motion } from 'framer-motion';

export function FamilyDrugs() {
  return (
    <section
      className="container-wrapper text-center space-y-4"
      id="family-drugs"
    >
      <motion.h2
        className="section-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        DROGAS
      </motion.h2>
      <motion.h3
        className="text-3xl font-bold text-[#a73520] !mb-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        A Destruição da sua família
      </motion.h3>
      <h4 className="text-2xl font-bold">
        APRENDA A SE PREVENIR DO SUBMUNDO SOMBRIO E OCULTO DAS DROGAS QUE
        DESTRÓI FAMÍLIAS.
      </h4>
      <WantToParticipateButton />
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Entenda o Impacto Devastador das Drogas dentro da Sua Família.
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Você está preocupado com o bem-estar e a segurança da sua família? Já
        imaginou como as drogas podem entrar sorrateiramente em sua vida,
        causando danos irreparáveis? A palestra &quot;Drogas: A Destruição da
        sua Família&quot; é essencial para todos que desejam proteger seus entes
        queridos e prevenir um desastre.
      </motion.p>
      <motion.p
        className="font-bold text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Por que você não pode perder esta palestra?
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Conheça os tipos de drogas mais comuns e os sinais de alerta que podem
        passar despercebidos. Descubra como o uso de drogas afeta não apenas o
        usuário, mas toda a família, gerando conflitos, perdas financeiras e
        emocionais
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Aprenda estratégias eficazes para manter sua família segura e afastada
        do mundo das drogas.
      </motion.p>
      <motion.p
        className="font-bold text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        O que você vai ganhar?
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Informações detalhadas sobre os efeitos das drogas e como identificá-los{' '}
        precocemente. Métodos práticos para educar e proteger seus filhos e
        outros membros da família. Recursos e contatos que podem fornecer ajuda
        imediata em caso de necessidade.
      </motion.p>
      <motion.p
        className="font-bold text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Quem deve participar?
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Pais e responsáveis que desejam um ambiente seguro e saudável para seus
        filhos. Educadores e profissionais de saúde interessados em combater o
        uso de drogas em suas comunidades. Qualquer pessoa preocupada com o
        impacto das drogas na sociedade e em suas vidas pessoais.
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Não deixe que as drogas destruam o que você mais ama. A informação é a
        sua melhor defesa. Inscreva-se agora na palestra &quot;Drogas: A
        Destruição da sua Família&quot; e dê o primeiro passo para um futuro
        mais seguro e saudável para todos ao seu redor.
      </motion.p>
      <WantToParticipateButton />
    </section>
  );
}
