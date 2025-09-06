
"use client";
import * as React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, CreditCard, Calendar, Lock, User, Mail, MapPin } from 'lucide-react';
import { Header } from '@/components/header';
import { useToast } from '@/hooks/use-toast';

const planDetails: { [key: string]: { name: string; price: string } } = {
    Pro: { name: 'Pro', price: '₹699.76' },
    Business: { name: 'Business', price: '₹1,750.71' },
    Ultimate: { name: 'Ultimate', price: '₹8,757.06' },
};

export default function PaymentPage() {
    const searchParams = useSearchParams();
    const planName = searchParams.get('plan') || 'Pro';
    const selectedPlan = planDetails[planName];
    const { toast } = useToast();

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would handle payment processing here.
        toast({
            title: "Payment Successful!",
            description: `You have successfully subscribed to the ${selectedPlan.name} plan.`,
        });
    }

    return (
        <div className="bg-gray-900 text-white font-body min-h-screen">
            <Header />
            <main className="container mx-auto px-6 py-16 flex items-center justify-center">
                <Card className="w-full max-w-4xl bg-gray-800/50 border-gray-700 shadow-2xl shadow-primary/20 grid lg:grid-cols-2">
                    {/* Left side - Order Summary */}
                    <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-700 flex flex-col">
                        <CardHeader>
                            <Link href="/premium" className="text-primary hover:underline inline-flex items-center gap-2 mb-4">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Plans
                            </Link>
                            <CardTitle className="text-3xl font-bold">Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-6">
                            <div className="bg-gray-700/50 p-6 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-white">Plan: {selectedPlan.name}</h3>
                                    <p className="text-xl font-bold text-primary">{selectedPlan.price}/month</p>
                                </div>
                                <CardDescription className="mt-2 text-gray-400">Billed monthly. You can cancel anytime.</CardDescription>
                            </div>
                            <div className="space-y-2 text-gray-300">
                                <p>This subscription will give you access to all features included in the <strong>{selectedPlan.name}</strong> plan.</p>
                                <p>An invoice will be sent to your email after payment.</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <p className="text-xs text-gray-500">
                                By completing your purchase, you agree to our Terms of Service.
                            </p>
                        </CardFooter>
                    </div>

                    {/* Right side - Payment Details */}
                    <form className="p-8" onSubmit={handlePayment}>
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold">Payment Details</CardTitle>
                            <CardDescription>Enter your payment information below.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <Input id="name" placeholder="John Doe" className="pl-10 bg-gray-800 border-gray-600" required />
                                </div>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <Input id="email" type="email" placeholder="john.doe@example.com" className="pl-10 bg-gray-800 border-gray-600" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="card-number">Card Number</Label>
                                <div className="relative">
                                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <Input id="card-number" placeholder="0000 0000 0000 0000" className="pl-10 bg-gray-800 border-gray-600" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="expiry-date">Expiry Date</Label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <Input id="expiry-date" placeholder="MM/YY" className="pl-10 bg-gray-800 border-gray-600" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cvc">CVC</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <Input id="cvc" placeholder="123" className="pl-10 bg-gray-800 border-gray-600" required />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                                Pay {selectedPlan.price}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </main>
        </div>
    );
}
