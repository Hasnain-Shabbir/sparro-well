import React from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface ToggleProps extends React.ComponentPropsWithoutRef<typeof Switch> {
  id: string;
  label: string;
  subTitle?: string;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ id, label, subTitle }, ref) => {
    const labelElement = (
      <Label htmlFor={id} size="md">
        {label}
      </Label>
    );

    return (
      <div className="flex gap-2">
        <Switch id={id} ref={ref} />
        {subTitle ? (
          <div className="flex flex-col gap-1">
            {labelElement}
            {subTitle && (
              <span className="text-sm text-neutral-600">{subTitle}</span>
            )}
          </div>
        ) : (
          labelElement
        )}
      </div>
    );
  },
);

Toggle.displayName = 'Toggle';

export default Toggle;
