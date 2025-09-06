"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowRight, Menu } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="container mx-auto px-6 py-4 flex justify-between items-center bg-gray-900 text-white">
      <Link href="/" className="flex items-center gap-2">
        <GraduationCap className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          EVIDECIA FLOW
        </h1>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide">
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <Link href="/signup" passHref>
          <Button variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900 text-white border-gray-800 w-full max-w-xs">
            <div className="flex flex-col h-full p-6">
                <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setMenuOpen(false)}>
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    EVIDECIA FLOW
                    </h1>
                </Link>
                <nav className="flex flex-col gap-6 text-lg">
                    {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-gray-300 hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>
                        {link.label}
                    </Link>
                    ))}
                </nav>
                <div className="mt-auto">
                    <Link href="/signup" passHref>
                        <Button variant="outline" className="w-full bg-transparent border-primary text-primary hover:bg-primary hover:text-white">
                            Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
