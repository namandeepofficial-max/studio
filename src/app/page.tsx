
"use client";
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Search, BrainCircuit, Download, CheckCircle, ArrowRight, Twitter, Linkedin, Instagram, Mail, Phone, Library, Star } from 'lucide-react';
import { DocumentAnalyzer } from '@/components/document-analyzer';
import { useState } from 'react';
import { Header } from '@/components/header';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";


export default function Home() {
  const [showAnalyzer, setShowAnalyzer] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSendMessage = () => {
    const { name, email, interest, message } = contactForm;
    const mailtoLink = `mailto:evideciaflow@gmail.com?subject=Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AInterest: ${interest}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  if (showAnalyzer) {
    return <DocumentAnalyzer />;
  }
  
  return (
    <div className="bg-gray-900 text-white font-body">
      <Header onAnalyzeClick={() => setShowAnalyzer(true)} />

      {/* Hero Section */}
      <main className="container mx-auto px-6 text-center pt-24 pb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
          Streamline Your Research Workflow
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Evidecia Flow uses AI to analyze document structures, check section sequences, and help you produce perfectly formatted academic papers, effortlessly.
        </p>
        <Button 
          onClick={() => setShowAnalyzer(true)} 
          size="lg" 
          className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 transform transition-transform hover:scale-105"
        >
          Analyze Document Now <ArrowRight className="ml-2" />
        </Button>

        <div className="mt-12 w-full max-w-4xl mx-auto">
          <Image
            src="https://picsum.photos/1200/600"
            alt="Dashboard preview of the Evidecia Flow application showing analytics."
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
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-700 hidden md:block" />
            
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
      
      {/* Resources Section */}
      <section id="resources" className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-6 text-center">
              <h3 className="text-4xl font-bold mb-4">Explore Our Resources</h3>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                  Access our comprehensive guides, tutorials, and documentation to get the most out of EVIDECIA FLOW. Our resources are designed to help you succeed.
              </p>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Browse Resources <Library className="ml-2 h-4 w-4" />
              </Button>
          </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="1,250+" label="Research Papers" />
            <StatCard number="500+" label="Active Researchers" />
            <StatCard number="89%" label="Success Rate" />
            <StatCard number="24/7" label="Support Available" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <h3 className="text-4xl font-bold text-center mb-12">What Our Users Say</h3>
                <Carousel
                    plugins={[
                        Autoplay({
                          delay: 5000,
                          stopOnInteraction: true,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent>
                        <TestimonialCard
                            image="https://picsum.photos/100"
                            quote="This tool transformed my thesis writing process. The structure analysis is incredibly accurate and saved me hours of manual checking."
                            rating={5}
                            name="Dr. Alex Johnson"
                            designation="Senior Researcher"
                        />
                        <TestimonialCard
                            image="https://picsum.photos/101"
                            quote="EVIDECIA FLOW is a game-changer for academic writing. The sequence checker caught an error that my supervisor missed!"
                            rating={5}
                            name="Dr. Jane Smith"
                            designation="Postdoctoral Researcher"
                        />
                        <TestimonialCard
                            image="https://picsum.photos/102"
                            quote="I highly recommend this platform to all my students. It simplifies the most tedious parts of paper formatting."
                            rating={5}
                            name="Professor Chen"
                            designation="University of Science"
                        />
                         <TestimonialCard
                            image="https://picsum.photos/103"
                            quote="The best AI tool for researchers. The clean interface and powerful features make it an indispensable part of my workflow."
                            rating={5}
                            name="Dr. Emily Carter"
                            designation="Medical Research Fellow"
                        />
                        <TestimonialCard
                            image="https://picsum.photos/104"
                            quote="Finally, a tool that understands the nuances of academic documents. The section download feature is brilliant for collaborative projects."
                            rating={5}
                            name="Dr. Michael Brown"
                            designation="Ph.D. Candidate"
                        />
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
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
                  <span>evideciaflow@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Library className="w-6 h-6 text-primary" />
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
                    <Input id="name" placeholder="Your Name" value={contactForm.name} onChange={(e) => handleInputChange('name', e.target.value)} className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" value={contactForm.email} onChange={(e) => handleInputChange('email', e.target.value)} className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium text-gray-300">Research Interest</label>
                    <Select onValueChange={(value) => handleInputChange('interest', value)} value={contactForm.interest}>
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
                    <Textarea id="message" placeholder="Your message..." value={contactForm.message} onChange={(e) => handleInputChange('message', e.target.value)} className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400" />
                  </div>
                  <Button onClick={handleSendMessage} className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
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
      <Card className="bg-gray-800 border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-4">
          <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
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
      <div className="bg-primary/20 text-primary w-16 h-16 rounded-full flex items-center justify-center z-10 ring-8 ring-gray-900">
        {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8" })}
      </div>
    </div>
    <div className="md:w-5/12" />
  </div>
);

const TestimonialCard = ({ image, quote, rating, name, designation }: { image: string, quote: string, rating: number, name: string, designation: string }) => (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <Card className="h-full bg-gray-800/50 border-gray-700 shadow-lg flex flex-col justify-between text-center p-6 m-2">
            <CardHeader className="p-0">
                <Image
                    src={image}
                    alt={`Photo of ${name}`}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4 border-4 border-primary/50"
                    data-ai-hint="profile photo"
                />
            </CardHeader>
            <CardContent className="p-0 flex-grow flex flex-col justify-center">
                <p className="text-gray-300 italic mb-4">"{quote}"</p>
                <div className="flex justify-center mb-4">
                    {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    {[...Array(5-rating)].map((_, i) => (
                        <Star key={i+rating} className="h-5 w-5 text-gray-500" />
                    ))}
                </div>
            </CardContent>
            <CardFooter className="p-0 flex-col">
                <p className="font-bold text-lg text-white">{name}</p>
                <p className="text-sm text-gray-400">{designation}</p>
            </CardFooter>
        </Card>
    </CarouselItem>
);

const StatCard = ({ number, label }: { number: string, label: string }) => (
  <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg text-center transition-transform transform hover:scale-105 hover:border-primary">
    <p className="text-4xl font-bold text-primary">{number}</p>
    <p className="text-sm text-gray-400 mt-2">{label}</p>
  </div>
);
    


