import React from 'react';
import { cn } from '@/lib/utils';

export type InputPropsUI = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends InputPropsUI {
  error?: string;
  inputSize: 'sm' | 'md' | 'lg' | 'xl';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, inputSize = 'sm', type, ...props }, ref) => {
    const inputSizesMap = {
      lg: 'text-base',
      md: 'text-sm',
      sm: 'text-xs',
      xl: 'text-md',
    };

    const inputSizeClass = inputSizesMap[inputSize] || inputSizesMap.sm;
    const errorClasses = error
      ? 'border-red-500 focus-visible:ring-red-500'
      : '';

    return (
      <input
        className={cn(
          'flex w-full rounded-lg border border-neutral-200 bg-transparent px-3 py-2 font-medium text-neutral-900 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-200 disabled:cursor-not-allowed disabled:opacity-50',
          inputSizeClass,
          errorClasses,
          className,
        )}
        type={type}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
