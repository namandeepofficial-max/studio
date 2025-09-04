
"use client";
import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, ArrowRight, Twitter, Linkedin, Facebook, GraduationCap, Scale, Zap, Sparkles, Edit, BarChart2, Beaker, Quote, Lightbulb, SearchCheck } from 'lucide-react';

export default function FeaturesPage() {
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
        <nav className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-primary hover:text-primary/80 transition-colors">Features</Link>
            <a href="/#how-it-works" className="text-gray-400 hover:text-primary transition-colors">Research Process</a>
            <a href="/#pricing" className="text-gray-400 hover:text-primary transition-colors">Resources</a>
            <a href="/#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
        </nav>
        <Link href="/signup" passHref>
          <Button variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
            <Link href="/" className="text-primary hover:underline inline-flex items-center gap-2 mb-4">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
            </Link>
          <h2 className="text-5xl font-extrabold mb-4">
            Features
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Discover how EVIDECIA FLOW empowers your research with powerful, AI-driven tools.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
                <FeatureAccordionItem
                    value="refine"
                    title="Refine"
                    icon={<Scale />}
                    tools={[
                        { icon: <Edit />, title: 'Paper Polisher', description: 'AI automatically rewrites your paper abstract in the style of specific journal reviewers or grant evaluators.' },
                        { icon: <BarChart2 />, title: 'Figure Designer', description: 'Drag-and-drop research plots and automatically standardize fonts, colors, and labels to match journal guidelines in seconds.' }
                    ]}
                />
                <FeatureAccordionItem
                    value="optimize"
                    title="Optimize"
                    icon={<Zap />}
                    tools={[
                        { icon: <Beaker />, title: 'AI Lab Coach', description: 'For lab experiments: enter your protocol and the tool cross-references public repositories to suggest small tweaks that reduce cost or time.' },
                        { icon: <Quote />, title: 'Citations in Context', description: 'Instead of just giving a list of references, it shows how each paper you cite actually phrases the key point, so you don’t accidentally misquote.' }
                    ]}
                />
                <FeatureAccordionItem
                    value="innovate"
                    title="Innovate"
                    icon={<Sparkles />}
                    tools={[
                        { icon: <Lightbulb />, title: 'Idea Re-Combinator', description: 'Pulls random methods from unrelated fields and suggests weird but plausible combinations you’d never think of.' },
                        { icon: <SearchCheck />, title: 'Claim Checker', description: 'Analyzes two or more papers to flag conflicting conclusions on the same topic, then summarizes the disagreement.' }
                    ]}
                />
            </Accordion>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold">EVIDECIA FLOW</h4>
            <p className="text-gray-500">© 2024 All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary"><Twitter /></a>
            <a href="#" className="text-gray-400 hover:text-primary"><Linkedin /></a>
            <a href="#" className="text-gray-400 hover:text-primary"><Facebook /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FeatureAccordionItem = ({ value, title, icon, tools }: { value: string, title: string, icon: React.ReactNode, tools: { icon: React.ReactNode, title: string, description: string }[] }) => (
    <AccordionItem value={value} className="bg-gray-800/50 border-gray-700 rounded-xl">
        <AccordionTrigger className="p-6 text-2xl font-bold hover:no-underline">
            <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center">
                    {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                {title}
            </div>
        </AccordionTrigger>
        <AccordionContent className="p-6 pt-0">
            <div className="grid md:grid-cols-2 gap-8 mt-4">
                {tools.map((tool, index) => (
                    <ToolCard key={index} icon={tool.icon} title={tool.title} description={tool.description} />
                ))}
            </div>
        </AccordionContent>
    </AccordionItem>
);

const ToolCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
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
        <Button variant="outline" className="w-full bg-transparent border-primary text-primary hover:bg-primary hover:text-white">
            Try It
        </Button>
    </CardFooter>
  </Card>
);
