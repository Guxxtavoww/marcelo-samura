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
    href: '#',
  },
  {
    linkLabel: 'Mentoria Samura',
    menuLinks: [
      {
        label: 'Pessoal - MP',
        href: '#personal-mentory-mp',
      },
      {
        label: 'Executiva (1 Sessão)- MEP',
        href: '#mentory',
      },
      {
        label: 'Casais-MC',
        href: '#couples-mentory-mc',
      },
      {
        label: 'Grupo-MG',
        href: '#group-mentory-mg',
      },
      {
        label: 'Empresarial-ME',
        href: '#business-mentoring-me',
      },
      {
        label: 'Pessoal Premium- MPP',
        href: '#mentory',
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
            label: 'Humanizar',
          },
          {
            label: 'Chutando o Balde',
          },
          {
            label: 'Hakusho',
          },
        ],
      },
      {
        label: 'Pàlestra',
        links: [
          {
            label: 'Ser + Humano',
          },
          {
            label: 'Comportamento Humano',
          },
          {
            label: 'Drogas na sua Família',
          },
          {
            label: 'Drogas na sua Empresa',
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
        label: 'Contato',
        href: '#contact',
      },
    ],
  },
  {
    linkLabel: 'Blog',
    href: '#blog',
  },
];
