import React, { forwardRef } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  inputSize?: 'sm' | 'md' | 'lg' | 'xl';
  label?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ disabled, error, id, inputSize = 'md', label, ...props }, ref) => {
    const inputLabelGap = inputSize === 'sm' ? 'space-y-1' : 'space-y-2';

    return (
      <div className={inputLabelGap}>
        {label && (
          <Label disabled={disabled} htmlFor={id} size={inputSize}>
            {label}
          </Label>
        )}
        <Input
          disabled={disabled}
          error={error}
          id={id}
          inputSize={inputSize}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
