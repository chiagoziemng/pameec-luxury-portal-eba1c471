import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ 
  label, 
  title, 
  description, 
  align = 'center',
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "max-w-3xl",
      align === 'center' ? 'mx-auto text-center' : 'text-left',
      className
    )}>
      {label && (
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
          {label}
        </p>
      )}
      <h2 className="heading-section text-foreground mb-4">{title}</h2>
      <div className={cn("divider-luxury mb-6", align === 'left' && 'mx-0')} />
      {description && (
        <p className="text-lead">{description}</p>
      )}
    </div>
  );
}
