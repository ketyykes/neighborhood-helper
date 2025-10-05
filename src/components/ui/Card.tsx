import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'bordered';
}

const Card = ({ children, className, variant = 'bordered' }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-lg',
        variant === 'bordered' && 'border border-[#E5E3DB] bg-white',
        variant === 'default' && 'bg-white',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
