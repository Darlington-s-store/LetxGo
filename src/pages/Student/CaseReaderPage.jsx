import React, { useState } from 'react';
import { mockCaseReaderDefaultCase } from '../../mockData/index';
import { QuestionReviewPage } from './QuestionReviewPage';

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

const scalesColor = '#0c1728';

const ScalesIcon = ({ className = '', color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="48" cy="14" r="4.5" fill={color} />
    <path d="M48 20V72" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    <path d="M31 73H65" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    <path d="M40 20H56" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    <path d="M48 24L17 39" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    <path d="M48 24L79 39" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    <path d="M17 39L8.5 57.5H25.5L17 39Z" fill={color} />
    <path d="M79 39L70.5 57.5H87.5L79 39Z" fill={color} />
    <path d="M32 74.5C32 68.7 36.7 64 42.5 64H53.5C59.3 64 64 68.7 64 74.5V77H32V74.5Z" fill={color} />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 7L9 12L14 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InfoIcon = () => (
  <svg className="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 11V15" strokeLinecap="round" />
    <circle cx="12" cy="8" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const CaseReaderPage = ({ caseItem = mockCaseReaderDefaultCase, onBack }) => {
  const [isQuestionReviewOpen, setIsQuestionReviewOpen] = useState(false);

  const resolvedCase = {
    ...mockCaseReaderDefaultCase,
    ...caseItem,
  };

  return (
    <section
      className="relative min-h-[calc(100vh-130px)] overflow-hidden rounded-[28px] bg-[#fcf9f9] px-5 py-5 sm:px-8 sm:py-7"
      style={{
        backgroundImage: LEGAL_PATTERN,
        backgroundSize: '220px 220px',
      }}
    >
      <div className="relative z-10">
        <div className="mb-10 flex items-start justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7d7db] bg-white text-[#111827] transition hover:bg-[#f8f4f4]"
            aria-label="Go back to cases"
          >
            <ArrowLeftIcon />
          </button>

          <button
            type="button"
            onClick={() => setIsQuestionReviewOpen(true)}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d7d7db] bg-white text-[#111827]"
            aria-label="Case information"
          >
            <InfoIcon />
          </button>
        </div>

        <div className="mx-auto max-w-[420px] text-center">
          <ScalesIcon className="mx-auto h-16 w-16" color={scalesColor} />
          <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-[#111827]">
            {resolvedCase.title}
          </h2>
          <p className="mt-1 text-[13px] font-medium text-[#1f2937]">{resolvedCase.court}</p>
          <p className="mt-1 text-[12px] text-[#515866]">{resolvedCase.citation}</p>
        </div>

        <div className="mx-auto mt-8 max-w-[840px] text-[#111827]">
          <p className="text-[14px] leading-[1.65]">
            <span className="font-semibold">Coram:</span> {resolvedCase.coram}
          </p>

          <div className="mt-5">
            <h3 className="text-[34px] font-semibold tracking-[-0.03em] text-[#111827]">
              Structured Sections
            </h3>
          </div>

          <div className="mt-4 space-y-4 text-[14px] leading-[1.65]">
            <div>
              <p className="font-semibold">Facts -</p>
              <div className="mt-1 space-y-1 pl-7">
                {resolvedCase.facts.map((fact) => (
                  <p key={fact}>- {fact}</p>
                ))}
              </div>
              <p className="mt-1 pl-7">{resolvedCase.factsText}</p>
            </div>

            <div>
              <p className="font-semibold">Issues -</p>
              <div className="mt-1 pl-7">
                {resolvedCase.issues.map((issue) => (
                  <p key={issue}>-{issue}</p>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold">Decision/Holding: -</p>
              <p className="pl-7">-{resolvedCase.decisionHolding}</p>
            </div>

            <div>
              <p className="font-semibold">Reasoning: -</p>
              <div className="pl-7">
                {resolvedCase.reasoning.map((reason, index) => (
                  <p key={index}>-{reason}</p>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold">Significance: -</p>
              <p className="pl-7">-{resolvedCase.significance}</p>
            </div>

            <div>
              <p className="font-semibold">Related Cases: -</p>
              <div className="pl-7">
                {resolvedCase.relatedCases.map((relatedCase) => (
                  <p key={relatedCase}>-- {relatedCase}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isQuestionReviewOpen ? (
        <QuestionReviewPage onClose={() => setIsQuestionReviewOpen(false)} />
      ) : null}
    </section>
  );
};
