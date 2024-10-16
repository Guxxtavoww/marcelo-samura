'use client';

import { motion } from 'framer-motion';

import { WantToParticipateButton } from '@/app/_components/want-to-participate-button';
import { workshopsKickingTheBucketImage } from '@/assets';

export function KickingTheBucket() {
  return (
    <section
      className="container-wrapper text-center space-y-3.5"
      id="kicking-the-bucket"
    >
      <motion.h2
        className="section-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        CHUTANDO O BALDE
      </motion.h2>
      <motion.h3
        className="text-2xl font-bold text-[#a73520] !mb-7"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Começe a viver a vida dos seus sonhos.
      </motion.h3>
      <motion.h4 className="text-xl font-extrabold">
        O RENASCER É UMA ESCOLHA E O<br />
        CAMINHO SE CHAMA, AUTOCONHECIMENTO.
      </motion.h4>
      <WantToParticipateButton />
      <motion.p
        className="text-lg font-medium text-center leading-9 !mb-6"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Você está de saco cheio da vida que está levando e não encontra um
        caminho para mudar... Está cansado de ouvir os gurus da internet
        dizendo, está com medo! Vai com medo mesmo, mude a sua vida!... <br />
        Você sente que existe algo de errado na sua vida e nem imagina quem
        controla os seus pensamentos, sentimentos e emoções , deixando-a triste
        e infeliz...
        <br />
        Vamos nos preparar e planejar direito para chutar o balde e mudar a sua
        vida. Viva a vida dos seus sonhos, sem medo, sem preocupação, sem
        ansiedade e depressão, é necessário passar por este treinamento e
        aprender a estar completo de si mesmo. Chutando o balde é um mergulho
        verdadeiro e profundo em sua alma.
      </motion.p>
      <motion.h4 className="text-xl font-extrabold">
        O ÚNICO TRABALHO QUE O SER HUMANO TEM POR OBRIGAÇÃO <br /> É O DE
        DESVENDAR A SI MESMO.
      </motion.h4>
      <motion.p
        className="text-lg font-medium text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Infelizmente a maioria das pessoas se desenvolvem ao longo da vida por
        padrões comportamentais, provindos da família ou por uma percepção do
        que observam do mundo exterior. Naturalmente as transformam em meros
        escravos de valores, crenças, regras, paradigmas, e isso causa uma
        enorme cegueira de quem realmente ela é e para piorar criam um
        personagem que se adapta a ser moldado de acordo com a experiência de
        vida material que lhe é imposta.
      </motion.p>
      <motion.p
        className="text-lg font-medium text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Essa realidade de vida que lhe é imposta ocultamente não se alinha com o
        que VOCÊ é na essência e este caminho te leva a todos os tipos de dor e
        sofrimento!
      </motion.p>
      <motion.p
        className="text-lg font-medium text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Para romper esta realidade ilusória e parar de saciar os desejos do
        próprio ego, é necessário chutar o balde e se aprofundar na sua reforma
        íntima, encontrar o seu verdadeiro eu e ter uma vida realmente plena,
        equilibrada entre corpo, alma e espírito.
      </motion.p>
      <motion.h4
        className="text-xl font-extrabold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        O CAMINHO DO SUCESSO É PAVIMENTADO COM PREPARAÇÃO, PERSEVERANÇA E
        COMPLITUDE DE SI MESMO.
      </motion.h4>
      <motion.img
        src={workshopsKickingTheBucketImage.src}
        alt="KTB Image"
        className="mx-auto rounded-md shadow-lg"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      />
      <motion.p
        className="text-lg font-medium text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Se você se sente perdido e sem direção na vida, este treinamento é
        exatamente o que você precisa. <br />
        Juntos, vamos deixar para trás a vida sem propósito e superar as crenças
        limitantes que o mantêm preso a uma realidade ilusória. Mude sua
        mentalidade, não tenha medo. É hora de aprender a se preparar e tomar as
        decisões corretas em sua vida. Chega de cometer os mesmos erros. Vamos
        juntos cultivar energias positivas e adotar ações práticas, benevolentes
        e altruístas que transformarão seu corpo, alma e espírito.
      </motion.p>
      <motion.h4
        className="text-xl font-extrabold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        NADA É MAIS PODEROSO DO QUE VIVER VOCÊ EM ESSÊNCIA.
      </motion.h4>
      <WantToParticipateButton />
    </section>
  );
}
