import Link, { type LinkProps } from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const customLinkVariants = cva(
  'inline-flex items-center gap-1.5 justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary hover:bg-accent hover:text-accent-foreground',
  {
    variants: {
      variant: {
        default:
          'bg-[#a73520] text-primary-foreground hover:hover:bg-[#c04836]',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        fit: 'min-h-fit max-w-fit',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'default',
    },
  }
);

export interface CustomLinkProps
  extends LinkProps,
    VariantProps<typeof customLinkVariants> {
  className?: string;
}

export function CustomLink({
  className,
  children,
  variant,
  size,
  ...rest
}: WithChildren<CustomLinkProps>) {
  return (
    <Link
      {...rest}
      className={customLinkVariants({ className, size, variant })}
    >
      {children}
    </Link>
  );
}
