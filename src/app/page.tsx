'use client';
import { Toggle } from '@/components';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="p-20">
        <Toggle label="Label" id="label" subTitle="This is helper text" />
      </div>
    </>
  );
}
