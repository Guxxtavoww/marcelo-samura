'use client';

import { motion } from 'framer-motion';

import { WantToParticipateButton } from '@/app/_components/want-to-participate-button';

export function BeMoreHuman() {
  return (
    <section
      className="container-wrapper space-y-4 text-center"
      id="be-more-human"
    >
      <motion.h2
        className="section-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        Ser + “Humano”
      </motion.h2>
      <motion.h3
        className="text-3xl font-bold text-[#a73520] !mb-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        A Chave para Alta Performance no seu Negócio
      </motion.h3>
      <WantToParticipateButton />
      <motion.p
        className="text-2xl font-bold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Redefina o futuro da sua empresa aprendendo a lidar com, pessoas,
        humanizando mais o campo comportamental delas no processo, será
        inevitável, o sucesso. <br />
        Crie um novo norte para os seus negócios e saiba chegar exatamente onde
        você quer chegar, prepare-se, humanizar é o caminho.
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Desbloqueie o potencial do seu negócio e deseje que o alto desempenho
        com o Ser + &quot;Humano&quot; flua no seu processo de trabalho diário.
        <br />
        Você está pronto para levar seu negócio para o próximo nível?
        Apresentando a Palestra transformadora, Ser + &quot;Humano&quot; – A
        Chave para o Alta Performance em sua empresa, tudo mudará,
        principalmente o clima organizacional.
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Em um mundo onde a tecnologia e a automação dominam, a verdadeira
        vantagem competitiva está em abraçar nossa humanidade. Nosso palestrante
        irá guiá-lo para aproveitar o poder da inteligência emocional, empatia e
        conexões autênticas, impulsionando você e sua equipe a alturas
        incomparáveis.
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Junte-se a nós para uma experiência imersiva onde você participará de
        sessões interativas, estudos de caso do mundo real e atividades
        práticas. Saia com insights acionáveis e um senso de propósito renovado.
        Não perca esta oportunidade de transformar o seu negócio e vida pessoal.
        Inscreva-se agora e embarque em uma jornada para se tornar mais humano,
        mais conectado e mais bem-sucedido do que nunca.
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Cadastre-se hoje e comece seu caminho para a alta performance! Vagas
        limitadas disponíveis. Garanta seu lugar e invista em um futuro onde sua
        humanidade se torne seu maior patrimônio.
      </motion.p>
      <motion.h4
        className="text-2xl font-bold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        ENTRE EM CONTATO COM A NOSSA EQUIPE.
      </motion.h4>
      <WantToParticipateButton />
    </section>
  );
}
