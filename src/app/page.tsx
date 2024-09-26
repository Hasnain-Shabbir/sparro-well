'use client';
import { TextField } from '@/components';

export default function Home() {
  return (
    <>
      <div className="p-5">
        <div className="w-[300px]">
          <TextField label="Label" inputSize="xl" placeholder="Name" />
        </div>
      </div>
    </>
  );
}
