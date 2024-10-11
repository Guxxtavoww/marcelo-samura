'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { cn } from '@/utils/cn.util';
import { whoIsPersonalMentorshipForData } from '@/data/who-is-personal-mentorship-for.data';

import { WantToParticipateButton } from '../_components/want-to-participate-button';

export function BuyNowWidget({
  href,
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href || '#'}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md px-8 bg-primary text-primary-foreground hover:bg-[#c04836] h-10 py-2 text-lg mb-3.5',
        className
      )}
    >
      Compre agora
      <FaWhatsapp />
    </Link>
  );
}

export function WhoIsPersonalMentorshipFor() {
  return (
    <motion.section
      className="container-wrapper space-y-10 text-center"
      id="who-is-personal-mentorship-for"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="section-heading">Para quem serve a Mentoria Pessoal?</h2>
      <motion.div
        className="grid grid-cols-2 grid-rows-2 gap-6 max-md:grid-cols-1 h-fit"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {whoIsPersonalMentorshipForData.map(
          ({ description, iconSrc, title }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3 justify-center min-h-[366px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={iconSrc}
                alt={`Image ${index}`}
                width={100}
                height={145}
              />
              <h3 className="text-2xl text-center font-bold">{title}</h3>
              <p className="text-lg text-center">{description}</p>
            </motion.div>
          )
        )}
      </motion.div>
      <motion.h2
        className="text-4xl text-center font-bold leading-[50px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Assuma o Controle! <br /> Você é o Único Responsável pela Sua Vida
      </motion.h2>
      <WantToParticipateButton />
      <h3 className="text-2xl font-bold text-[#c04836]">Planos</h3>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="MP">
            <AccordionTrigger className="text-[#264653] text-xl font-bold">
              MENTORIA PESSOAL - MP
            </AccordionTrigger>
            <AccordionContent>
              <h4 className="text-[#264653] text-xl font-bold">MP-1 MÊS</h4>
              <p>
                Indicado para quem deseja um acompanhamento de curto prazo,
                acelerado, com suporte completo.
              </p>
              <p>Duração: 1 mês</p>
              <p>
                Sessões: 30 (5 por semana -Seg à Sex) - limite 30 minutos exceto
                a primeira sessão
              </p>
              <p>
                Suporte: Acesso por telefone, vídeoconferência, com resposta
                prioritária por ligação, audio, msg
              </p>
              <p>
                Recursos: Materiais complementares no blog, exercícios práticos.
              </p>
              <p>Energização: 4</p>
              <BuyNowWidget />
              <h4 className="font-bold text-xl text-[#a73520] mb-3.5">PREÇO</h4>
              <p>
                O valor da mentoria Marcello Samura é de{' '}
                <strong>12x 330,33</strong>, ou se preferir pagar à vista,
                <strong>R$3.390,99</strong>
              </p>
              <p>Esse valor inclui todos os itens citados nessa página.</p>
              <p>As formas de pagamento são:</p>
              <p>À vista ou Em até 12x pelo cartão de crédito;</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="MP-2-MOUNTHS">
            <AccordionTrigger className="text-[#264653] text-xl font-bold">
              MP-2 MESES
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Indicado para quem necessita de um tempo maior de orientações e
                um acompanhamento mais profundo e sustentável.
              </p>
              <p>Duração: 2 meses</p>
              <p>
                Número de Sessões: 40 (5 por semana -Seg à Sex) - limite 30
                minutos exceto a primeira sessão
              </p>
              <p>
                Suporte: Acesso por telefone, vídeoconferência, com resposta
                prioritária por ligação, audio, msg
              </p>
              <p>
                Recursos: Materiais complementares no blog, exercícios práticos.
              </p>
              <p>Energização: 8</p>
              <p>Imersão: 1</p>
              <BuyNowWidget />
              <p className="!font-bold">
                O valor da mentoria Marcello Samura é de 12x R$ 413,67, ou se
                preferir pagar à vista, R$ 4.363,99.
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
          <AccordionItem value="MP-3-MOUNTHS">
            <AccordionTrigger className="text-[#264653] text-xl font-bold">
              MP-3 MESES
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Indicado para quem necessita de um tempo maior de orientações e
                um acompanhamento mais profundo e sustentável.Para indivíduos
                que enfrentam desafios específicos (como procrastinação, falta
                de motivação, problemas de organização) e precisam de apoio
                personalizado para superá-los com mais tempo.
              </p>
              <p>Duração: 3 meses</p>
              <p>
                Número de Sessões:60 - (5 por semana -Seg à Sex) - limite 30
                minutos exceto a primeira sessão
              </p>
              <p>
                Suporte: Acesso por telefone, vídeoconferência, com resposta
                prioritária por ligação, audio, msg
              </p>
              <p>
                Recursos: Materiais complementares no blog, exercícios práticos.
              </p>
              <p>Energização: 12</p>
              <p>Imersão: 1</p>
              <BuyNowWidget />
              <p className="!font-bold">
                O valor da mentoria Marcello Samura é de 12x R$ 591,74 , ou se
                preferir pagar à vista, R$ 6.663,99
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
          <AccordionItem value="MP-4-MOUNTHS">
            <AccordionTrigger className="text-[#264653] text-xl font-bold">
              MP-4 MESES
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Indicado para pessoas que têm metas ambiciosas que requerem um
                planejamento estratégico detalhado e acompanhamento contínuo
                para alcançá-las.
              </p>
              <p>Duração: 4 meses</p>
              <p>
                Número de Sessões: 90 -(5 por semana -Seg à Sex) - limite 30
                minutos exceto a primeira sessão
              </p>
              <p>
                Suporte: Acesso por telefone, vídeoconferência, com resposta
                prioritária por ligação, audio, msg
              </p>
              <p>
                Recursos: Materiais complementares no blog, exercícios práticos.
              </p>
              <p>Energização: 16</p>
              <p>Imersão: 1 ou mais se necessário</p>
              <BuyNowWidget />
              <p className="!font-bold">
                O valor da mentoria Marcello Samura é de 12x R$ R$ 799,75, ou se
                preferir pagar à vista, R$8.663,99
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
          <AccordionItem value="ME">
            <AccordionTrigger className="text-[#264653] text-xl font-bold">
              MENTORIA EXECUTIVA-SESSÃO
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Indicado para pessoas que querem apenas tratamento por uma
                sessão
              </p>
              <p>Duração: 1 hora</p>
              <p>Sessões: 1</p>
              <p>
                Suporte: Acesso por telefone, vídeoconferência, com resposta
                prioritária por ligação,audio ou msg,
              </p>
              <p>
                Recursos: Materiais complementares no blog, exercícios práticos.
              </p>
              <p>Energização: 1</p>
              <p className="!font-bold">
                O valor da mentoria Marcello Samura é , à vista, R$250,00 ou 3x
                100,00
              </p>
              <p className="!font-bold">
                Esse valor inclui todos os itens citados nessa página.
              </p>
              <p className="!font-bold">As formas de pagamento são:</p>
              <p className="!font-bold">À vista (Pix) ou parcelado em 3 x</p>
              <BuyNowWidget className="mb-0" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
