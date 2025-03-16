
import { useState, useRef, useEffect } from 'react';
import { Play, X } from 'lucide-react';

const VideoInvite = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8 && !isOpen) {
        setIsMinimized(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const toggleVideo = () => {
    setIsOpen(!isOpen);
    if (!isOpen && videoRef.current) {
      setTimeout(() => {
        videoRef.current?.play();
      }, 100);
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <div 
        className={`video-bubble ${isMinimized || isOpen ? 'active' : ''}`}
        onClick={toggleVideo}
      >
        <Play className="w-5 h-5 text-white" />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-up">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
            <button 
              className="absolute top-2 right-2 z-10 bg-gold rounded-full p-1"
              onClick={toggleVideo}
            >
              <X className="w-5 h-5 text-black" />
            </button>
            <video 
              ref={videoRef}
              className="w-full aspect-video"
              controls
              playsInline
            >
              <source 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
            <div className="p-4 bg-purple-dark/90">
              <h3 className="text-gold text-xl font-bold">Personal Invitation</h3>
              <p className="text-white/90 mt-2">
                Join me in celebrating this special milestone! I can't wait to see you there.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoInvite;
