'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { couplesMentoryMCData } from '@/data/couples-mentory-mc.data';
import { mentoriaParaCasalImage1, mentoriaParaCasalImage2 } from '@/assets';

import { BuyNowWidget } from './who-is-personal-mentorship-for';
import { WantToParticipateButton } from '../_components/want-to-participate-button';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function CouplesMentoryMC() {
  return (
    <section className="container-wrapper text-center" id="couples-mentory-mc">
      <motion.h2
        className="section-heading mb-3"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        MENTORIA PARA CASAIS - MC
      </motion.h2>

      <motion.p
        className="text-xl font-semibold text-center mb-3"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.1 }}
        variants={fadeInUp}
      >
        O seu casamento está em crise e o divórcio parece inevitável? <br />
        Supere o medo e encontre soluções com nossa orientação especializada!
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={fadeInUp}
      >
        <WantToParticipateButton className="mb-12" />
      </motion.div>

      <motion.div
        className="grid grid-cols-2 gap-2 place-items-center mb-10"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        variants={fadeInUp}
      >
        <motion.img
          src={mentoriaParaCasalImage1.src}
          className="rounded-md shadow-lg"
        />
        <motion.div className="flex flex-col gap-3 max-h-fit">
          <h3 className="text-2xl font-bold text-center">
            Você tem medo do divórcio? <br /> Não está sabendo como resolver?
          </h3>
          <p className="text-lg leading-10">
            Ao longo do tempo, todo casamento enfrenta altos e baixos únicos. Às
            vezes, os problemas parecem impossíveis de serem resolvidos. Porém,
            em 8 anos de Mentoria, aprendi que tudo é possível, desde de que, o
            casal reconhece a necessidade de mudar. Este processo não só resolve
            os conflitos, mas também transforma e fortalece a relação. Acredite:
            investir na sua relação, mesmo quando a mudança parece impossível,
            pode salvar seu casamento e a estrutura da sua família, caso tenha
            filhos.
          </p>
        </motion.div>
      </motion.div>

      <motion.h3
        className="text-4xl font-semibold text-center mb-10"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={fadeInUp}
      >
        Separação! Você gostaria de ter alguém que pudesse compartilhar...?
      </motion.h3>

      <div className="w-full flex items-center gap-3.5 mb-10">
        <motion.img
          src={mentoriaParaCasalImage2.src}
          alt="Mentoria para casal image 2"
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ duration: 0.8 }}
          className="rounded-md shadow-lg"        />
        <motion.div
          className="text-center space-y-4 flex-[1]"
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-[#264653] text-center text-2xl font-bold">
            Não Procrastine! <br />
            <span className="text-xl">
              Transforme o Seu Relacionamento com a Mentoria para Casais
            </span>
          </h4>
          <p className="text-lg leading-10 text-center">
            Você sente que seu relacionamento está preso em um ciclo de
            conflitos e desentendimentos? A Mentoria para Casais pode ser a
            chave para transformar e renovar a sua relação, ajudando vocês a
            superarem problemas e lidarem construtivamente com os desafios. Ela
            não apenas fortalece a conexão entre você e o seu parceiro, mas
            também, com os filhos. Este processo é projetado para ajudar os
            casais a enfrentarem e resolverem questões de forma positiva,
            abrindo caminho para uma relação mais harmoniosa e satisfatória.
            Procrastinar pode ser fatal para qualquer relacionamento. Cada dia
            sem agir é um dia perdido na construção de uma vida feliz juntos.
            Não deixe que pequenos problemas se tornem barreiras
            intransponíveis. Invista agora na sua relação com a Mentoria para
            Casais e traga de volta a harmonia e a felicidade que vocês merecem.
            O futuro de vocês começa com a decisão que tomarem hoje. Não espere
            mais. Transforme seu relacionamento agora.
          </p>
          <p className="text-lg leading-10 text-center">
            Procrastinar pode ser fatal para qualquer relacionamento. Cada dia
            sem agir é um dia perdido na construção de uma vida feliz juntos.
            Não deixe que pequenos problemas se tornem barreiras
            intransponíveis. Invista agora na sua relação com a Mentoria para
            Casais e traga de volta a harmonia e a felicidade que vocês merecem.
            O futuro de vocês começa com a decisão que tomarem hoje. Não espere
            mais. Transforme seu relacionamento agora.
          </p>
        </motion.div>
      </div>
      <motion.h3
        className="text-4xl font-semibold text-center mb-10"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={fadeInUp}
      >
        Não espere por um milagre no seu relacionamento! <br />
        Busque ajuda agora mesmo! Antes que seja tarde demais.
      </motion.h3>

      <motion.h2
        className="section-heading !text-3xl mb-5"
        whileInView={{ opacity: [0, 1], y: [-50, 0] }}
        transition={{ duration: 0.8 }}
      >
        A Mentoria para Casais serve para quem?
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 gap-4 place-items-center mb-9 max-md:grid-cols-1"
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        transition={{ duration: 1, staggerChildren: 0.2 }}
      >
        {couplesMentoryMCData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-3.5 flex-[1]"
            whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={item.iconSrc}
              alt={`Icon ${index}`}
              width={126}
              height={79}
            />
            <h5 className="font-bold text-xl text-center">{item.title}</h5>
            <p className="text-center">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.h2
        className="section-heading !text-2xl mb-4"
        whileInView={{ opacity: [0, 1], y: [-50, 0] }}
        transition={{ duration: 0.8 }}
      >
        MENTORIA CASAL - MC
      </motion.h2>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-bold text-[#a73520] mb-5">PLANO</h3>
        <Accordion type="single" value="1">
          <AccordionItem value="1">
            <AccordionTrigger className="text-[#264653] text-lg font-semibold">
              MC-3 MESES
            </AccordionTrigger>
            <AccordionContent>
              <p>
                A mentoria para casais é uma ferramenta poderosa que pode ajudar
                a fortalecer o relacionamento, resolver conflitos, melhorar a
                comunicação e promover um crescimento mútuo saudável. É
                importante que ambos os parceiros estejam comprometidos e
                abertos ao processo para obter os melhores resultados.
              </p>
              <p>Duração: 3 meses</p>
              <p>
                Número de Sessões: 60- (5 por semana -Seg à Sex) - limite 30
                minutos exceto a primeira sessão
              </p>
              <p className="!font-bold text-[#a73520]">
                OBS: Sessões Individuais (30 Para cada Parceiro)
              </p>
              <p>
                Suporte: Acesso por telefone, vídeoconferência, com resposta
                prioritária por ligação, áudio ou msg
              </p>
              <p>
                Recursos: Materiais complementares no blog, exercícios práticos.
              </p>
              <p>Energização: 12</p>
              <p>Imersão: 2</p>
              <BuyNowWidget />
              <p className="!font-bold">
                O valor da mentoria Marcello Samura é de 12x R$ 583,08, ou se
                preferir pagar à vista, R$ 6.396,99
              </p>
              <p className="!font-bold">
                Esse valor inclui todos os itens citados nessa página.
              </p>
              <p className="!font-bold">As formas de pagamento são:</p>
              <p className="!font-bold">
                À vista ou Em até 12x pelo cartão de crédito;
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </section>
  );
}
