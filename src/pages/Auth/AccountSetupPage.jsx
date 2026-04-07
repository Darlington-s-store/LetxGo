import React, { useEffect } from 'react';

export const AccountSetupPage = ({ onComplete }) => {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      onComplete?.();
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [onComplete]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fbf8f8] px-6">
      <div className="flex flex-col items-center text-center">
        <span className="mb-12 h-2 w-2 rounded-full bg-[#9f9bb7] animate-pulse" aria-hidden="true" />
        <p className="text-[20px] font-semibold tracking-[-0.02em] text-[#1b2333]">
          Please wait... setting things up
        </p>
      </div>
    </div>
  );
};
