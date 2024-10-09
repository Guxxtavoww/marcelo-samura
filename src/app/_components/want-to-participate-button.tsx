import { FaWhatsapp } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

export function WantToParticipateButton() {
  return (
    <Button size="lg" className="text-xl">
      QUERO PARTICIPAR <FaWhatsapp />
    </Button>
  );
}
