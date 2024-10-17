'use client';

import { WantToParticipateButton } from '@/app/_components/want-to-participate-button';
import { motion } from 'framer-motion';

export function CompanyDrugs() {
  return (
    <section
      className="container-wrapper space-y-4 text-center"
      id="company-drugs"
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
        Um mal oculto dentro das empresas
      </motion.h3>
      <h4 className="text-2xl font-bold">
        DESCUBRA O MAL OCULTO QUE ESTÁ DESTRUINDO A SUA EMPRESA DE DENTRO PARA
        FORA!
      </h4>
      <WantToParticipateButton />
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Você sabe o que está acontecendo nos bastidores da sua empresa? Muitas
        organizações enfrentam um inimigo invisível que corrói a produtividade,
        a moral e, eventualmente, os lucros. A palestra Drogas &quot;Um Mal
        Oculto Dentro das Empresas&quot; é uma chamada urgente para todos os
        líderes que desejam proteger e fortalecer seu negócio.
      </motion.p>
      <motion.p
        className="font-bold text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Por que você não pode perder esta palestra?
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Identifique as ameaças ocultas que podem estar sabotando o sucesso da
        sua empresa sem que você perceba.
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Entenda como esses problemas subterrâneos afetam diretamente a
        produtividade, a cultura corporativa e a rentabilidade.
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Aprenda métodos eficazes para detectar e neutralizar esses males antes
        que causem danos irreparáveis.
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
        Conhecimento aprofundado sobre as dinâmicas ocultas que podem estar
        minando o ambiente de trabalho. Técnicas práticas e comprovadas para
        identificar e combater os problemas de forma eficaz. Estratégias para
        cultivar uma cultura empresarial positiva e resiliente, promovendo o
        bem-estar de todos os colaboradores.
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
        Executivos e líderes empresariais que desejam assegurar a saúde e a
        longevidade de suas organizações. Gestores de RH e profissionais de
        desenvolvimento organizacional focados em criar um ambiente de trabalho
        positivo. Qualquer pessoa interessada em entender e resolver os
        problemas ocultos que afetam o desempenho e a moral das equipes.
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Não deixe que um mal oculto destrua o que você construiu com tanto
        esforço. A informação e a ação são suas melhores defesas. Inscreva-se
        agora na palestra &quot;Um Mal Oculto Dentro das Empresas&quot; e proteja o futuro
        da sua organização.
      </motion.p>
      <WantToParticipateButton />
    </section>
  );
}
