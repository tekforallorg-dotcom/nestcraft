import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'new' | 'featured' | 'reduced' | 'sold' | 'default';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        {
          'bg-accent text-white': variant === 'new',
          'bg-primary text-white': variant === 'featured',
          'bg-green-600 text-white': variant === 'reduced',
          'bg-slate text-white': variant === 'sold',
          'bg-paper-dark text-slate-dark': variant === 'default',
        },
        className
      )}
    >
      {children}
    </span>
  );
}