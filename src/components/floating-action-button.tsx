"use client";

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Crown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function FloatingActionButton() {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Crown Button Clicked!",
      description: "You can customize this action.",
    });
  };

  return (
    <Button
      onClick={handleClick}
      variant="default"
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 hover:scale-110 transition-transform duration-300 z-50"
      aria-label="Premium Features"
    >
      <Crown className="h-8 w-8 text-primary-foreground" />
    </Button>
  );
}
