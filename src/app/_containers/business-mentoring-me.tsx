'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { bussinessMentoringMEData } from '@/data/business-mentoring-me.data';
import { mentoriaEmpresarialImage1, mentoriaEmpresarialImage2 } from '@/assets';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { BuyNowWidget } from './who-is-personal-mentorship-for';
import { WantToParticipateButton } from '../_components/want-to-participate-button';

export function BusinessMentoringME() {
  return (
    <motion.section
      className="container-wrapper text-center space-y-4"
      id="business-mentoring-me"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        MENTORIA EMPRESARIAL- ME
      </motion.h2>
      <motion.h4
        className="text-2xl font-semibold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Está enfrentando dificuldades na sua vida pessoal e empresarial?
        <br />
        Você gostaria de ter alguém que pudesse compartilhar...?
      </motion.h4>
      <WantToParticipateButton />
      <motion.div
        className="flex items-center gap-6 max-md:flex-col !mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="leading-10 text-lg font-medium">
            Ser empresário é uma jornada repleta de desafios diários,
            enfrentando concorrência feroz, problemas de fluxo de caixa e a
            pressão constante para inovar e crescer. Além disso, você lida com
            questões que afetam profundamente sua vida pessoal e relacionamentos
            com as pessoas. Gerenciar uma empresa vem com uma enorme
            responsabilidade: sustentar famílias, inspirar a equipe e realizar
            sonhos. Isso pode levar a estresse, isolamento e desequilíbrio entre
            vida profissional e pessoal.
          </p>
          <p className="leading-10 text-lg font-medium">
            A linha entre trabalho e casa se torna indistinta, gerando culpa por
            não estar presente para a família e amigos. O estresse constante
            pode levar à exaustão, depressão ou ansiedade. Não enfrente esses
            desafios sozinho. Juntos, podemos criar um futuro onde você e seu
            negócio prosperem. Invista em você e veja como isso se refletirá em
            todos os aspectos da sua vida. Transforme sua jornada empresarial e
            pessoal hoje. O futuro que você deseja começa com a decisão que toma
            agora.
          </p>
        </motion.div>
        <motion.img
          src={mentoriaEmpresarialImage2.src}
          alt="Empresarial 2"
          className="rounded-md shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        />
      </motion.div>
      <motion.h4
        className="text-center font-bold text-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        Está cansado de carregar o piano sozinho? Transforme e ilumine o seu
        caminho. <br />
        Você gostaria de ter alguém que pudesse compartilhar...?
      </motion.h4>
      <WantToParticipateButton />
      <motion.div
        className="flex items-center gap-6 !mb-6 max-md:flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <motion.img
          src={mentoriaEmpresarialImage1.src}
          alt="Empresarial 1"
          className="rounded-md shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
        />
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        >
          <p className="leading-10 text-lg font-medium">
            Ser empresário é uma jornada repleta de desafios diários,
            enfrentando concorrência feroz, problemas de fluxo de caixa e a
            pressão constante para inovar e crescer. Além disso, você lida com
            questões que afetam profundamente sua vida pessoal e relacionamentos
            com as pessoas. Gerenciar uma empresa vem com uma enorme
            responsabilidade, sustentar famílias, inspirar a equipe e realizar
            sonhos. Isso pode levar a estresse, isolamento e desequilíbrio entre
            vida profissional e pessoal.
          </p>
          <p className="leading-10 text-lg font-medium">
            A linha entre trabalho e casa se torna indistinta, gerando culpa por
            não estar presente para a família e amigos. O estresse constante
            pode levar à exaustão, depressão ou ansiedade. Não enfrente esses
            desafios sozinho. Juntos, podemos criar um futuro onde você e seu
            negócio prosperem. Invista em você e veja como isso se refletirá em
            todos os aspectos da sua vida. Transforme sua jornada empresarial e
            pessoal hoje. O futuro que você deseja começa com a decisão que toma
            agora.
          </p>
        </motion.div>
      </motion.div>
      <motion.h2
        className="section-heading !text-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        A Mentoria Empresarial serve para quem?
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 grid-rows-3 gap-8 max-md:grid-cols-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15, duration: 0.7 }}
      >
        {bussinessMentoringMEData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-4 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Image
              src={item.iconSrc}
              alt={`Bussiness ${index}`}
              width={60}
              height={50}
            />
            <h4 className="text-[#a73520] text-xl font-bold">{item.title}</h4>
            <p className="leading-10 font-medium">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.h2
        className="section-heading !text-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        QUANDO É HORA DE BUSCAR UMA MENTORIA EMPRESARIAL?
      </motion.h2>
      <motion.p
        className="text-xl font-semibold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        Se o barco da sua empresa está afundando e o seu orgulho está impedindo
        de <br /> realizar as mudanças necessárias, é hora de buscar ajuda
        urgentemente.
      </motion.p>
      <WantToParticipateButton />
      <motion.p
        className="text-xl font-semibold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        ATRAVÉS DESTA MENTORIA, VOCÊ DOMINARÁ AS FERRAMENTAS E ESTRATÉGIAS
        FUNDAMENTAIS <br /> QUE O AJUDARÃO A LIDERAR, CRESCER E PROSPERAR A SUA
        VIDA PROFISSIONAL E PESSOAL.
      </motion.p>
      <motion.h2
        className="section-heading !text-2xl mb-4"
        whileInView={{ opacity: [0, 1], y: [-50, 0] }}
        transition={{ duration: 0.8 }}
      >
        MENTORIA EMPRESARIAL- ME
      </motion.h2>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-bold text-[#a73520] mb-5">PLANO</h3>
        <Accordion type="single" value="1">
          <AccordionItem value="1">
            <AccordionTrigger className="text-[#264653] text-lg font-semibold">
              ME-4 MESES
            </AccordionTrigger>
            <AccordionContent>
              <p>
                A mentoria empresarial serve para apoiar, guiar e desenvolver
                empresários, executivos e líderes em suas carreiras e na gestão
                de seus negócios.
              </p>
              <p>Duração: 4 meses</p>
              <p>
                Número de Sessões: 90 - (5 por semana -Seg à Sex) - limite 30
                minutos exceto a primeira sessão
              </p>
              <p className="!font-bold text-[#a73520]">
                OBS: Sessões Individuais
              </p>
              <p>
                Suporte: Acesso por telefone, vídeoconferência, com resposta
                prioritária por ligação,audio ou msg
              </p>
              <p>
                Recursos: Materiais complementares no blog, exercícios práticos.
              </p>
              <p>Energização: 16</p>
              <p>Imersão: 1</p>
              <BuyNowWidget />
              <p className="!font-bold">
                O valor da mentoria Marcello Samura é de 12x R$ R$ R$ 1.080,33,
                ou se preferir pagar à vista, R$ 11.696,99
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
    </motion.section>
  );
}
