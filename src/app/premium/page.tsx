
"use client";
import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Crown, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Header } from '@/components/header';
import { cn } from '@/lib/utils';

export default function PremiumPage() {
  const tiers = [
    {
      name: "Pro",
      price: "₹699.76",
      features: [
        "Access to four AI features: Paper Polisher, AI Lab Coach, Smart Citation, Figure Designer",
        "Best Autonomous Coding Agent",
        "API & IOE Integration",
        "AI Chat Box",
        "Email support (response within 24–48 hours)",
        "Standard Export option (PDF, DOCX, LaTeX format)",
        "Journal Recommendation Engine (future idea)",
        "Time Management Tool (future idea)",
      ],
      cta: "Choose Plan",
      featured: false,
    },
    {
      name: "Business",
      price: "₹1,750.71",
      features: [
        "Everything in Pro",
        "Additional AI Tools: Idea Synthesizer, Claim Checker",
        "Plagiarism Prevention (additional tool)",
        "Custom Journal Templates",
        "Batch Processing",
        "Advanced Analytics",
        "Team Collaboration (up to 10 members)",
        "Priority Support (12-hour response)",
      ],
      cta: "Choose Plan",
      featured: true,
    },
    {
      name: "Ultimate",
      price: "₹8,757.06",
      features: [
        "Everything in Business",
        "Real-time Researcher Guidance",
        "Enterprise Collaboration Platform",
        "Advanced Security & Compliance",
        "24/7 phone support hotline",
        "Newspaper & Articles Access",
        "Enterprise Analytics Suite",
        "Institution-wide research impact tracking",
      ],
      cta: "Choose Plan",
      featured: false,
    },
  ];

  return (
    <div className="bg-gray-900 text-white font-body min-h-screen">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
            <Link href="/" className="text-primary hover:underline inline-flex items-center gap-2 mb-4">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
            </Link>
          <h2 className="text-5xl font-extrabold mb-4 flex items-center justify-center gap-4">
            <Crown className="w-12 h-12 text-primary" />
            Premium Plans
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Unlock powerful AI features to accelerate your research and enhance your productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {tiers.map((tier) => (
                <PricingCard key={tier.name} {...tier} />
            ))}
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


const PricingCard = ({ name, price, features, cta, featured }: { name: string, price: string, features: string[], cta: string, featured: boolean }) => (
    <Card className={cn(
        "bg-gray-800/50 border-gray-700 text-center transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full",
        featured ? "border-primary shadow-2xl shadow-primary/20 scale-105" : "hover:border-primary"
    )}>
        <CardHeader>
            <CardTitle className="text-3xl font-bold">{name}</CardTitle>
            <CardDescription className="text-gray-400 text-lg">{price} / month</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow space-y-4 text-left p-6">
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                    </li>
                ))}
            </ul>
        </CardContent>
        <CardFooter className="p-6 mt-auto">
            <Button size="lg" className={cn(
                "w-full",
                featured ? "bg-primary hover:bg-primary/90" : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white"
            )}>
                {cta}
            </Button>
        </CardFooter>
    </Card>
);
