import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '@/providers';
import { Toaster } from '@/components/ui/toaster';

import '../styles/global.styles.css';
import { Header } from './_components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marcello Samura',
  description: 'An App description',
  keywords: ['treinamento'],
  authors: [
    {
      name: 'Gustavo',
      url: 'https://gustavo-augusto-portfolio.vercel.app/',
    },
  ],
};

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default async function RootLayout({ children }: WithChildren) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
