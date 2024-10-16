'use client';

import { motion } from 'framer-motion';

import { mppImage1, mppImage2 } from '@/assets';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { BuyNowWidget } from './who-is-personal-mentorship-for';
import { WantToParticipateButton } from '../_components/want-to-participate-button';

export function PremiumPersonalMentoryMPP() {
  return (
    <motion.section
      className="container-wrapper space-y-4 text-center"
      id="premium-personal-mentory-mpp"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        MENTORIA PESSOAL PREMIUM- MPP
      </motion.h2>
      <motion.p
        className="font-semibold text-lg"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Desenvolvimento Pessoal e Espiritual
      </motion.p>
      <motion.h3
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Está na hora de libertar a sua alma. Desvende um novo você!
        <br />
        Transforme a sua vida em 12 meses
      </motion.h3>
      <WantToParticipateButton />
      <motion.p
        className="font-medium text-lg leading-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Às vezes, a vida nos coloca diante de encruzilhadas difíceis.
        Sentimo-nos perdidos, lutando contra a insatisfação na profissão,
        enfrentando conflitos familiares intensos, ou até mesmo desanimados com
        a direção que a política e o mundo tomam. Em meio a tudo isso, é fácil
        perder o sentido, questionar nossas escolhas e até mesmo sentir uma
        angústia profunda.
      </motion.p>
      <motion.img
        src={mppImage1.src}
        alt="Mpp Image 1"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="shadow-lg rounded-md mx-auto min-w-[455px] max-md:min-w-fit"
      />
      <motion.p
        className="font-medium text-lg leading-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Mas há esperança, em cada desafio, há uma oportunidade para
        transformação. Imagine não apenas sobreviver, mas prosperar. Imagine
        redescobrir o propósito, encontrar satisfação na carreira, restaurar
        relacionamentos e fazer a diferença no mundo. Você não precisa enfrentar
        isso sozinho. Tenha coragem para explorar novos caminhos, buscar apoio e
        aprender com as adversidades, é possível encontrar clareza e direção. A
        jornada para uma vida com significado começa com um passo de cada vez.
        Não desista de si mesmo. Invista em sua própria jornada de
        autodescoberta e transformação hoje.
      </motion.p>
      <motion.h4
        className="text-2xl font-bold !mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Descubra o caminho do desenvolvimento pessoal e espiritual...
      </motion.h4>
      <div className="flex items-center gap-8 max-md:flex-col">
        <motion.img
          src={mppImage2.src}
          alt="Mpp Image 2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="shadow-lg rounded-md min-w-[372px] max-md:min-w-fit"
        />
        <motion.div
          className="flex-[1] space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h5 className="text-xl font-bold">
            O maior trabalho na vida é o de desvendar a si mesmo!
          </h5>
          <p className="leading-10 text-base font-medium">
            A mentoria premium é para quem quer realmente virar a sua vida ao
            avesso. Serão 12 meses de mentoria, iremos elaborar um planejamento
            e estratégias personalizadas para você alcançar o seu sucesso
            pessoal e profissional. Iremos causar uma ruptura comportamental que
            te bloqueia a viver a sua verdadeira essência interior, rasgando o
            véu de si mesmo e demonstrando uma outra realidade da vida, o campo
            da espiritualidade.
          </p>
          <p className="leading-10 text-base font-medium">
            Serão varias horas, dias, semanas, meses, que juntos, construiremos
            um novo caminho em sua jornada de vida. Tomar decisão na vida,
            sozinho, não é fácil, mas quando temos um mentor para ajudar, o
            fardo da vida fica mais leve.
          </p>
          <p className="leading-10 text-base font-medium">
            Você vai encontrar o manual completo para transformar a sua vida,
            mesmo que Você ainda não saiba como.
          </p>
        </motion.div>
      </div>
      <WantToParticipateButton />
      <motion.h6
        className="text-lg font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        LIGUE E ENTRE NA LISTA DE ESPERA PARA SER AVISADO E RESERVAR A SUA VAGA.
      </motion.h6>
      <motion.h3
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        O manual completo para quem deseja transformar a sua vida, mas <br />
        ainda não sabe como.
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className='font-medium'
      >
        Você tem uma vida como sempre sonhou? Está se dando a oportunidade de
        viver realmente o que você é, livre para realizar qualquer coisa que
        você deseja? Exterminando da sua vida a insônia, depressão, ansiedade,
        preocupação, pensamentos suicidas, medo e qualquer coisa que te remeta
        ao antigo eu. Através da nossa mentoria, você tem a oportunidade de
        construir um novo caminho de felicidade, amor, prosperidade, abundância,
        fazendo com que a sua vida futura seja plena.
      </motion.p>
      <motion.h3
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        QUANDO É HORA DE BUSCAR UMA MENTORIA PREMIUM?
      </motion.h3>
      <motion.p
        className="text-lg font-semibold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Você tem uma sensação de um vazio interior e não sabe como combatê-lo?
        <br />
        Nada do que você faz tem sentido? <br />
        Todos os campos da sua vida, seja profissional, sentimental, familiar,
        etc., lhe geram algum <br />
        tipo de problema e você não sabe o que é?
        <br />É chegada a hora de buscar ajuda.
      </motion.p>
      <motion.h2
        className="section-heading !text-2xl mb-4"
        whileInView={{ opacity: [0, 1], y: [-50, 0] }}
        transition={{ duration: 0.8 }}
      >
        MENTORIA PESSOAL PREMIUM- MPP
      </motion.h2>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-bold text-[#a73520] mb-5">PLANO</h3>
        <Accordion type="single" value="1">
          <AccordionItem value="1">
            <AccordionTrigger className="text-[#264653] text-lg font-semibold">
              MPP - 12 MESES
            </AccordionTrigger>
            <AccordionContent>
              <p>
                A mentoria pessoal premium de 260 dias é um programa intensivo e
                abrangente de desenvolvimento pessoal e espiritual, que se
                estende por um ano inteiro. Este tipo de mentoria é projetado
                para proporcionar suporte contínuo, orientação personalizada e
                estratégias eficazes para alcançar um crescimento significativo
                e duradouro em diversas áreas da vida
              </p>
              <p>Duração: 12 meses</p>
              <p>
                Número de Sessões: 260 - (5 por semana -Seg à Sex) limite 30
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
              <p>Energização: 48 online</p>
              <p>Imersão: 1 Online ou Presencial</p>
              <p className="!font-bold !text-sm">
                (Presencial deve ser acordado e negociado custo logístico,
                hospedaria e traslado)
              </p>
              <BuyNowWidget />
              <p className="!font-bold">
                O valor da mentoria Marcello Samura é de 12x R$ R$ R$ 3.499,75,
                ou se preferir pagar à vista, R$ 36.996,99
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
