import React from 'react';
import { cn } from '@/lib/utils';
import { getFontWeight, variantMapping, variantStyles } from './typography';
import { TypographyProps } from './Typography.types';

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ as, children, className = '', fontWeight, variant, ...props }, ref) => {
    const Component = (as || variantMapping[variant]) as React.ElementType;

    const classes = cn(
      getFontWeight(variant, fontWeight),
      variantStyles[variant],
      className,
    );

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  },
);

Typography.displayName = 'Typography';

export default Typography;
