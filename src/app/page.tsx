'use client';
import React from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Radio } from '@/components';

export default function Home() {
  return (
    <>
      <div className="p-20">
        <RadioGroup defaultValue="option-1">
          <Radio id="option-1" size="sm" label="Default" value="option-1" />
          <Radio id="option-2" size="sm" label="Compromise" value="option-2" />
          <Radio id="option-3" size="sm" label="Sacrifice" value="option-3" />
        </RadioGroup>
      </div>
    </>
  );
}
