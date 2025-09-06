
"use client";
import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowLeft, Beaker, Quote, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Header } from '@/components/header';
import { DocumentAnalyzer } from '@/components/document-analyzer';
import { useState } from 'react';

export default function OptimizePage() {
    const [showAnalyzer, setShowAnalyzer] = useState(false);

    if (showAnalyzer) {
        return <DocumentAnalyzer />;
    }

  return (
    <div className="bg-gray-900 text-white font-body min-h-screen">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
            <Link href="/features" className="text-primary hover:underline inline-flex items-center gap-2 mb-4">
                <ArrowLeft className="h-4 w-4" />
                Back to Features
            </Link>
          <h2 className="text-5xl font-extrabold mb-4">
            Optimize
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Streamline your workflow and boost productivity with intelligent optimization features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ToolCard 
                icon={<Beaker />} 
                title="AI Lab Coach" 
                description="For lab experiments: enter your protocol and the tool cross-references public repositories to suggest small tweaks that reduce cost or time."
                onTryIt={() => setShowAnalyzer(true)}
            />
            <ToolCard 
                icon={<Quote />} 
                title="Citations in Context" 
                description="Instead of just giving a list of references, it shows how each paper you cite actually phrases the key point, so you don’t accidentally misquote."
                onTryIt={() => setShowAnalyzer(true)}
            />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="md:col-span-1">
            <h4 className="text-xl font-bold">EVIDECIA FLOW</h4>
            <p className="text-gray-500">© 2024 All rights reserved.</p>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row justify-end items-center gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <a href="#" className="text-gray-400 hover:text-primary hover:scale-110 transition-transform"><Twitter /></a>
                  <a href="#" className="text-gray-400 hover:text-primary hover:scale-110 transition-transform"><Linkedin /></a>
                  <a href="https://www.instagram.com/evideciaflow?igsh=ODQyaW5sdng5bXFx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary hover:scale-110 transition-transform"><Instagram /></a>
                </div>
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const ToolCard = ({ icon, title, description, onTryIt }: { icon: React.ReactNode, title: string, description: string, onTryIt: () => void }) => (
  <Card className="bg-gray-800 border-gray-700 text-center hover:border-primary transition-colors duration-300 transform hover:-translate-y-1 flex flex-col">
    <CardHeader>
      <div className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8" })}
      </div>
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-gray-400 text-base leading-relaxed">{description}</p>
    </CardContent>
    <CardFooter>
        <Button variant="outline" className="w-full bg-transparent border-primary text-primary hover:bg-primary hover:text-white" onClick={onTryIt}>
            Try It
        </Button>
    </CardFooter>
  </Card>
);
