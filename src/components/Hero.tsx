
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PartyPopper } from 'lucide-react';

interface HeroProps {
  name: string;
  age: number;
  onRSVPClick: () => void;
  onGalleryClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ name, age, onRSVPClick, onGalleryClick }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-purple-light/5"></div>
        
        {/* Gold decorative elements */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gold-light opacity-20 animate-sparkle`}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container px-4 z-10">
        <div 
          className={`text-center transition-all duration-1000 transform ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-purple uppercase tracking-widest mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            You Are Cordially Invited To
          </p>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 gold-text animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {name}'s
            <br />
            <span className="relative">
              {age}
              <sup className="absolute top-0 -right-6 text-2xl md:text-3xl">th</sup>
            </span>
            <br />
            Birthday
          </h1>
          
          <div className="flex items-center justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="h-px w-12 bg-gold"></div>
            <PartyPopper className="mx-4 text-gold w-8 h-8" />
            <div className="h-px w-12 bg-gold"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            Join us for an elegant evening of celebration, fine dining, and dancing as we mark this golden milestone.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <Button 
              onClick={onRSVPClick}
              className="bg-gold hover:bg-gold-dark text-black font-bold px-8 py-3 rounded-full"
            >
              RSVP Now
            </Button>
            <Button 
              variant="outline" 
              className="border-purple text-purple hover:bg-purple hover:text-white font-bold px-8 py-3 rounded-full"
              onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Details
            </Button>
            {onGalleryClick && (
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-white font-bold px-8 py-3 rounded-full"
                onClick={onGalleryClick}
              >
                View Gallery
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
