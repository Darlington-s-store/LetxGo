import React, { useState } from 'react';
import { mockDictionaryEntries } from '../../mockData/index';

const LEGAL_PATTERN = `url("data:image/svg+xml,${encodeURIComponent(`
  <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#F2EDED" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity="0.92">
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

const ArrowLeftIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 7L9 12L14 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16L20 20" strokeLinecap="round" />
  </svg>
);

const SpeakerIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 10H8L12 7V17L8 14H5V10Z" strokeLinejoin="round" />
    <path d="M15 9C15.9 9.75 16.4 10.8 16.4 12C16.4 13.2 15.9 14.25 15 15" strokeLinecap="round" />
    <path d="M17.6 7C19.05 8.3 19.9 10.08 19.9 12C19.9 13.92 19.05 15.7 17.6 17" strokeLinecap="round" />
  </svg>
);

const WatermarkScalesIcon = () => (
  <svg className="h-32 w-32" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="48" cy="14" r="4.5" fill="currentColor" />
    <path d="M48 20V72" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M31 73H65" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M40 20H56" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M48 24L17 39" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M48 24L79 39" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M17 39L8.5 57.5H25.5L17 39Z" fill="currentColor" />
    <path d="M79 39L70.5 57.5H87.5L79 39Z" fill="currentColor" />
    <path d="M32 74.5C32 68.7 36.7 64 42.5 64H53.5C59.3 64 64 68.7 64 74.5V77H32V74.5Z" fill="currentColor" />
  </svg>
);

export const CompanionPage = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentEntry = mockDictionaryEntries[currentIndex];

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    const matchedIndex = mockDictionaryEntries.findIndex((entry) =>
      entry.term.toLowerCase().includes(value.trim().toLowerCase()),
    );

    if (matchedIndex >= 0) {
      setCurrentIndex(matchedIndex);
    }
  };

  return (
    <section
      className="relative min-h-[calc(100vh-130px)] overflow-hidden rounded-[28px] bg-[#fcf9f9] px-5 py-6 sm:px-8 sm:py-7"
      style={{
        backgroundImage: LEGAL_PATTERN,
        backgroundSize: '220px 220px',
      }}
    >
      <div className="pointer-events-none absolute right-10 top-24 hidden text-[#efebeb] lg:block">
        <WatermarkScalesIcon />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-none">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onBack}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7d7db] bg-white text-[#111827] transition hover:bg-[#f8f4f4]"
              aria-label="Go back"
            >
              <ArrowLeftIcon />
            </button>
            <h2 className="text-[40px] font-semibold tracking-[-0.04em] text-[#111827]">
              {currentEntry.term}
            </h2>
          </div>

          <label className="relative block w-full max-w-[560px] lg:ml-auto">
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search legal terms..."
              className="h-12 w-full rounded-2xl border border-[#d7d7db] bg-white pl-4 pr-11 text-[14px] text-[#111827] outline-none placeholder:text-[#7f7b85] focus:border-[#061526]/25 focus:ring-2 focus:ring-[#061526]/10"
            />
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#111827]">
              <SearchIcon />
            </span>
          </label>
        </div>

        <div className="mt-10 w-full max-w-[1180px]">
          <div className="flex items-center gap-3">
            <h3 className="text-[34px] font-semibold tracking-[-0.03em] text-[#111827]">
              {currentEntry.term}
            </h3>
            <button
              type="button"
              className="text-[#061526] transition hover:text-[#0b1c32]"
              aria-label={`Listen to ${currentEntry.term}`}
            >
              <SpeakerIcon />
            </button>
          </div>

          <div className="mt-3">
            <p className="text-[12px] text-[#6b7280]">Definition</p>
            <p className="mt-1 max-w-[980px] text-[16px] leading-[1.45] text-[#111827]">
              {currentEntry.definition}
            </p>
          </div>

          <div className="mt-6 w-full max-w-[1120px] rounded-[26px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)] sm:px-7 sm:py-7 lg:px-8 lg:py-8">
            <div className="space-y-7 text-[#111827]">
              {currentEntry.examples.map((example, index) => (
                <div key={`${currentEntry.term}-example-${index + 1}`}>
                  <h4 className="text-[18px] font-semibold tracking-[-0.02em]">
                    Example {index + 1}
                  </h4>
                  <p className="mt-2 text-[16px] leading-[1.45] text-[#111827]">{example}</p>
                </div>
              ))}

              <div>
                <h4 className="text-[18px] font-semibold tracking-[-0.02em]">Related Terms:</h4>
                <div className="mt-2 space-y-1 text-[16px] leading-[1.4] text-[#111827]">
                  {currentEntry.relatedTerms.map((term) => (
                    <p key={term}>-{term}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setCurrentIndex((index) => Math.max(index - 1, 0))}
                disabled={currentIndex === 0}
                className="flex h-12 flex-1 items-center justify-center rounded-xl border border-[#bfc4ce] bg-white text-[16px] font-semibold text-[#9aa1ab] transition enabled:text-[#111827] enabled:hover:bg-[#faf7f7] disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => setCurrentIndex((index) => Math.min(index + 1, mockDictionaryEntries.length - 1))}
                disabled={currentIndex === mockDictionaryEntries.length - 1}
                className="flex h-12 flex-1 items-center justify-center rounded-xl bg-[#061526] text-[16px] font-semibold text-white transition hover:bg-[#0b1c32] disabled:cursor-not-allowed disabled:opacity-70"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
