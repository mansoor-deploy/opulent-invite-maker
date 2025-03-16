
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const inspirationalMessages = [
  "Preparing a golden celebration just for you...",
  "Crafting memories that will last a lifetime...",
  "Polishing the champagne glasses for your special day...",
  "Rolling out the red carpet for your milestone celebration...",
  "Adding the final touches to your extraordinary journey..."
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Set random inspirational message
    setMessage(inspirationalMessages[Math.floor(Math.random() * inspirationalMessages.length)]);
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadComplete();
          }, 500); // Delay to complete animation
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-8">
        <div className="mb-10 relative">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold gold-text text-center mb-3">50</h1>
            <h2 className="text-2xl text-center mb-8 text-purple">Golden Years</h2>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-gold/30 border-t-gold animate-spin"></div>
        </div>
        
        <p className="text-center text-gray-600 mb-6 h-10">{message}</p>
        
        <Progress value={progress} className="h-2 mb-8" />
        
        <div className="space-y-3">
          <Skeleton className="h-4 w-full max-w-[250px] mx-auto bg-gold/10" />
          <Skeleton className="h-4 w-full max-w-[200px] mx-auto bg-gold/10" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mt-12">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full bg-gold opacity-60"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animation: "bounce 1.5s infinite" 
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
