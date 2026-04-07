import React from 'react';

const LegalPattern = () => (
  <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ 
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-rule='evenodd'%3E%3C!-- Gavel --%3E%3Cpath d='M40 40l10-10 15 15-10 10-15-15zm12-12l2-2 4 4-2 2-4-4z'/%3E%3Crect x='35' y='45' width='2' height='20' transform='rotate(-45 35 45)'/%3E%3C!-- Scales --%3E%3Cpath d='M150 50h20M160 50v20M145 75h30M150 70l-5 8h10l-5-8zm20 0l-5 8h10l-5-8z'/%3E%3C!-- Book --%3E%3Cpath d='M40 140h30v40H40v-40zm5 5h20v30H45v-30z'/%3E%3Cpath d='M50 150h10M50 155h10M50 160h10'/%3E%3C!-- Wig --%3E%3Cpath d='M150 140c-5.5 0-10 4.5-10 10v4h20v-4c0-5.5-4.5-10-10-10zm-6 10c0-3.3 2.7-6 6-6s6 2.7 6 6h-12z'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: '200px 200px'
  }}></div>
);

const ScalesIcon = ({ className, color = "white" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15V85M50 25L22 45M50 25L78 45" stroke={color} strokeWidth="4" strokeLinecap="round"/>
    <path d="M22 45L12 65H32L22 45ZM78 45L68 65H88L78 45Z" fill={color}/>
    <path d="M40 85H60M43 78H57" stroke={color} strokeWidth="4" strokeLinecap="round"/>
    <circle cx="50" cy="15" r="3.5" fill={color} />
  </svg>
);

export const OnboardingPage = ({ onSelectRole }) => {
  const roles = [
    { id: 'student', label: 'Student' },
    { id: 'lecturer', label: 'Lecturer' },
    { id: 'aspirant', label: 'Law Aspirant' },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#051121] overflow-hidden font-sans">
      <LegalPattern />
      
      <div className="relative z-10 w-full max-w-[450px] px-6 flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-6 flex flex-col items-center text-center">
          <ScalesIcon className="w-28 h-28 mb-4 drop-shadow-lg" />
          <h1 className="text-6xl font-bold text-white tracking-tight mb-1">
            LexGo
          </h1>
          <p className="text-xl text-white font-medium">
            Law on the Go
          </p>
        </div>

        {/* Buttons List */}
        <div className="w-full flex flex-col gap-4 mt-6">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => onSelectRole(role.id)}
              className="w-full py-4 bg-white text-[#051121] text-lg font-bold rounded-lg shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {role.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
