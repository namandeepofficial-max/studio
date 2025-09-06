"use client";

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Crown } from 'lucide-react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


export function FloatingActionButton() {

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href="/premium" passHref>
            <Button
              variant="default"
              size="icon"
              className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 hover:scale-110 transition-transform duration-300 z-50"
              aria-label="Premium Features"
            >
              <Crown className="h-8 w-8 text-primary-foreground" />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Premium Features</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
