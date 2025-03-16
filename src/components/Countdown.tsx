
import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="my-8 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 gold-text">Counting Down to the Celebration</h2>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-purple-light/10 border border-gold flex items-center justify-center animate-float shadow-md">
              <span className="text-3xl md:text-4xl font-bold gold-text">{value}</span>
            </div>
            <span className="mt-2 text-sm uppercase tracking-widest text-purple-dark font-medium">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
