"use client";

import { useState } from 'react';
import { Button, Input } from '@boldmind/ui';
import { Mail, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function NewsletterForm({ 
  compact = false, 
  product = 'amebogist',
  tags = []
}: { 
  compact?: boolean; 
  product?: string;
  tags?: string[];
}) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubscribed(true);
    toast.success('Welcome to the inner circle! 🚀');
  };

  if (isSubscribed) {
    return (
      <div className="flex items-center justify-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
        <CheckCircle2 className="h-5 w-5" />
        <span className="font-medium">You're in! Check your inbox soon.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 ${compact ? '' : 'max-w-md mx-auto'}`}>
      <div className="relative flex-1">
        <Input
          type="email"
          placeholder="Enter your email"
          required
          className="pl-10 h-12 rounded-lg border-gray-200 focus:border-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full h-12 bg-gray-900 hover:bg-black text-white rounded-lg font-bold"
      >
        {isLoading ? 'Joining...' : 'Subscribe Now'}
      </Button>
    </form>
  );
}
