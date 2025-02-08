import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

function calculateTimeDifference(startDate: Date) {
  const now = new Date();
  const difference = now.getTime() - startDate.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function ThirdPage() {
  const [time, setTime] = useState(calculateTimeDifference(new Date('2023-10-04')));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeDifference(new Date('2023-10-04')));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <div className="w-full max-w-2xl aspect-square relative">
        {/* Tree Trunk */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-16 h-64 bg-[#7b2cbf] rounded-lg" />
        
        {/* Tree Branches */}
        <div className="absolute left-1/2 bottom-48 -translate-x-1/2">
          <div className="relative w-96 h-96">
            {/* Main branches */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-8 h-48 bg-[#7b2cbf] rounded-full transform -rotate-45 origin-bottom" />
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-8 h-48 bg-[#7b2cbf] rounded-full transform rotate-45 origin-bottom" />
            
            {/* Heart-shaped flowers */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${30 + Math.random() * 40}%`,
                  top: `${20 + Math.random() * 40}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                <Heart
                  size={32}
                  fill="#e0b3ff"
                  className="text-[#9d4edd]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-2xl font-semibold text-[#9d4edd] mb-4">Time Together</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4">
            <p className="text-3xl font-bold text-[#9d4edd]">{time.days}</p>
            <p className="text-sm text-gray-600">Days</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-bold text-[#9d4edd]">{time.hours}</p>
            <p className="text-sm text-gray-600">Hours</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-bold text-[#9d4edd]">{time.minutes}</p>
            <p className="text-sm text-gray-600">Minutes</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-bold text-[#9d4edd]">{time.seconds}</p>
            <p className="text-sm text-gray-600">Seconds</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600">Since October 4, 2023</p>
      </div>
    </div>
  );
}