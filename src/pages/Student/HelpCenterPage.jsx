import React, { useMemo, useState } from 'react';
import { helpTopics } from '../../mockData/index';

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

const HelpIcon = () => (
  <svg className="h-[74px] w-[74px]" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M40 12C25.64 12 14 22.56 14 35.6C14 42.21 16.94 48.17 21.67 52.39L19.49 63.4L30.13 57.9C33.1 58.71 36.45 59.2 40 59.2C54.36 59.2 66 48.64 66 35.6C66 22.56 54.36 12 40 12Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="31" cy="35.5" r="3.2" fill="currentColor" />
    <circle cx="40" cy="35.5" r="3.2" fill="currentColor" />
    <circle cx="49" cy="35.5" r="3.2" fill="currentColor" />
  </svg>
);

const SearchIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16L20 20" strokeLinecap="round" />
  </svg>
);

const ContactIcon = () => (
  <svg className="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      d="M12 5.5C8.13 5.5 5 8.35 5 11.85C5 13.63 5.79 15.23 7.06 16.37L6.48 19.35L9.34 17.86C10.14 18.08 11.04 18.2 12 18.2C15.87 18.2 19 15.35 19 11.85C19 8.35 15.87 5.5 12 5.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9.7" cy="11.85" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="12" cy="11.85" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="14.3" cy="11.85" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const renderTopicIcon = (icon) => {
  const props = {
    className: 'h-[18px] w-[18px]',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.9',
  };

  switch (icon) {
    case 'flag':
      return (
        <svg {...props}>
          <path d="M7 20V5.5" strokeLinecap="round" />
          <path d="M7 6H16L14 9.5L16 13H7" strokeLinejoin="round" />
        </svg>
      );
    case 'cases':
      return (
        <svg {...props}>
          <rect x="4" y="7" width="16" height="12" rx="2" />
          <path d="M9 7V5.5C9 4.67 9.67 4 10.5 4H13.5C14.33 4 15 4.67 15 5.5V7" />
          <path d="M4 11.5H20" />
        </svg>
      );
    case 'quiz':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8V12L14.75 13.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'courses':
      return (
        <svg {...props}>
          <path d="M6 5.5H11C12.1 5.5 13 6.4 13 7.5V18.5H8C6.9 18.5 6 17.6 6 16.5V5.5Z" />
          <path d="M18 5.5H13C11.9 5.5 11 6.4 11 7.5V18.5H16C17.1 18.5 18 17.6 18 16.5V5.5Z" />
        </svg>
      );
    case 'ai':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="7.5" />
          <path d="M4.8 12H19.2" strokeLinecap="round" />
          <path d="M12 4.5C14.2 6.45 15.45 9.1 15.45 12C15.45 14.9 14.2 17.55 12 19.5C9.8 17.55 8.55 14.9 8.55 12C8.55 9.1 9.8 6.45 12 4.5Z" />
        </svg>
      );
    case 'notes':
      return (
        <svg {...props}>
          <rect x="7" y="5.5" width="10" height="13" rx="1.8" />
          <path d="M10 9.25H14" strokeLinecap="round" />
          <path d="M10 12.25H14" strokeLinecap="round" />
          <path d="M10 15.25H13" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

export const HelpCenterPage = ({ onOpenTopic, onContactUs }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = useMemo(() => {
    const value = searchQuery.trim().toLowerCase();

    if (!value) {
      return helpTopics;
    }

    return helpTopics.filter((topic) => topic.label.toLowerCase().includes(value));
  }, [searchQuery]);

  return (
    <section
      className="relative min-h-[calc(100vh-130px)] overflow-hidden rounded-[28px] bg-[#fcf9f9] px-5 py-6 sm:px-8 sm:py-7"
      style={{
        backgroundImage: LEGAL_PATTERN,
        backgroundSize: '220px 220px',
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        <div className="text-center text-[#111827]">
          <div className="flex justify-center text-[#061526]">
            <HelpIcon />
          </div>
          <h2 className="mt-4 text-[38px] font-semibold tracking-[-0.03em] text-[#111827]">How can we Help?</h2>
        </div>

        <label className="relative mx-auto mt-6 block w-full max-w-[980px]">
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search Help Center"
            className="h-12 w-full rounded-xl bg-white px-4 pr-11 text-[14px] text-[#111827] outline-none placeholder:text-[#7f7b85] focus:ring-2 focus:ring-[#061526]/10"
          />
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#111827]">
            <SearchIcon />
          </span>
        </label>

        <div className="mx-auto mt-8 w-full max-w-[980px]">
          <p className="text-[12px] font-medium text-[#4b5563]">Help Topics</p>
          <div className="mt-4 space-y-2">
            {filteredTopics.length > 0 ? (
              filteredTopics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => onOpenTopic?.(topic.id)}
                  className="flex w-full items-center gap-4 rounded-xl px-5 py-3.5 text-left text-[16px] text-[#111827] transition hover:bg-white/80"
                >
                  <span className="text-[#111827]">{renderTopicIcon(topic.icon)}</span>
                  <span>{topic.label}</span>
                </button>
              ))
            ) : (
              <div className="rounded-xl bg-white/70 px-4 py-4 text-[14px] text-[#6b7280] shadow-[0_10px_30px_rgba(17,24,39,0.03)]">
                No help topics matched your search.
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10">
        <button
          type="button"
          onClick={onContactUs}
          className="inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-[#061526] px-5 text-[14px] font-semibold text-white transition hover:bg-[#0b1c32]"
        >
          <ContactIcon />
          Contact Us
        </button>
      </div>
    </section>
  );
};
