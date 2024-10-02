'use client';
import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  size?: 'sm' | 'md';
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size = 'sm', ...props }, ref) => {
  const checkboxSizeMap = {
    sm: 'size-5',
    md: 'size-6',
  };
  const sizeClass = checkboxSizeMap[size] || checkboxSizeMap.sm;

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'shadow peer shrink-0 rounded-md border border-neutral-200 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 data-[state=checked]:text-neutral-50 data-[state=checked]:hover:bg-orange-600',
        sizeClass,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <CheckIcon className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
