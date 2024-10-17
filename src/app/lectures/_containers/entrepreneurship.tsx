'use client';

import { motion } from 'framer-motion';

import { WantToParticipateButton } from '@/app/_components/want-to-participate-button';

export function Entrepreneurship() {
  return (
    <section
      className="container-wrapper text-center space-y-4"
      id="entrepreneurship"
    >
      <motion.h2
        className="section-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        Desperte o Empreendedor em Você.
      </motion.h2>
      <motion.h3
        className="text-3xl font-bold text-[#a73520] !mb-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        O Segredo para Começar do Zero e Alcançar o Sucesso!
      </motion.h3>
      <h4 className="text-2xl font-bold">
        A FÓRMULA SIMPLES PARA VENCER DESAFIOS E TRANSFORMAR IDEIAS EM SUCESSO
        DURADOURO!
      </h4>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Você já sentiu que tem potencial, mas não sabe por onde começar para
        transformar suas ideias em algo concreto? Nesta palestra exclusiva, você
        vai aprender o passo a passo para tirar seus sonhos do papel e começar
        do zero, mesmo sem grandes recursos. Eu já vi pessoas comuns, como você,
        superarem medos, incertezas e conquistarem liberdade financeira e
        realização pessoal. E não pense que é tarde demais para você, o momento
        certo para agir é agora
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Você será guiado por histórias reais de sucesso, de pessoas que
        enfrentaram desafios parecidos com os seus e, com as estratégias certas,
        mudaram suas vidas completamente. Imagine como seria alcançar seus
        objetivos e finalmente ter o controle do seu futuro. Isso é possível
        para você também, e eu vou mostrar como. Você sairá a palestra com
        ferramentas práticas para aplicar imediatamente, e uma visão clara de
        como começar essa transformação. Tudo o que você precisa é estar
        disposto a dar o primeiro passo — e eu estou aqui para te ajudar a fazer
        isso.
      </motion.p>
      <motion.p
        className="font-bold text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        A Realidade que Muitos Vivem
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        &quot;Se você se sente estagnado, com medo de dar o primeiro passo, ou
        acha que não tem os recursos necessários para empreender, saiba que você
        não está sozinho.&quot;
      </motion.p>
      <motion.p
        className="font-bold text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        O Que Você Vai Aprender
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        &quot;Nesta palestra, você vai descobrir as chaves para começar do zero,
        com estratégias que poucos conhecem.&quot;
      </motion.p>
      <motion.p
        className="font-bold text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        O Custo da Inação
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        &quot;Cada dia que você adia sua decisão, você se distancia dos seus
        sonhos.&quot;
      </motion.p>
      <motion.p
        className="font-bold text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Uma Jornada que Pode Ser Sua
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        &quot;Imagine daqui a um ano, onde você poderia estar se desse o
        primeiro passo hoje?&quot;
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        O caminho do empreendedorismo é feito de desafios, mas também de grandes
        recompensas. Você tem o poder de escrever uma nova história para si
        mesmo, basta ter coragem de agir. Não deixe o medo ou as dúvidas
        controlarem seu destino. A oportunidade está aqui, agora, e tudo começa
        com uma decisão.
      </motion.p>
      <WantToParticipateButton />
    </section>
  );
}
