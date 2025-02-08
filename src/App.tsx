import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-[#f3e6ff]">
      {currentPage === 1 && (
        <FirstPage onNextPage={() => setCurrentPage(2)} />
      )}
      {currentPage === 2 && (
        <SecondPage onNextPage={() => setCurrentPage(3)} />
      )}
      {currentPage === 3 && (
        <ThirdPage />
      )}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`p-2 rounded-full ${
              currentPage === page ? 'bg-[#9d4edd]' : 'bg-[#e0b3ff]'
            }`}
          >
            <Heart size={16} className="text-white" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;