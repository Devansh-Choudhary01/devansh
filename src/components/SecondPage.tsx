import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SecondPageProps {
  onNextPage: () => void;
}

const photos = [
  "src/assets/1.jpg", // Replace these with your girlfriend's photos
  "src/assets/2.jpg",
  "src/assets/3.jpg",
];

const favorites = {
  "Favorite Color": "lilac",
  "Favorite Food": "Pizza",
  "Favorite Movie": "The Notebook",
  "Favorite Song": "Perfect - Ed Sheeran",
  "Favorite Place": "The beach at sunset",
  "Favorite Memory": "Our first date",
  "Favorite Activity": "Watching movies together",
  "Favorite Season": "Spring"
};

export default function SecondPage({ onNextPage }: SecondPageProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-8 p-8">
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-[#9d4edd] mb-6">Our Memories</h2>
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="w-auto h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold text-[#9d4edd] mb-6">All About You</h2>
        <div className="grid gap-4">
          {Object.entries(favorites).map(([category, item]) => (
            <div
              key={category}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-[#9d4edd] font-medium">{category}</h3>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onNextPage}
        className="fixed bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#9d4edd] text-white px-6 py-3 rounded-full hover:bg-[#7b2cbf] transition-colors"
      >
        See Our Love Story
        <ChevronRight size={20} />
      </button>
    </div>
  );
}