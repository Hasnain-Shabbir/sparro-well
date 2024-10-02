'use client';
import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

interface LabelProps extends VariantProps<typeof labelVariants> {
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & LabelProps
>(({ className, size = 'sm', disabled = false, ...props }, ref) => {
  const labelSizeClasses = {
    lg: 'text-base',
    md: 'text-sm',
    sm: 'text-xs',
    xl: 'text-md',
  };

  const sizeClass = labelSizeClasses[size] || labelSizeClasses.sm;
  const disabledClass = disabled ? 'opacity-60' : '';

  return (
    <LabelPrimitive.Root
      className={cn(labelVariants(), sizeClass, disabledClass, className)}
      ref={ref}
      {...props}
    />
  );
});

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
