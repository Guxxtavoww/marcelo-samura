import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';

export function ParticipationWidget() {
  return (
    <section id="participation-widget" className="w-full rounded-md bg-[#a73520] p-8 sm:p-10 my-5 text-center">
      <h2 className="text-white text-2xl font-bold mb-4 leading-tight">
        COMO POSSO PARTICIPAR?
      </h2>
      <p className="text-lg text-white mb-6">
        Cadastre-se na lista de espera para ser avisado da próxima vaga.
      </p>
      <Link
        href="#"
        aria-label="Quero entrar na mentoria"
        className="inline-flex justify-center items-center w-full max-w-[400px] mx-auto px-4 py-3 text-lg rounded-md bg-white text-[#264653] transition-colors hover:bg-slate-100 font-semibold"
      >
        QUERO ENTRAR NA MENTORIA
        <FaWhatsapp size={18} className="ml-2" />
      </Link>
    </section>
  );
}
