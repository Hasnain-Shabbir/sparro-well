import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface AppCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof Checkbox> {
  id: string;
  label: string;
  size?: 'sm' | 'md';
}

const AppCheckbox = React.forwardRef<HTMLButtonElement, AppCheckboxProps>(
  ({ id, label, size }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <Checkbox id={id} ref={ref} size={size} />
        <Label htmlFor={id} size={size === 'sm' ? 'md' : 'lg'}>
          {label}
        </Label>
      </div>
    );
  },
);

AppCheckbox.displayName = 'AppCheckbox';

export default AppCheckbox;
