"use client";
import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Search, BrainCircuit, Download, CheckCircle, ArrowRight, Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { DocumentAnalyzer } from '@/components/document-analyzer';
import { useState } from 'react';

export default function Home() {
  const [showAnalyzer, setShowAnalyzer] = useState(false);

  if (showAnalyzer) {
    return <DocumentAnalyzer />;
  }
  
  return (
    <div className="bg-gray-900 text-white font-body">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          EVIDECIA FLOW
        </h1>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="hover:text-primary">Features</a>
          <a href="#how-it-works" className="hover:text-primary">How It Works</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <Button onClick={() => setShowAnalyzer(true)} variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 text-center pt-24 pb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
          Streamline Your Research Workflow
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Evidecia Flow uses AI to analyze document structures, check section sequences, and help you produce perfectly formatted academic papers, effortlessly.
        </p>
        <Button onClick={() => setShowAnalyzer(true)} size="lg" className="bg-primary hover:bg-primary/90">
          Analyze Document Now <ArrowRight className="ml-2" />
        </Button>

        <div className="mt-8 flex justify-center items-center space-x-4 md:space-x-8 text-gray-300">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">Research Process</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Resources</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="mt-12 w-full max-w-4xl mx-auto">
          <Image
            src="https://picsum.photos/1200/600"
            alt="Dashboard preview"
            width={1200}
            height={600}
            className="rounded-xl shadow-2xl shadow-primary/20"
            data-ai-hint="dashboard analytics"
          />
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12">Powerful AI-Driven Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FileText />}
              title="Structure Extractor"
              description="AI automatically identifies and separates sections like Abstract, Introduction, and Conclusion."
            />
            <FeatureCard
              icon={<Search />}
              title="Section Viewer"
              description="Easily navigate and review each structural component in a clean, focused interface."
            />
            <FeatureCard
              icon={<CheckCircle />}
              title="Sequence Checker"
              description="Highlights sections that are out of standard academic order to prevent structural errors."
            />
            <FeatureCard
              icon={<Download />}
              title="Download Sections"
              description="Download individual sections of your document as separate text files for easy editing."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12">Simple Steps to Perfection</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-700 hidden md:block"></div>
            
            <HowItWorksStep
              step="1"
              title="Paste Your Document"
              description="Copy and paste your entire research paper into our analyzer. No complex uploads needed."
              icon={<FileText />}
              align="left"
            />
            <HowItWorksStep
              step="2"
              title="Let AI Do the Work"
              description="Our AI, powered by Genkit, analyzes the text to identify structure and check sequence."
              icon={<BrainCircuit />}
              align="right"
            />
            <HowItWorksStep
              step="3"
              title="Review & Download"
              description="Navigate through the identified sections, check for errors, and download what you need."
              icon={<Download />}
              align="left"
            />
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-6 text-center">
              <h3 className="text-4xl font-bold mb-4">Free and Open Source</h3>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                  EVIDECIA FLOW is completely free to use. Our mission is to provide powerful academic tools to everyone, everywhere. Get started right away without any costs.
              </p>
              <Button onClick={() => setShowAnalyzer(true)} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Start Analyzing for Free
              </Button>
          </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-indigo-900/80">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold">Start Your Research Journey</h3>
              <p className="text-lg text-gray-300">
                Get expert guidance and resources to make your research project successful.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>support@researchhub.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>123 Research Avenue, Academic City</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <Card className="bg-white/5 backdrop-blur-sm border-gray-700 text-card-foreground shadow-2xl rounded-xl">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <Input id="name" placeholder="Your Name" className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium text-gray-300">Research Interest</label>
                    <Select>
                      <SelectTrigger id="interest" className="bg-gray-800/50 border-gray-600 text-white">
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-ml">Artificial Intelligence & Machine Learning</SelectItem>
                        <SelectItem value="biotech">Biotechnology</SelectItem>
                        <SelectItem value="humanities">Humanities</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                    <Textarea id="message" placeholder="Your message..." className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
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

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="bg-gray-800/50 border-gray-700 text-center hover:border-primary transition-colors duration-300 transform hover:-translate-y-2">
    <CardHeader>
      <div className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8" })}
      </div>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-400">{description}</p>
    </CardContent>
  </Card>
);

const HowItWorksStep = ({ step, title, description, icon, align }: { step: string, title: string, description: string, icon: React.ReactNode, align: 'left' | 'right' }) => (
  <div className={`flex items-center w-full mb-8 md:mb-0 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
    <div className="md:w-5/12">
      <Card className="bg-gray-800 border-gray-700 p-6">
        <div className="flex items-center gap-4">
          <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
            {step}
          </div>
          <div>
            <h4 className="text-2xl font-bold">{title}</h4>
            <p className="text-gray-400 mt-2">{description}</p>
          </div>
        </div>
      </Card>
    </div>
    <div className="hidden md:flex w-2/12 justify-center">
      <div className="bg-primary/20 text-primary w-16 h-16 rounded-full flex items-center justify-center z-10">
        {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8" })}
      </div>
    </div>
    <div className="md:w-5/12"></div>
  </div>
);
