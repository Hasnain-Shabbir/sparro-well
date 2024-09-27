'use client';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TooltipArrow } from '@radix-ui/react-tooltip';

export default function Home() {
  return (
    <>
      <div className="p-20">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent side="left">
              <p>
                Add to library Lorem, ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <TooltipArrow className="h-2.5 w-5" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}
