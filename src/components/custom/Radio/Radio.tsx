import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';

interface RadioProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupItem> {
  id: string;
  label: string;
  size?: 'sm' | 'lg';
}

const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(
  ({ id, label, size, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-4">
        <RadioGroupItem id={id} ref={ref} size={size} {...props} />
        <Label htmlFor={id} size={size === 'sm' ? 'md' : 'lg'}>
          {label}
        </Label>
      </div>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
