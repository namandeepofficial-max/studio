
"use client";
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult, createUserWithEmailAndPassword } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="24px"
        height="24px"
      >
        <path
          fill="#FFC107"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        />
        <path
          fill="#FF3D00"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        />
        <path
          fill="#4CAF50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        />
        <path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.022,35.242,44,30.038,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        />
      </svg>
    );
}
  

export default function SignUpPage() {
    const { toast } = useToast();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [otp, setOtp] = React.useState('');
    const [confirmationResult, setConfirmationResult] = React.useState<ConfirmationResult | null>(null);
    const [loading, setLoading] = React.useState(false);
    
    // Helper to set up reCAPTCHA
    const setupRecaptcha = () => {
        if (!auth) return;
        if ('recaptchaVerifier' in window) {
            (window as any).recaptchaVerifier.clear();
        }
        (window as any).recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'invisible',
            'callback': (response: any) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
          });
    };

    const handleEmailSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast({ title: "Success", description: "Account created successfully with email." });
        } catch (error: any) {
            toast({ variant: "destructive", title: "Error", description: error.message });
        }
        setLoading(false);
    };

    const handlePhoneSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setupRecaptcha();
        const appVerifier = (window as any).recaptchaVerifier;
        try {
            const result = await signInWithPhoneNumber(auth, `+${phone}`, appVerifier);
            setConfirmationResult(result);
            toast({ title: "OTP Sent", description: "An OTP has been sent to your phone number." });
        } catch (error: any) {
            toast({ variant: "destructive", title: "Error", description: error.message });
        }
        setLoading(false);
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!confirmationResult) return;
        setLoading(true);
        try {
            await confirmationResult.confirm(otp);
            toast({ title: "Success", description: "Phone number verified successfully." });
        } catch (error: any) {
            toast({ variant: "destructive", title: "Error", description: error.message });
        }
        setLoading(false);
    };


  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-900 p-4">
      <Card className="w-full max-w-md bg-gray-900/50 text-white border-gray-700 shadow-2xl shadow-primary/20">
        <CardHeader className="text-center">
            <Link href="/" className="flex items-center justify-center gap-2 mb-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span>EVIDECIA FLOW</span>
            </Link>
          <CardTitle className="text-3xl font-bold">Get Started</CardTitle>
          <CardDescription className="text-md text-gray-400">
            Create an account to start analyzing your research papers.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="email"><Mail className="mr-2 h-4 w-4" />Email</TabsTrigger>
                    <TabsTrigger value="phone"><Phone className="mr-2 h-4 w-4" />Phone</TabsTrigger>
                </TabsList>
                <TabsContent value="email" className="space-y-4 pt-4">
                    <form onSubmit={handleEmailSignUp} className="space-y-4">
                        <Input 
                            type="email" 
                            placeholder="Email Address" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                        />
                        <Input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                        />
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                            {loading ? 'Signing up...' : 'Sign Up with Email'}
                        </Button>
                    </form>
                    <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-200">
                        <GoogleIcon className="mr-2 h-5 w-5" />
                        Sign up with Gmail
                    </Button>
                </TabsContent>
                <TabsContent value="phone" className="space-y-4 pt-4">
                    {!confirmationResult ? (
                        <form onSubmit={handlePhoneSignUp} className="space-y-4">
                            <Input 
                                type="tel" 
                                placeholder="Phone Number (e.g. 11234567890)" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                            />
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                                {loading ? 'Sending OTP...' : 'Send OTP'}
                            </Button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOtp} className="space-y-4">
                            <Input 
                                type="text" 
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                            />
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                                {loading ? 'Verifying...' : 'Verify OTP'}
                            </Button>
                        </form>
                    )}
                </TabsContent>
            </Tabs>
          <div id="recaptcha-container"></div>
          <div className="text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link href="#" className="font-semibold text-primary hover:underline">
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
