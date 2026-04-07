import React from 'react';

const LEGAL_PATTERN = `url("data:image/svg+xml,${encodeURIComponent(`
  <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#EEE8E8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.95">
      <g transform="translate(12 10)">
        <path d="M15 12V34" />
        <path d="M15 16L5 26M15 16L25 26" />
        <path d="M5 26L1 34H9L5 26Z" />
        <path d="M25 26L21 34H29L25 26Z" />
        <path d="M8 38H22" />
      </g>
      <g transform="translate(70 18)">
        <path d="M3 8H21L25 15H7L3 8Z" />
        <path d="M3 8V25H25V8" />
        <path d="M14 8V25" />
      </g>
      <g transform="translate(126 12)">
        <path d="M6 34C6 18 12 10 22 10C32 10 38 18 38 34" />
        <path d="M10 38H34" />
      </g>
      <g transform="translate(176 12)">
        <path d="M6 10L26 18" />
        <path d="M16 6L30 11" />
        <path d="M10 25L20 10" />
        <path d="M5 28L15 13" />
      </g>

      <g transform="translate(18 74)">
        <path d="M2 10H28V24H2V10Z" />
        <path d="M2 24H28" />
      </g>
      <g transform="translate(76 68)">
        <path d="M15 12V34" />
        <path d="M15 16L5 26M15 16L25 26" />
        <path d="M5 26L1 34H9L5 26Z" />
        <path d="M25 26L21 34H29L25 26Z" />
        <path d="M8 38H22" />
      </g>
      <g transform="translate(130 74)">
        <path d="M3 8H21L25 15H7L3 8Z" />
        <path d="M3 8V25H25V8" />
        <path d="M14 8V25" />
      </g>
      <g transform="translate(180 68)">
        <path d="M6 34C6 18 12 10 22 10C32 10 38 18 38 34" />
        <path d="M10 38H34" />
      </g>

      <g transform="translate(12 132)">
        <path d="M6 10L26 18" />
        <path d="M16 6L30 11" />
        <path d="M10 25L20 10" />
        <path d="M5 28L15 13" />
      </g>
      <g transform="translate(70 128)">
        <path d="M2 10H28V24H2V10Z" />
        <path d="M2 24H28" />
      </g>
      <g transform="translate(128 124)">
        <path d="M15 12V34" />
        <path d="M15 16L5 26M15 16L25 26" />
        <path d="M5 26L1 34H9L5 26Z" />
        <path d="M25 26L21 34H29L25 26Z" />
        <path d="M8 38H22" />
      </g>
      <g transform="translate(180 128)">
        <path d="M3 8H21L25 15H7L3 8Z" />
        <path d="M3 8V25H25V8" />
        <path d="M14 8V25" />
      </g>
    </g>
  </svg>
`)})")`;

const CloseIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1">
    <path d="M7 7L17 17" strokeLinecap="round" />
    <path d="M17 7L7 17" strokeLinecap="round" />
  </svg>
);

const sections = [
  {
    title: 'Case Title',
    body:
      'The official name of the case, usually written as Person A v. Person B (civil cases) or The Republic v. Person (criminal cases). Example: Republic v. Mensah',
  },
  {
    title: 'Court & Citation',
    body:
      'Shows the court that decided the case and the legal citation used to find the judgment later.',
  },
  {
    title: 'Date of Judgment',
    body:
      'The exact day the decision was given. Helps place the case in time.',
  },
  {
    title: 'Coram (Judges)',
    body:
      'The judges who heard the case. This is important because senior judges’ opinions often guide future rulings.',
  },
  {
    title: 'Parties',
    body:
      'The people or entities involved. In criminal cases: The Republic (state) v. the accused. In civil cases: Person v. Person.',
  },
  {
    title: 'Facts',
    body:
      'A short background story of what happened before the case came to court and provides context.',
  },
];

export const QuestionReviewPage = ({ onClose }) => {
  return (
    <div
      className="absolute inset-0 z-20 overflow-y-auto rounded-[28px] bg-[#fcf9f9] px-6 py-8 sm:px-8 sm:py-9"
      style={{
        backgroundImage: LEGAL_PATTERN,
        backgroundSize: '220px 220px',
      }}
    >
      <div className="mx-auto max-w-[1060px]">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#111827] sm:text-[30px]">
            Question Review
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#111827] transition hover:bg-[#f2ecec]"
            aria-label="Close question review"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="mt-16 max-w-[1050px]">
          <h3 className="text-[28px] font-semibold tracking-[-0.03em] text-[#111827] sm:text-[30px]">
            Understanding Case Summaries
          </h3>
          <p className="mt-4 max-w-[1040px] text-[15px] leading-[1.18] text-[#111827]">
            Reading and analyzing legal cases can feel overwhelming, especially if you are new to law studies. Each case is broken down into specific sections to help you understand the background, the questions before the court, the decision, and why it matters.
          </p>
          <p className="mt-1 max-w-[1040px] text-[15px] leading-[1.18] text-[#111827]">
            This guide explains what each section of a case summary means so that you can follow along more easily and get the most out of your reading. Use it whenever you need clarity on how cases are structured in the app.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-[28px] font-semibold tracking-[-0.03em] text-[#111827] sm:text-[30px]">
            Case Sessions Explained
          </h3>

          <div className="mt-6 space-y-7 text-[#111827]">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="text-[18px] font-semibold tracking-[-0.02em]">{section.title}</h4>
                <p className="mt-2 max-w-[1040px] text-[15px] leading-[1.28]">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
