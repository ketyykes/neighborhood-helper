import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'transparent';
}

const Section = ({ children, className, id, background = 'transparent' }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'py-8 sm:py-12 lg:py-16',
        background === 'white' && 'bg-white',
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
