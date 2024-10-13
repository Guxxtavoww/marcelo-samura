import { FaWhatsapp } from 'react-icons/fa6';

import { cn } from '@/utils/cn.util';
import { Button } from '@/components/ui/button';

export function WantToParticipateButton({ className }: { className?: string }) {
  return (
    <Button size="lg" className={cn('text-xl fade-in-10', className)}>
      QUERO PARTICIPAR <FaWhatsapp />
    </Button>
  );
}
