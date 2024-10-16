export type ChildLink = { label: string; href?: string }[];

export interface SubLinkWithLinks {
  label: string;
  links: ChildLink;
}

export type SubLink =
  | {
      label: string;
      href: string;
    }
  | SubLinkWithLinks;

export interface HeaderDataWithMenuLinks {
  linkLabel: string;
  menuLinks: SubLink[];
}

export type HeaderData =
  | { linkLabel: string; href: string; openInOtherWindow?: boolean }
  | { linkLabel: string; menuLinks: SubLink[] };

export const headerData: HeaderData[] = [
  {
    linkLabel: 'Início',
    href: '/#',
  },
  {
    linkLabel: 'Mentoria Samura',
    menuLinks: [
      {
        label: 'Pessoal - MP',
        href: '/#personal-mentory-mp',
      },
      // {
      //   label: 'Executiva (1 Sessão)- MEP',
      //   href: '/#mentory',
      // },
      {
        label: 'Casais-MC',
        href: '/#couples-mentory-mc',
      },
      {
        label: 'Grupo-MG',
        href: '/#group-mentory-mg',
      },
      {
        label: 'Empresarial-ME',
        href: '/#business-mentoring-me',
      },
      {
        label: 'Pessoal Premium- MPP',
        href: '/#premium-personal-mentory-mpp',
      },
      {
        label: 'Histórias de Sucesso',
        href: '/#testemonials',
      },
    ],
  },
  {
    linkLabel: 'Serviços',
    menuLinks: [
      {
        label: 'Treinamento',
        links: [
          {
            label: 'Início',
            href: '/workshops',
          },
          {
            label: 'Humanizar',
            href: '/workshops#humanize',
          },
          {
            label: 'Chutando o Balde',
            href: '/workshops#kicking-the-bucket',
          },
          {
            label: 'Hakusho',
            href: '/workshops#hakusho',
          },
        ],
      },
      {
        label: 'Pàlestras',
        links: [
          {
            label: 'Ser + Humano',
            href: '/lectures#be-more-human',
          },
          {
            label: 'Comportamento Humano',
            href: '/lectures#human-behavior',
          },
          {
            label: 'Drogas na sua Família',
            href: '/lectures#family-drugs',
          },
          {
            label: 'Drogas na sua Empresa',
            href: '/lectures#company-drugs',
          },
        ],
      },
      {
        label: 'Cursos',
        links: [
          {
            label: 'Empreendedorismo',
          },
          {
            label: 'Hikari',
          },
        ],
      },
    ],
  },
  {
    linkLabel: 'Ebook',
    menuLinks: [
      {
        label: 'A Casa de Moá',
        href: '#moa',
      },
      {
        label: 'Escravidão Tecnológica',
        href: '#moa',
      },
      {
        label: 'Quem é o ladrão?',
        href: '#thief',
      },
    ],
  },
  {
    linkLabel: 'Quem Sou Eu',
    menuLinks: [
      {
        label: 'Sobre',
        href: '/#about',
      },
      {
        label: 'Contato',
        href: '/#contact',
      },
    ],
  },
  {
    linkLabel: 'Blog',
    href: '/#blog',
  },
];
