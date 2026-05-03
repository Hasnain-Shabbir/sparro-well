import React from 'react';
import Link from 'next/link';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { tw } from '@/utils';

const buttonVariants = cva(
  tw(
    'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-inter text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50',
  ),
  {
    variants: {
      variant: {
        accent: tw(
          'border border-orange-500 bg-orange-500 text-orange-50 hover:border-orange-600 hover:bg-orange-600 active:border-orange-700 active:bg-orange-700',
        ),
        primary: tw(
          'border border-black bg-black text-white hover:bg-neutral-800 active:bg-black',
        ),
        secondary: tw(
          'bg-white-sm border border-neutral-200 hover:bg-neutral-50 hover:text-neutral-900 active:bg-neutral-100 active:text-neutral-900',
        ),
        danger: tw(
          'border border-red-500 bg-red-500 text-red-50 hover:border-red-600 hover:bg-red-600 active:border-red-700 active:bg-red-700',
        ),
        link: tw(
          'text-orange-500 underline underline-offset-4 hover:text-orange-600',
        ),
        icon: tw(
          'border border-neutral-200 bg-white hover:bg-neutral-50 active:bg-neutral-100',
        ),
      },
      size: {
        default: 'px-6 py-2',
        sm: 'px-6 py-2 text-xs',
        md: 'px-6 py-2 text-sm',
        lg: 'px-8 py-3 text-base',
        xl: 'px-8 py-4 text-md rounded-xl',
        icon: 'size-7.5',
      },
    },
    defaultVariants: {
      variant: 'accent',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const conditionalPadding =
      variant === 'icon' && size === 'sm'
        ? 'p-1 size-7.5'
        : variant === 'icon' && size === 'md'
          ? 'p-1 size-9'
          : variant === 'icon' && size === 'lg'
            ? 'p-1 size-11'
            : variant === 'icon' && size === 'xl'
              ? 'p-1 size-12.5'
              : '';

    if (variant === 'link' && href) {
      return (
        <Link href={href} passHref>
          <span
            className={cn(
              buttonVariants({ variant, size }),
              conditionalPadding,
              className,
            )}
            {...props}
          />
        </Link>
      );
    }

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          conditionalPadding,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
