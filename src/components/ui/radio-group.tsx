'use client';
import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';
import { tw } from '@/utils';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      ref={ref}
      {...props}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  size?: 'sm' | 'lg';
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, size = 'sm', ...props }, ref) => {
  const radioSizeMap = {
    sm: cn(
      'size-4 data-[state=checked]:after:size-2.5 data-[state=checked]:after:top-[2px]',
    ),
    lg: tw(
      'size-6 data-[state=checked]:after:top-[3px] data-[state=checked]:after:size-4',
    ),
  };
  const radioSize = radioSizeMap[size];

  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'shadow aspect-square rounded-full border border-neutral-400 text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:relative data-[state=checked]:border-orange-500 data-[state=checked]:after:absolute data-[state=checked]:after:left-1/2 data-[state=checked]:after:-translate-x-1/2 data-[state=checked]:after:rounded-full data-[state=checked]:after:bg-orange-500',
        radioSize,
        className,
      )}
      ref={ref}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center" />
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
