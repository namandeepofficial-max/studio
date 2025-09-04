"use client";
import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Twitter, Linkedin, Facebook, GraduationCap, Scale, Zap, Sparkles } from 'lucide-react';

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
            <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
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
            Our Features
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Discover how EVIDECIA FLOW empowers your research with powerful, AI-driven tools designed for every stage of your project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCategoryCard
                icon={<Scale />}
                title="Refine"
                description="Enhance the accuracy and clarity of your research with specialized refinement tools."
                link="/features/refine"
            />
            <FeatureCategoryCard
                icon={<Zap />}
                title="Optimize"
                description="Streamline your workflow and boost productivity with intelligent optimization features."
                link="/features/optimize"
            />
            <FeatureCategoryCard
                icon={<Sparkles />}
                title="Innovate"
                description="Spark creativity and discover new insights with our cutting-edge innovation toolkit."
                link="/features/innovate"
            />
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


const FeatureCategoryCard = ({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) => (
    <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-primary transition-colors duration-300 transform hover:-translate-y-2 flex flex-col">
        <CardHeader>
            <div className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8" })}
            </div>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <p className="text-gray-400">{description}</p>
        </CardContent>
        <CardFooter>
            <Link href={link} passHref className="w-full">
                <Button variant="outline" className="w-full bg-transparent border-primary text-primary hover:bg-primary hover:text-white">
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </CardFooter>
    </Card>
);
