import React from 'react';

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
        <svg
          className="w-10 h-10"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Scales of Justice Logo */}
          <circle cx="20" cy="8" r="3" fill="#1F2937" />
          <path
            d="M20 11L12 25M20 11L28 25"
            stroke="#1F2937"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="10" y="25" width="6" height="8" rx="1" fill="#1F2937" />
          <rect x="24" y="25" width="6" height="8" rx="1" fill="#1F2937" />
        </svg>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white">LexGo</h1>
        <p className="text-sm text-gray-400">Law on the Go</p>
      </div>
    </div>
  );
};
