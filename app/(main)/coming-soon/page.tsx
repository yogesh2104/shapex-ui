import { Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';

const ComingSoon = () => {
  return (
    <div className="h-[calc(100vh-8rem)] flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-2xl border-border bg-card">
        <div className="p-8 text-center space-y-8">
          <div className="relative overflow-hidden">
            <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
              Coming Soon
            </h1>
          </div>

          <p className="text-lg text-foreground/80 animate-fadeIn">
            Something amazing is in the works. Stay tuned!
          </p>

          <div className="flex justify-center gap-6 py-4">
            <Clock className="w-8 h-8 text-foreground animate-spin-slow" />
            <Sparkles className="w-8 h-8 text-foreground animate-bounce" />
          </div>

          <div className="mt-8 space-y-4 animate-fadeIn">
            <p className="text-foreground/90 mb-4">Want to be notified when we launch?</p>
            <Link target='_blank' href="https://getwaitlist.com/waitlist/23491" className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:opacity-90">
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;