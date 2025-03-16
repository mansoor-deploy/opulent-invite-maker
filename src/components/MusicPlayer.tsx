
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error("Couldn't play audio:", err);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleSound}
      className="fixed top-5 right-5 z-40 w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center hover:bg-gold/30 transition-all duration-300"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-gold-dark" />
      ) : (
        <VolumeX className="w-5 h-5 text-gold-dark" />
      )}
    </button>
  );
};

export default MusicPlayer;
