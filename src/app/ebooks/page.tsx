import { ebooksData } from '@/data/ebooks.data';

import { Ebook } from './_components/ebook';

export default function EbooksPage() {
  return (
    <>
      {ebooksData.map((ebook, index) => (
        <Ebook {...ebook} key={index} />
      ))}
    </>
  );
}
