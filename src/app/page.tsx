'use client';
import { LeftArrow } from '@/assets';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="space-y-6 rounded-xl p-5">
      <div className="space-x-5">
        <Button variant="accent" size="sm">
          Text here
        </Button>
        <Button variant="accent" size="md">
          Text here
        </Button>
        <Button variant="accent" size="lg">
          Text here
        </Button>
        <Button variant="accent" size="xl">
          Text here
        </Button>
      </div>
      <div className="space-x-5">
        <Button variant="danger" size="sm">
          Text here
        </Button>
        <Button variant="danger" size="md">
          Text here
        </Button>
        <Button variant="danger" size="lg">
          Text here
        </Button>
        <Button variant="danger" size="xl">
          Text here
        </Button>
      </div>
      <div className="space-x-5">
        <Button variant="primary" size="sm">
          Text here
        </Button>
        <Button variant="primary" size="md">
          Text here
        </Button>
        <Button variant="primary" size="lg">
          Text here
        </Button>
        <Button variant="primary" size="xl">
          Text here
        </Button>
      </div>
      <div className="space-x-5">
        <Button variant="secondary" size="sm">
          Text here
        </Button>
        <Button variant="secondary" size="md">
          Text here
        </Button>
        <Button variant="secondary" size="lg">
          Text here
        </Button>
        <Button variant="secondary" size="xl">
          Text here
        </Button>
      </div>
      <div className="space-x-5">
        <Button variant="link" size="sm" href="https://www.google.com">
          Text here
        </Button>
        <Button variant="link" size="md">
          Text here
        </Button>
        <Button variant="link" size="lg">
          Text here
        </Button>
        <Button variant="link" size="xl">
          Text here
        </Button>
      </div>

      <div className="space-x-5">
        <Button variant="icon" size="sm">
          <LeftArrow />
        </Button>
        <Button variant="icon" size="md">
          <LeftArrow />
        </Button>
        <Button variant="icon" size="lg">
          <LeftArrow />
        </Button>
        <Button variant="icon" size="xl">
          <LeftArrow />
        </Button>
      </div>
    </div>
  );
}
