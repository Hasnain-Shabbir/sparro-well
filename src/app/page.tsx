'use client';
import { AppCheckbox } from '@/components';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="p-20">
        <AppCheckbox label="Label" id="label" size='md'/>
      </div>
    </>
  );
}
