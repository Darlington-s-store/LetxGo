import React, { useState } from 'react';
import { mockCaseItems } from '../../mockData/index';

export const caseItems = mockCaseItems;

const SearchIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16L20 20" strokeLinecap="round" />
  </svg>
);

const FilterIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
    <path d="M5 7H19" strokeLinecap="round" />
    <path d="M8 12H16" strokeLinecap="round" />
    <path d="M10 17H14" strokeLinecap="round" />
  </svg>
);

const CategoryIcon = () => (
  <svg className="h-[13px] w-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 4V20" strokeLinecap="round" />
    <path d="M12 7L7 9.5M12 7L17 9.5" strokeLinecap="round" />
    <path d="M7 9.5L5.5 13H8.5L7 9.5Z" />
    <path d="M17 9.5L15.5 13H18.5L17 9.5Z" />
    <path d="M9.5 20H14.5" strokeLinecap="round" />
  </svg>
);

const WatermarkIcon = () => (
  <svg className="h-28 w-28" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

export const CasesPage = ({ onReadCase }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCases = caseItems.filter((caseItem) => {
    const searchValue = searchQuery.toLowerCase();

    return (
      caseItem.title.toLowerCase().includes(searchValue) ||
      caseItem.court.toLowerCase().includes(searchValue) ||
      caseItem.area.toLowerCase().includes(searchValue)
    );
  });

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <label className="relative block flex-1">
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search Cases.."
            className="h-11 w-full rounded-lg bg-[#efefef] pl-4 pr-10 text-[13px] text-[#111827] outline-none placeholder:text-[#7f7b85] focus:ring-2 focus:ring-[#061526]/20"
          />
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#111827]">
            <SearchIcon />
          </span>
        </label>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#061526] text-white transition hover:bg-[#0b1c32]"
          aria-label="Filter cases"
        >
          <FilterIcon />
        </button>
      </div>

      <div className="space-y-5">
        {filteredCases.map((caseItem) => (
          <article
            key={caseItem.id}
            className="relative overflow-hidden rounded-[26px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)] sm:px-6"
          >
            <div className="relative z-10 max-w-[420px]">
              <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-[#111827]">
                {caseItem.title}
              </h2>
              <p className="mt-1 text-[12px] font-medium text-[#22262f]">{caseItem.court}</p>
              <p className="mt-1 text-[12px] text-[#5c6370]">{caseItem.citation}</p>

              <div className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-[#ef4444]">
                <CategoryIcon />
                <span>{caseItem.area}</span>
              </div>

              <button
                type="button"
                onClick={() => onReadCase?.(caseItem)}
                className="mt-5 inline-flex h-10 items-center justify-center rounded-lg border border-[#d4d6da] bg-white px-6 text-[13px] font-semibold text-[#111827] transition hover:bg-[#faf7f7]"
              >
                Read
              </button>
            </div>

            <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 text-[#f0eded] sm:block">
              <WatermarkIcon />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
