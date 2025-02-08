import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface FirstPageProps {
  onNextPage: () => void;
}

const images = [
  "src/assets/1.jpg", // Replace these with your girlfriend's photos
  "src/assets/2.jpg",
  "src/assets/3.jpg",
];

const loveNotes = [
  "You make my heart smile ❤️",
 
  "Every moment with you is magical ✨",
 
  "You're my favorite person in the world 🌎",
 
  "You light up my life 🌟",
 
  "Forever yours 💕"
];

export default function FirstPage({ onNextPage }: FirstPageProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev: number) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-8 relative overflow-hidden">
      <div className="w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-8 relative">
  <img
    src={images[currentImage]}
    alt="My Love"
    className="absolute inset-0 w-fill h-fill object-fit transition-opacity duration-500"
  />
      </div>
      
      <div className="grid grid-cols-3 gap-6 w-full max-w-4xl mb-8">
        {loveNotes.map((note, index) => (
          <div
            key={index}
            className="animate-float"
            style={{
              animationDelay: `${index * 0.5}s`,
            }}
          >
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-[#9d4edd] text-center">{note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-4xl">
        <button
          onClick={onNextPage}
          className="ml-8 flex items-center gap-2 bg-[#9d4edd] text-white px-6 py-3 rounded-full hover:bg-[#7b2cbf] transition-colors"
        >
          Continue to Our Story
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}