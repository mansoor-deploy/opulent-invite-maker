
import { useRef, useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import EventDetails from '@/components/EventDetails';
import RSVP from '@/components/RSVP';
import MusicPlayer from '@/components/MusicPlayer';
import VideoInvite from '@/components/VideoInvite';
import Gallery from '@/components/Gallery';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  
  // Event date - set to a future date
  const eventDate = new Date();
  eventDate.setMonth(eventDate.getMonth() + 2); // 2 months from now
  eventDate.setHours(18, 0, 0, 0); // 6:00 PM

  const rsvpRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollToRSVP = () => {
    rsvpRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Background Music Player */}
      <MusicPlayer />
      
      {/* Video Invite Bubble */}
      <VideoInvite />
      
      {/* Hero Section */}
      <Hero 
        name="Alexander" 
        age={50} 
        onRSVPClick={scrollToRSVP} 
        onGalleryClick={scrollToGallery}
      />
      
      {/* Countdown Timer */}
      <div className="container mx-auto py-16">
        <Countdown targetDate={eventDate} />
      </div>
      
      {/* Gallery Section */}
      <div ref={galleryRef}>
        <Gallery />
      </div>
      
      {/* Event Details */}
      <div id="details">
        <EventDetails 
          date={eventDate}
          venue="The Golden Palace"
          address="123 Elegant Avenue, Beverly Hills, CA 90210"
          time="6:00 PM - 10:00 PM"
        />
      </div>
      
      {/* RSVP Section */}
      <div ref={rsvpRef}>
        <RSVP />
      </div>
      
      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          <p className="mb-2">Created with love for your special day</p>
          <p>© {new Date().getFullYear()} Golden Celebration Invitations</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
