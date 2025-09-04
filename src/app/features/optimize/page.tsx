
"use client";
import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowLeft, GraduationCap, Beaker, Quote } from 'lucide-react';

export default function OptimizeFeaturePage() {
  return (
    <div className="bg-gray-900 text-white font-body min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            EVIDECIA FLOW
          </h1>
        </Link>
        <Link href="/features" passHref>
          <Button variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Features
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4">
            Optimize Your Workflow
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Tools designed to streamline your research process, saving you time and improving accuracy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ToolCard
            icon={<Beaker />}
            title="AI Lab Coach - Protocol Optimizer"
            description="For lab experiments: enter your protocol and the tool cross-references public repositories to suggest small tweaks that reduce cost or time."
          />
          <ToolCard
            icon={<Quote />}
            title="Citations in Context"
            description="Instead of just giving a list of references, it shows how each paper you cite actually phrases the key point, so you don’t accidentally misquote."
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-xl font-bold">EVIDECIA FLOW</h4>
          <p className="text-gray-500">© 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const ToolCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-primary transition-colors duration-300 transform hover:-translate-y-2 flex flex-col">
    <CardHeader>
      <div className="mx-auto bg-primary/10 text-primary w-20 h-20 rounded-full flex items-center justify-center mb-4">
        {React.cloneElement(icon as React.ReactElement, { className: "w-10 h-10" })}
      </div>
      <CardTitle className="text-2xl font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-gray-400 text-base leading-relaxed">{description}</p>
    </CardContent>
    <CardFooter>
        <Button variant="outline" className="w-full bg-transparent border-primary text-primary hover:bg-primary hover:text-white">
            Learn More
        </Button>
    </CardFooter>
  </Card>
);
