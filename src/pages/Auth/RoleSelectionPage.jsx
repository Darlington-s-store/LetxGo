import React from 'react';
import { Logo } from '../../components/Auth/Logo';
import { BrandPanel } from '../../components/Auth/BrandPanel';

export const RoleSelectionPage = ({ onRoleSelect }) => {
  const roles = [
    { id: 'student', label: 'Student' },
    { id: 'lecturer', label: 'Lecturer' },
    { id: 'law-aspirant', label: 'Law Aspirant' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Brand Panel */}
      <BrandPanel />

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          {/* Logo and Branding */}
          <div className="text-center mb-12">
            <Logo />
          </div>

          {/* Role Selection Buttons */}
          <div className="space-y-4">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => onRoleSelect(role.id)}
                className="w-full py-3 px-4 bg-white border-2 border-gray-300 rounded-lg font-semibold text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
