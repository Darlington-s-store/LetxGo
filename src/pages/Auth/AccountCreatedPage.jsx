import React from 'react';

const CheckIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12.5L9.25 16.75L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const AccountCreatedPage = ({ onGoToDashboard }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fbf8f8] px-6">
      <div className="w-full max-w-[290px] rounded-[22px] bg-white p-6 text-center shadow-[0_14px_40px_rgba(11,22,39,0.06)]">
        <div className="mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#061526] text-white">
          <CheckIcon />
        </div>

        <h2 className="mt-4 text-[19px] font-semibold tracking-[-0.02em] text-[#1b2333]">
          Account Created Succesfully
        </h2>

        <p className="mt-4 text-[11px] leading-[1.45] text-[#7f7b85]">
          Welcome aboard. Your account has been successfully set up. You now have access to
          explore legal courses, take quizzes, and review your assessments.
        </p>

        <button
          type="button"
          onClick={onGoToDashboard}
          className="mt-6 flex h-[44px] w-full items-center justify-center rounded-lg bg-[#061526] text-[14px] font-semibold text-white transition hover:bg-[#0b1c32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061526]"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};
