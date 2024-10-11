'use client';

import { WantToParticipateButton } from "../_components/want-to-participate-button";

export function GroupMentoryMG() {
  return (
    <section className="container-wrapper space-y-5 text-center">
      <h2 className="section-heading">MENTORIA EM GRUPO- MG</h2>
      <p className="font-medium text-lg">
        Desenvolvimento Pessoal e Espiritual
      </p>
      <h3 className="text-2xl font-bold">
        Está perdido e não sabe o que fazer para mudar a sua vida?
        <br />
        Gostaria de ter alguém que pudesse compartilhar...?
      </h3>
      <WantToParticipateButton />
    </section>
  );
}
