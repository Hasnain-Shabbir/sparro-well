'use client';
import React from 'react';
import Sidebar from '@/components/custom/Sidebar/Sidebar';
export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div>content</div>
      </div>
    </>
  );
}
