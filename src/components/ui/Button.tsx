import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    fullWidth = false,
    disabled,
    children,
    ...props
  }, ref) => {
    const baseClasses = [
      'inline-flex items-center justify-center font-semibold rounded-full',
      'transition-all duration-300 transform',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
      fullWidth && 'w-full'
    ];

    const variants = {
      primary: [
        'bg-pink-500 text-white shadow-md',
        'hover:bg-pink-600 hover:shadow-lg hover:scale-105',
        'focus:ring-pink-500',
        'active:bg-pink-700'
      ],
      secondary: [
        'bg-purple-500 text-white shadow-md',
        'hover:bg-purple-600 hover:shadow-lg hover:scale-105',
        'focus:ring-purple-500',
        'active:bg-purple-700'
      ],
      outline: [
        'bg-white text-pink-500 border-2 border-pink-500',
        'hover:bg-pink-50 hover:scale-105',
        'focus:ring-pink-500',
        'active:bg-pink-100'
      ],
      ghost: [
        'bg-transparent text-gray-600',
        'hover:bg-gray-100 hover:scale-105',
        'focus:ring-gray-500',
        'active:bg-gray-200'
      ],
      destructive: [
        'bg-red-500 text-white shadow-md',
        'hover:bg-red-600 hover:shadow-lg hover:scale-105',
        'focus:ring-red-500',
        'active:bg-red-700'
      ]
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl'
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-3 h-5 w-5" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;