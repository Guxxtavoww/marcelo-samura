'use client';

import { motion } from 'framer-motion';

import { WantToParticipateButton } from '@/app/_components/want-to-participate-button';

export function Hakusho() {
  return (
    <section className="container-wrapper space-y-6 text-center" id="hakusho">
      <motion.h2
        className="section-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        Hakusho
      </motion.h2>
      <motion.h3
        className="text-2xl font-bold text-[#a73520] !mb-7"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Escreva a sua inovadora vida futura.
      </motion.h3>
      <motion.h4
        className="text-3xl font-extrabold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        &quot;Olhe para a vida como um livro em branco, nele você aprende a
        escrever capítulos tristes e outros alegres, ambos, lapidam a sua alma”.
      </motion.h4>
      <WantToParticipateButton />
      <motion.p
        className="text-lg font-medium leading-8"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Todo ser humano vivência momentos adversos ao longo da sua jornada e
        cria internamente aquela sensação de que nada tem sentido na vida. Gera
        uma mistura de sentimentos, se sente solitário, abandonado, triste,
        angustiado, para piorar, não sabe o que fazer da sua vida ou para qual
        direção guiá-la... eu te entendo! A tomada de decisão de mudar a sua
        vida não é nada fácil, mas não é impossível.
      </motion.p>
      <motion.p
        className="text-lg font-medium leading-8"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Tomar a decisão de recomeçar, pode te fazer sentir medo e insegurança,
        especialmente quando já fez escolhas que não saíram como você esperava.
        Mas tenha em sua consciência que a cada segundo temos a oportunidade de
        recomeçar a nossa vida e abrir espaço para um mundo de novas
        possibilidades!
      </motion.p>
      <motion.h4
        className="text-3xl font-extrabold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        ERRAR NÃO É O FIM!
        <br /> É SOMENTE UM APRENDIZADO QUE TE LEVARÁ PARA <br /> UMA NOVA
        JORNADA EM SUA VIDA.
      </motion.h4>
      <motion.p
        className="text-lg font-medium leading-8"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        O grande ponto a ser refletido é, você tem que parar de mentir para si
        mesmo e encarar a realidade nua e crua, na qual você se encontra.
        Esperar a vida passar pode até ser confortável, mas não te trará o que
        você deseja, ou seja, desvendar quem verdadeiramente somos e qual o seu
        propósito de vida é o único caminho para um novo recomeço.
      </motion.p>
      <motion.p
        className="text-lg font-medium leading-8"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Seja audacioso, paciente, confiante e viva o que você nasceu para ser!
        Para tal feito, temos um caminho inovador no seu mais novo processo, o
        treinamento Hakusho. Ele te trará esse autoconhecimento necessário para
        a sua tomada de decisão e será a sua bússola nesse novo caminhar!
        Lembre-se você não está sozinho!
      </motion.p>
      <WantToParticipateButton />
    </section>
  );
}
