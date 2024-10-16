'use client';

import { motion } from 'framer-motion';

import { WantToParticipateButton } from '@/app/_components/want-to-participate-button';

export function Humanize() {
  return (
    <section
      className="container-wrapper text-center space-y-3.5"
      id="humanize"
    >
      <motion.h2
        className="section-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        SER + HUMANO
      </motion.h2>
      <motion.h3
        className="text-2xl font-bold text-[#a73520] !mb-7"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Treinamento e Desenvolvimento (T&D) Comportamental
      </motion.h3>
      <motion.p
        className="!mb-6 text-lg font-medium leading-9"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        &quot;Bem-vindo ao treinamento &apos;Ser + Humano&apos;: uma jornada de
        desenvolvimento comportamental dedicada a aprimorar não apenas suas
        habilidades técnicas, mas também sua essência humana. Este programa de
        Treinamento e Desenvolvimento (T&D) oferece uma abordagem holística para
        cultivar uma mentalidade mais empática, colaborativa e resiliente. Ao
        mergulhar neste processo de crescimento pessoal e profissional, você
        será capacitado a não apenas alcançar seus objetivos, mas também a
        construir relacionamentos mais significativos e satisfatórios.
        Prepare-se para uma transformação que transcende o âmbito profissional e
        impacta positivamente todas as áreas da sua vida.&quot;
      </motion.p>
      <motion.h3
        className="font-bold text-3xl"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        A EDUCAÇÃO É A BASE DO RESPEITO.
      </motion.h3>
      <motion.p
        className="!mb-6 text-lg font-medium leading-9"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        A dinâmica tecnológica no universo empresarial e pessoal, leva as
        pessoas a se desconectarem da sua própria essência, a “Humana”.
        Infelizmente isto causa um enorme problema no ato de se relacionar com o
        seu semelhante, tanto no núcleo social, mas principalmente, no universo
        empresarial. Causando assim, uma enorme necessidade de treinamento e
        desenvolvimento de pessoas. Nosso desafio é “Humanizar” o ato de se
        relacionar entre os seus colaboradores, através do campo da consciência.
        Infelizmente esse é um problema que ocorre diariamente nas empresas e
        afeta diretamente no resultado financeiro delas. Segundo uma pesquisa,
        de 6 em cada 10 colaboradores, necessitarão de treinamento antes de
        2027, mas só metade deles tem acesso à jornada de desenvolvimento?
      </motion.p>
      <motion.p
        className="!mb-6 text-lg font-medium leading-9"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Você, empresário , já mediu se a sua equipe necessita de um
        aprimoramento no que tange, desenvolvimento pessoal. E você líder,
        conseguiu detectar a necessidade de se permitir aprimorar-se, para gerir
        pessoas. Saiba, são elas que irão garantir o cumprimento das suas
        necessidades e metas profissionais. O papel deste Treinamento e
        Desenvolvimento (T&D) além de impulsionar o desenvolvimento individual e
        crescimento das empresas, visa transformar a vida das pessoas de forma
        que impacte a sociedade humana.
      </motion.p>

      <motion.h4
        className="font-extrabold text-2xl"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        “CONHEÇA TODAS AS TEORIAS, DOMINE TODAS AS TÉCNICAS, MAS AO TOCAR UMA
        ALMA <br /> HUMANA, SEJA APENAS OUTRA ALMA HUMANA.”CARL JUNG
      </motion.h4>
      <p className="font-bold text-xl !mb-4">
        FALE COM UM ESPECIALISTA EM RESULTADOS PESSOAIS!
      </p>
      <WantToParticipateButton />
    </section>
  );
}
