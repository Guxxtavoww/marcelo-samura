'use client';

import { z } from 'zod';
import { motion } from 'framer-motion';

import { aboutImage, aboutLogo } from '@/assets';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/tools/loader';
import { emailStringSchema } from '@/utils/zod.utils';
import { InputField } from '@/components/tools/fields/input-field';
import { useFormWithSchema } from '@/hooks/use-form-with-schema.hook';
import { useMutationWithToast } from '@/hooks/use-mutation-with-toast.hook';

const aboutFormSchema = z.object({
  email: emailStringSchema,
});

export type AboutForm = z.infer<typeof aboutFormSchema>;

export function About() {
  const form = useFormWithSchema(aboutFormSchema);

  const { mutateAsync, isPending, disabled } = useMutationWithToast({
    mutationKey: ['about-form-mutation'],
    mutationFn: async (data: AboutForm) => {
      const { aboutFormAction } = await import(
        '../../actions/about-form.action'
      );

      return aboutFormAction(data);
    },
    toastCustomSuccessMessage: 'Sucesso!',
    toastCustomError: 'Erro!',
  });

  return (
    <motion.section
      className="container-wrapper space-y-4 [&_p]:text-center [&_p]:text-lg [&_p]:leading-8"
      id="about"
      initial={{ opacity: 0, y: 50 }} // Animation start
      whileInView={{ opacity: 1, y: 0 }} // Animation on scroll
      transition={{ duration: 0.6 }} // Smooth transition
      viewport={{ once: true }} // Trigger once
    >
      <motion.h2
        className="section-heading !text-left"
        initial={{ opacity: 0, x: -50 }} // Start from the left
        whileInView={{ opacity: 1, x: 0 }} // Animate into view
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        SOBRE MIM
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Marcello Samura é empresário, escritor, mentor e palestrante com um now
        hall de 30 anos de carreira do mundo corporativo e mais de 6 anos de
        experiência em mentoria pessoal e empresarial. Formado em Gestão de
        Recursos Humanos e pós-graduado em Administração de Empresas pela
        PUC/SP, possui um MBA em Marketing e Vendas pela Chambre de Commerce et
        d’Industrie de Paris/França. Como Diretor Executivo da Consultoria
        Samura, dedica-se a transformar vidas e negócios.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Com três décadas de experiência em negócios e gestão de pessoas,
        desenvolveu a metodologia Hakusho, inserida no curso Hikari, que foca no
        desenvolvimento comportamental e espiritual, promovendo a transformação
        da consciência das pessoas. Inspirado nos ensinamentos de Jesus Cristo,
        seu trabalho visa desabrochar o amor divino dentro de cada indivíduo,
        equilibrando o material e o espiritual. Sua logomarca, com um trevo
        representando ação, fé, amor e prosperidade, e as letras &quotII&quot;
        simbolizando os pilares do desenvolvimento pessoal e espiritual, reflete
        essa filosofia. Seu site oferece insights sobre desenvolvimento pessoal,
        estratégias de negócios e lições de sua carreira.
      </motion.p>
      <motion.img
        src={aboutImage.src}
        alt="About Image"
        className="rounded-md shadow-lg mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        “O conhecimento é o alimento da alma e a solução para a sua
        vida”.Marcello Samura A jornada de um escritor é emocionante, cheia de
        descobertas e desafios, começando com uma faísca de conhecimento que se
        transforma em um desejo profundo de contar histórias. Durante seu
        desenvolvimento pessoal, ele descobriu a escrita como um meio poderoso
        de transmitir conhecimento, escrevendo e-books em linguagem simples e
        profunda sobre contos espiritualistas e realistas de outras dimensões
        espirituais. Nunca imaginou que se tornaria escritor, mas nesse caminho
        desvendou sua missão espiritual. Sua escrita revitaliza sua alma e ajuda
        as pessoas a despertarem sua consciência e encontrarem seu verdadeiro Eu
        Interior, atingindo um público amplo em busca de crescimento pessoal e
        espiritual
      </motion.p>
      <motion.h4
        className="text-center font-bold text-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Transforme a sua vida agora! <br /> Inscreva-se abaixo para receber
        conteúdos do Blog sobre como mudar o seu comportamento <br /> através de
        conteúdos no YouTube, Facebook e Instagram - As maiores ferramentas de{' '}
        <br />
        desenvolvimento pessoal e espiritual da internet.
      </motion.h4>
      <Form {...form}>
        <motion.form
          className="flex items-start gap-3.5 w-full justify-end max-md:flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          onSubmit={form.handleSubmit((data) => mutateAsync(data))}
        >
          <InputField
            name="email"
            type="email"
            placeholder="Insira seu melhor e-mail"
            formItemClassName="flex-[1] max-md:w-full"
          />
          <Button type="submit" disabled={disabled} className="max-md:w-full">
            {isPending ? <Loader /> : 'QUERO TRANSFORMAR MINHA VIDA'}
          </Button>
        </motion.form>
      </Form>
      <motion.img
        src={aboutLogo.src}
        alt="About Logo"
        className="mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
    </motion.section>
  );
}
