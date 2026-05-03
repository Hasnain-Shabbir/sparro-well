import React from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  color?: 'green' | 'red' | 'gray' | 'orange';
  label: string;
  size?: 'sm' | 'md' | 'lg';
}
const Tag: React.FC<TagProps> = ({ color = 'green', label, size = 'sm' }) => {
  const tagColorMap = {
    gray: 'bg-neutral-100 text-neutral-700',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-100 text-orange-700',
    red: 'bg-red-50 text-red-600',
  };
  const tagColor = tagColorMap[color];

  const tagSizeMap = {
    sm: 'text-xs',
    md: 'text-sm px-3.5',
    lg: 'text-base px-4',
  };
  const tagSize = tagSizeMap[size];

  return (
    <div
      className={cn(
        'flex w-max items-center justify-center rounded-full px-3 py-1 text-xs font-medium',
        tagColor,
        tagSize,
      )}
    >
      {label}
    </div>
  );
};

export default Tag;
