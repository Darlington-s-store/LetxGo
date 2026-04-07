import React from 'react';

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg
        className="w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Scales of Justice Logo - Professional Design */}
        {/* Center pillar */}
        <circle cx="24" cy="8" r="2" fill="currentColor" className="text-gray-900" />
        <line x1="24" y1="10" x2="24" y2="36" stroke="currentColor" strokeWidth="2" className="text-gray-900" strokeLinecap="round" />
        
        {/* Balance beam */}
        <line x1="12" y1="12" x2="36" y2="12" stroke="currentColor" strokeWidth="2.5" className="text-gray-900" strokeLinecap="round" />
        
        {/* Left scale */}
        <line x1="16" y1="12" x2="10" y2="24" stroke="currentColor" strokeWidth="2" className="text-gray-900" strokeLinecap="round" />
        <path d="M6 24 L14 24 L12 32 L8 32 Z" fill="currentColor" className="text-gray-900" />
        
        {/* Right scale */}
        <line x1="32" y1="12" x2="38" y2="24" stroke="currentColor" strokeWidth="2" className="text-gray-900" strokeLinecap="round" />
        <path d="M34 24 L42 24 L40 32 L36 32 Z" fill="currentColor" className="text-gray-900" />
        
        {/* Base */}
        <line x1="16" y1="36" x2="32" y2="36" stroke="currentColor" strokeWidth="2" className="text-gray-900" strokeLinecap="round" />
      </svg>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">LexGo</h1>
        <p className="text-xs text-gray-600">Law on the Go</p>
      </div>
    </div>
  );
};
