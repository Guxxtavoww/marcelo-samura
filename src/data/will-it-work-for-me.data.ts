import {
  empresariosImage,
  medoDivorcioImage,
  recemSeparadosImage,
  procrastinadoresImage,
  descrencaReligiosa,
  autoConhecimentoImage,
  conflitoFamiliarImage,
  gestaoFinanceiraImage,
  pessoasSolitariasImage,
  problemasRelacionarImage,
  transicaoDeCarreiraImage,
} from '@/assets';

export interface WillItWorkFormMeData {
  title: string;
  description: string;
  iconSrc: string;
}

export const willItWorkFormMeData: WillItWorkFormMeData[] = [
  {
    title: 'Pessoas Solitárias',
    description:
      'Está preso na solidão, ansiedade e baixa autoestima? Não precisa ser assim! Encontre apoio para superar esses desafios e redescubra alegria e propósito.',
    iconSrc: pessoasSolitariasImage.src,
  },
  {
    title: 'Pessoas em Busca de Autoconhecimento:',
    description:
      'Imagine compreender profundamente quem você é de verdade, reconhecer suas forças únicas e trabalhar nas áreas que precisam de desenvolvimento.',
    iconSrc: autoConhecimentoImage.src,
  },
  {
    title: 'Recém-Separados:',
    iconSrc: recemSeparadosImage.src,
    description:
      'Está se recuperando de um término e incerto sobre o futuro? Não enfrente isso sozinho! Recupere sua confiança, valor e abra seu coração para novos começos. Você merece amor e felicidade!',
  },
  {
    title: 'Casais com Medo do Divórcio',
    description:
      'Sua relação está insustentável e o medo do divórcio te paralisa? Não enfrente essa decisão difícil sozinho! Encontre apoio e orientação para seguir em frente de forma saudável e recuperar sua paz.',
    iconSrc: medoDivorcioImage.src,
  },
  {
    title: 'Pessoas Procrastinadoras',
    description:
      'Indivíduos que têm dificuldade em começar ou concluir tarefas e querem superar a procrastinação. Perdidas e cegas do seu verdadeiro potencial.',
    iconSrc: procrastinadoresImage.src,
  },
  {
    title: 'Pessoas com Problemas para se Relacionar',
    description:
      'Quem enfrenta desafios em relacionamentos familiares ou amorosos.Pessoas que têm dificuldades em se relacionar socialmente ou que se sentem isoladas.',
    iconSrc: problemasRelacionarImage.src,
  },
  {
    title: 'Empreendedores e Empresários:',
    description:
      'Seu negócio não decola e você se sente inseguro ao tomar decisões? Sem as habilidades certas, pode ser difícil liderar e impulsionar seu crescimento é essencial para desbloquear seu potencial e superar esses desafios!',
    iconSrc: empresariosImage.src,
  },
  {
    title: 'Pessoas em Transição de Carreira:',
    description:
      'Está em uma encruzilhada, buscando novos desafios ou mudando de carreira? Enfrentar essa jornada pode ser assustador, mas você não precisa fazer isso sozinho. Com o apoio e a orientação certos, você pode superar obstáculos e prosperar em sua nova direção!',
    iconSrc: transicaoDeCarreiraImage.src,
  },
  {
    title: 'Pessoas com Descrença Religiosa:',
    description:
      'Indivíduos que buscam aprofundar seu entendimento espiritual e encontrar propósito de vida. Pessoas que se sentem desencantadas com a religiosidade tradicional, mas que ainda buscam sentido, propósito e conexão espiritual através de práticas e ferramentas de desenvolvimento pessoal.',
    iconSrc: descrencaReligiosa.src,
  },
  {
    title: 'Pessoas com Problemas de Gestão Financeira',
    description:
      'Quem precisa de orientação para administrar melhor suas finanças pessoais. Investimentos: Pessoas interessadas em aprender a parar de ganhar dinheiro e só vê o dinheiro ir para o ralo e com dificuldade de planejamento financeiro.',
    iconSrc: gestaoFinanceiraImage.src,
  },
  {
    title: 'Conflito Familiar',
    description:
      'Conflitos familiares podem deixar sua vida emocional em turbulência, criando barreiras entre aqueles que você ama. A falta de comunicação e compreensão pode intensificar desentendimentos, levando a um ciclo de dor e ressentimento. É hora de buscar apoio para restaurar a harmonia e fortalecer os laços familiares!',
    iconSrc: conflitoFamiliarImage.src,
  },
];
