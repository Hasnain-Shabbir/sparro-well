import { FontWeight, Variant } from './Typography.types';

export const variantStyles: Record<Variant, string> = {
  h1: 'text-5xl leading-sm',
  h2: 'text-4xl leading-sm',
  h3: 'text-3xl leading-sm',
  h4: 'text-2xl leading-sm',
  h5: 'text-xl leading-sm',
  h6: 'text-lg leading-sm',
  body1: 'text-md leading-sm',
  body2: 'text-base leading-sm',
  body3: 'text-sm leading-sm',
  caption: 'text-xs leading-sm',
  footer: 'text-[10px] leading-sm',
};

export const variantMapping: Record<Variant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  caption: 'span',
  footer: 'p',
};
export const getFontWeight = (variant: Variant, fontWeight?: FontWeight) => {
  const isHeading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant);

  if (isHeading) {
    switch (fontWeight) {
      case 'extrabold':
        return 'font-extrabold';
      case 'semibold':
        return 'font-semibold';
      default:
        return 'font-bold';
    }
  } else {
    switch (fontWeight) {
      case 'medium':
        return 'font-medium';
      case 'semibold':
        return 'font-semibold';
      default:
        return 'font-normal';
    }
  }
};
