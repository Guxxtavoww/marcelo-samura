'use client';

import { motion } from 'framer-motion';

import { WantToParticipateButton } from '@/app/_components/want-to-participate-button';

export function HumanBehavior() {
  return (
    <section
      className="container-wrapper text-center space-y-4"
      id="human-behavior"
    >
      <motion.h2
        className="section-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        Comportamento Humano
      </motion.h2>
      <motion.h3
        className="text-3xl font-bold text-[#a73520] !mb-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        A chave para a espiritualidade.
      </motion.h3>
      <motion.h5
        className="font-bold text-xl !mb-4"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Descubra o Poder do Comportamento Humano e Abra as Portas para a
        Espiritualidade!
      </motion.h5>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Você já se perguntou como o comportamento humano pode influenciar
        diretamente sua jornada espiritual? Se está em busca de um entendimento
        mais profundo de si mesmo e de sua conexão com o universo, esta é a
        oportunidade que você estava esperando!
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Apresentamos a palestra &quot;Comportamento Humano: A Chave para a
        Espiritualidade&quot;, um evento transformador que promete abrir seus
        olhos para a relação intrínseca entre nossas ações, pensamentos e a
        busca pela espiritualidade.
      </motion.p>
      <motion.p
        className="font-bold text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Por que você não pode perder?
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Descubra os segredos do comportamento humano: Entenda como nossos
        padrões de comportamento moldam nossa percepção e interação com o mundo
        espiritual.
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Desperte seu verdadeiro potencial: Aprenda técnicas e insights que irão
        ajudá-lo a alinhar suas ações diárias com sua jornada espiritual.
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Ciência e espiritualidade de mãos dadas: Explore conceitos baseados em
        estudos científicos que comprovam a interligação entre mente, corpo e
        espírito.
      </motion.p>
      <motion.p
        className="font-bold text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        O que você vai ganhar?
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        Autoconhecimento Profundo: Ferramentas para compreender e modificar{' '}
        <br />
        comportamentos que bloqueiam seu crescimento espiritual. <br /> Harmonia
        Interior: Estratégias para alcançar um estado de paz e equilíbrio,{' '}
        <br />
        integrando mente e espírito. <br /> Transformação de Vida: Inspiração
        para viver de acordo com seus valores espirituais, <br /> promovendo uma
        mudança positiva em todas as áreas da sua vida.
      </motion.p>
      <motion.p
        className="font-bold text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Quem deve participar?
      </motion.p>
      <motion.p
        className="font-medium text-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Pessoas em busca de crescimento pessoal e espiritual. <br /> Indivíduos
        interessados em entender melhor seus próprios comportamentos e suas{' '}
        <br />
        implicações espirituais. Todos que desejam uma vida mais equilibrada,
        harmônica e <br /> alinhada com princípios espirituais.
      </motion.p>
      <WantToParticipateButton />
    </section>
  );
}
