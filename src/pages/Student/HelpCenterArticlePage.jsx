import React from 'react';
import { helpArticles } from '../../mockData/index';

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

const InfoIcon = () => (
  <svg className="mt-0.5 h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 10.5V15.5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const ArticleParagraphs = ({ paragraphs = [], className = '' }) => (
  <div className={`space-y-1.5 text-[14px] leading-[1.25] text-[#111827] sm:text-[15px] ${className}`}>
    {paragraphs.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
  </div>
);

const ArticleSection = ({ section }) => (
  <section>
    <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827] sm:text-[20px]">
      {section.title}
    </h3>

    {section.paragraphs?.length ? (
      <ArticleParagraphs paragraphs={section.paragraphs} className="mt-3" />
    ) : null}

    {section.items?.length ? (
      <div className="mt-5 space-y-6">
        {section.items.map((item) => (
          <div key={item.title}>
            <h4 className="text-[16px] font-semibold tracking-[-0.02em] text-[#111827] sm:text-[17px]">
              {item.title}
            </h4>
            <ArticleParagraphs paragraphs={item.paragraphs} className="mt-2" />
          </div>
        ))}
      </div>
    ) : null}
  </section>
);

export const HelpCenterArticlePage = ({ articleId, onBack }) => {
  const article = helpArticles[articleId];

  if (!article) {
    return null;
  }

  const hasTopContent = article.topTitle || article.introParagraphs?.length;

  return (
    <section
      className="relative min-h-[calc(100vh-130px)] overflow-hidden rounded-[28px] bg-[#fcf9f9] px-5 py-6 sm:px-8 sm:py-7"
      style={{
        backgroundImage: LEGAL_PATTERN,
        backgroundSize: '220px 220px',
      }}
    >
      <div className="relative z-10 max-w-[1120px]">
        <button
          type="button"
          onClick={onBack}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7d7db] bg-white text-[#111827] transition hover:bg-[#f8f4f4]"
          aria-label="Go back"
        >
          <ArrowLeftIcon />
        </button>

        <div className="mt-6 max-w-[1060px]">
          {article.topTitle ? (
            <h2 className="text-[34px] font-semibold tracking-[-0.03em] text-[#111827] sm:text-[40px]">
              {article.topTitle}
            </h2>
          ) : null}

          {article.introParagraphs?.length ? (
            <ArticleParagraphs
              paragraphs={article.introParagraphs}
              className={article.topTitle ? 'mt-4' : 'mt-1'}
            />
          ) : null}

          {article.note ? (
            <div className={`flex items-start gap-3 rounded-2xl bg-[#eef0f3] px-4 py-3 text-[#394150] ${hasTopContent ? 'mt-8' : 'mt-4'}`}>
              <InfoIcon />
              <p className="text-[13px] leading-[1.35] sm:text-[14px]">{article.note.text}</p>
            </div>
          ) : null}

          {article.sections?.length ? (
            <div className={`${hasTopContent || article.note ? 'mt-8' : 'mt-1'} space-y-8`}>
              {article.sections.map((section) => (
                <ArticleSection key={section.title} section={section} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
