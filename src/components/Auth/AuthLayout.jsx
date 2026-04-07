import React from 'react';

export const AuthLayout = ({ children, showBackgroundPattern = true }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
      <div className="w-full h-screen flex">
        {/* Left Side - Illustration/Background */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative overflow-hidden">
          {/* Background Pattern */}
          {showBackgroundPattern && (
            <svg
              className="w-full h-full opacity-20 absolute inset-0"
              viewBox="0 0 1200 1200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Legal Icons Pattern */}
              {Array.from({ length: 30 }).map((_, i) => (
                <g key={i} opacity="0.5">
                  {/* Scales */}
                  <circle cx={100 + i * 120} cy={100} r="3" fill="currentColor" />
                  <path
                    d={`M${100 + i * 120} 103L${90 + i * 120} 120L${110 + i * 120} 120`}
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                  />

                  {/* Books */}
                  <rect
                    x={120 + i * 120}
                    y={80}
                    width="12"
                    height="18"
                    fill="currentColor"
                  />
                </g>
              ))}
            </svg>
          )}
          
          {/* Center Logo/Branding */}
          <div className="relative z-10 text-center">
            <div className="w-24 h-24 bg-white bg-opacity-10 rounded-full flex items-center justify-center mb-8 mx-auto">
              <svg
                className="w-12 h-12 text-white"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="8" r="3" fill="currentColor" />
                <path
                  d="M20 11L12 25M20 11L28 25"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <rect x="10" y="25" width="6" height="8" rx="1" fill="currentColor" />
                <rect x="24" y="25" width="6" height="8" rx="1" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">LexGo</h2>
            <p className="text-gray-300 text-lg">Law on the Go</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 lg:bg-transparent">
          <div className="w-full max-w-md">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
