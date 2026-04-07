import React, { useRef, useState } from 'react';
import {
  courseCatalogEntries,
  courseFilterOptions,
  initialCoursesState,
} from '../../mockData/index';

const courseTabs = [
  { id: 'topics', label: 'Topics' },
  { id: 'assignments', label: 'Assignments' },
  { id: 'tests', label: 'Test&Quizzes' },
  { id: 'gradebook', label: 'GradeBook' },
  { id: 'resources', label: 'Resources' },
  { id: 'qa', label: 'Q&A' },
];

const SearchIcon = () => (
  <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16L20 20" strokeLinecap="round" />
  </svg>
);

const FilterIcon = () => (
  <svg className="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
    <path d="M5 7H19" strokeLinecap="round" />
    <path d="M8 12H16" strokeLinecap="round" />
    <path d="M10 17H14" strokeLinecap="round" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 7L9 12L14 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 7L15 12L10 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 10L12 15L17 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="h-[13px] w-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4.5" y="6.5" width="15" height="13" rx="2" />
    <path d="M8 4.5V8" strokeLinecap="round" />
    <path d="M16 4.5V8" strokeLinecap="round" />
    <path d="M4.5 10H19.5" strokeLinecap="round" />
  </svg>
);

const QuestionCountIcon = () => (
  <svg className="h-[13px] w-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8V12L14.75 13.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-[13px] w-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8V12L14.25 13.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8" />
    <path d="M8.4 12.4L10.7 14.7L15.8 9.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 4.5H13L17 8.5V19C17 19.83 16.33 20.5 15.5 20.5H8.5C7.67 20.5 7 19.83 7 19V4.5Z" strokeLinejoin="round" />
    <path d="M13 4.5V8.5H17" strokeLinejoin="round" />
    <path d="M9.5 12H14.5" strokeLinecap="round" />
    <path d="M9.5 15H13" strokeLinecap="round" />
  </svg>
);

const BarChartIcon = () => (
  <svg className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 18V12" strokeLinecap="round" />
    <path d="M10 18V8" strokeLinecap="round" />
    <path d="M15 18V10" strokeLinecap="round" />
    <path d="M20 18V6" strokeLinecap="round" />
  </svg>
);

const UploadIcon = () => (
  <svg className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 15V6" strokeLinecap="round" />
    <path d="M8.5 9.5L12 6L15.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 18.5H18" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 7L17 17" strokeLinecap="round" />
    <path d="M17 7L7 17" strokeLinecap="round" />
  </svg>
);

const GavelArtwork = ({ className = 'h-28 w-28', color = '#2b190f' }) => (
  <svg className={className} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="20" width="44" height="20" rx="6" transform="rotate(30 70 20)" fill={color} opacity="0.9" />
    <rect x="84" y="44" width="28" height="10" rx="5" transform="rotate(30 84 44)" fill={color} opacity="0.85" />
    <rect x="46" y="54" width="12" height="54" rx="6" transform="rotate(30 46 54)" fill={color} opacity="0.9" />
    <rect x="22" y="100" width="64" height="10" rx="5" fill={color} opacity="0.8" />
    <rect x="42" y="88" width="24" height="10" rx="5" fill={color} opacity="0.9" />
  </svg>
);

const ScalesArtwork = ({ className = 'h-28 w-28', color = '#8d6b2f' }) => (
  <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const CourseArtwork = ({ theme, large = false }) => {
  const heightClassName = large ? 'h-[170px]' : 'h-[136px]';

  if (theme === 'constitutional') {
    return (
      <div className={`relative overflow-hidden rounded-[20px] ${heightClassName} bg-gradient-to-br from-[#1b2410] via-[#3e4418] to-[#1a0f0c]`}>
        <div className="absolute inset-y-0 left-0 flex gap-2 px-4 py-4">
          {['LAW', 'LAW', 'LAW', 'LAW'].map((label, index) => (
            <div
              key={`${label}-${index}`}
              className="flex w-11 items-center justify-center rounded-md bg-[#4d5420]/85 text-[18px] font-semibold text-[#c7c58c]"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)' }}
            >
              <span className="-rotate-90 tracking-[0.35em]">{label}</span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 right-0 translate-x-3 translate-y-2">
          <GavelArtwork className={large ? 'h-40 w-40' : 'h-32 w-32'} color="#5e3418" />
        </div>
      </div>
    );
  }

  if (theme === 'contract') {
    return (
      <div className={`relative overflow-hidden rounded-[20px] ${heightClassName} bg-gradient-to-br from-[#7a4d22] via-[#e8d0a6] to-[#f3e6cd]`}>
        <div className="absolute inset-4 rounded-[16px] border border-[#ead8b7] bg-[#f3e6cd]/85 px-5 py-4">
          <p className="text-[26px] font-semibold italic tracking-[-0.03em] text-[#77552a]">Contract</p>
          <div className="mt-3 h-[1px] bg-[#a07a48]" />
          <div className="mt-3 h-[1px] bg-[#a07a48]/80" />
          <div className="mt-3 h-[1px] bg-[#a07a48]/60" />
          <div className="absolute bottom-3 right-4 h-8 w-[2px] rotate-[35deg] rounded-full bg-[#1f2937]" />
        </div>
        <div className="absolute -left-2 bottom-1">
          <GavelArtwork className={large ? 'h-32 w-32' : 'h-24 w-24'} color="#5e3418" />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-[20px] ${heightClassName} bg-gradient-to-br from-[#fff8eb] via-[#ffffff] to-[#d9c8a2]`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_55%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <ScalesArtwork className={large ? 'h-40 w-40' : 'h-32 w-32'} color="#9a7137" />
      </div>
    </div>
  );
};

const FilterMenu = ({ currentFilter, onSelect }) => (
  <div className="absolute right-0 top-[calc(100%+8px)] z-40 w-52 rounded-2xl bg-white py-2 shadow-[0_20px_40px_rgba(17,24,39,0.12)]">
    {courseFilterOptions.map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => onSelect(option)}
        className={`flex w-full items-center px-4 py-2 text-left text-[13px] transition ${
          currentFilter === option ? 'bg-[#f8f4f4] text-[#061526]' : 'text-[#111827] hover:bg-[#f8f4f4]'
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);

const CatalogCard = ({ course, onOpen }) => (
  <button
    type="button"
    onClick={onOpen}
    className="overflow-hidden rounded-[22px] bg-white text-left shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(17,24,39,0.08)]"
  >
    <CourseArtwork theme={course.theme} />
    <div className="px-4 py-3">
      <h2 className="text-[21px] font-semibold tracking-[-0.03em] text-[#111827]">{course.title}</h2>
      <p className="mt-1 text-[12px] text-[#8b8a90]">{course.lessons} Lessons</p>
      <p className="mt-1 text-[12px] text-[#8b8a90]">{course.institution}</p>
    </div>
  </button>
);

const TabButton = ({ active, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`border-b-2 pb-2 text-[15px] font-semibold transition ${
      active ? 'border-[#111827] text-[#111827]' : 'border-transparent text-[#111827] hover:border-[#d1d5db]'
    }`}
  >
    {children}
  </button>
);

const TopicRow = ({ topic, index, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full rounded-[20px] bg-white px-5 py-4 text-left shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition hover:bg-[#fdfafa]"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex min-w-0 gap-4">
        <span className="mt-1 text-[15px] font-semibold text-[#111827]">{index}</span>
        <div className="min-w-0">
          <p className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827]">{topic.title}</p>
          <p className="mt-1 text-[12px] text-[#8b8a90]">{topic.pages} pages</p>
          {active ? (
            <p className="mt-3 max-w-[560px] text-[14px] leading-[1.45] text-[#5f6572]">{topic.summary}</p>
          ) : null}
        </div>
      </div>
      <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#061526] text-white">
        <ChevronRightIcon />
      </span>
    </div>
  </button>
);

const AssignmentCard = ({ assignment, onOpenDetails }) => (
  <article className="rounded-[22px] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#111827]">{assignment.title}</h3>
        <p className="mt-2 text-[13px] text-[#5f6572]">{assignment.instructions}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#f8f4f4] px-3 py-1 text-[11px] font-medium text-[#525866]">
            {assignment.dueMeta}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
              assignment.status === 'Submitted'
                ? 'bg-[#e9f8ee] text-[#0f8b0f]'
                : 'bg-[#fff4d6] text-[#9a6700]'
            }`}
          >
            {assignment.status}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenDetails}
        className="inline-flex h-11 items-center justify-center rounded-xl bg-[#061526] px-5 text-[14px] font-semibold text-white transition hover:bg-[#0b1c32]"
      >
        View Details
      </button>
    </div>
  </article>
);

const QuizItem = ({ quiz }) => (
  <article className="rounded-[22px] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
    <div className="flex items-start gap-3">
      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#9fe3b0] text-[#0f8b0f]">
        <CheckCircleIcon />
      </span>
      <div className="min-w-0">
        <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#111827]">{quiz.title}</h3>
        <p className="mt-1 text-[12px] text-[#8b8a90]">{quiz.subtitle}</p>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-[12px] text-[#8b8a90]">
          <span className="flex items-center gap-1.5">
            <CalendarIcon />
            {quiz.dueMeta}
          </span>
          <span className="flex items-center gap-1.5">
            <QuestionCountIcon />
            {quiz.questions} Questions
          </span>
          <span className="flex items-center gap-1.5">
            <ClockIcon />
            {quiz.duration}
          </span>
        </div>
      </div>
    </div>
  </article>
);

const GradeRow = ({ item, onOpenAnalysis }) => (
  <article className="rounded-[22px] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827]">{item.title}</h3>
        <div className="mt-2 flex items-center gap-1.5 text-[12px] text-[#8b8a90]">
          <CalendarIcon />
          <span>{item.dueMeta}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 self-start sm:self-auto">
        <div className="text-right">
          <p className="text-[20px] font-semibold tracking-[-0.03em] text-[#111827]">
            {item.score === null ? '-' : item.score}/{item.outOf}
          </p>
          <p className={`mt-1 text-[12px] font-semibold ${item.score === null ? 'text-[#8b8a90]' : 'text-[#0f8b0f]'}`}>
            {item.percentage}
          </p>
        </div>
        <button
          type="button"
          disabled={!item.analysis}
          onClick={() => onOpenAnalysis(item.id)}
          className="text-[#111827] transition hover:text-[#061526] disabled:cursor-not-allowed disabled:opacity-40"
          aria-label={`Open analysis for ${item.title}`}
        >
          <BarChartIcon />
        </button>
      </div>
    </div>
  </article>
);

const ResourceCard = ({ resource, expanded, onToggle }) => (
  <article className="rounded-[22px] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex min-w-0 gap-3">
        <span className="mt-1 text-[#061526]">
          <DocumentIcon />
        </span>
        <div className="min-w-0">
          <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827]">{resource.title}</h3>
          <p className="mt-1 text-[12px] text-[#8b8a90]">{resource.meta}</p>
          {expanded ? (
            <p className="mt-3 max-w-[620px] text-[14px] leading-[1.45] text-[#5f6572]">{resource.summary}</p>
          ) : null}
        </div>
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="inline-flex h-10 items-center justify-center rounded-xl border border-[#d4d6da] bg-white px-4 text-[13px] font-semibold text-[#111827] transition hover:bg-[#faf7f7]"
      >
        {expanded ? 'Hide' : 'Open'}
      </button>
    </div>
  </article>
);

const QaCard = ({ item, expanded, onToggle }) => (
  <article className="rounded-[22px] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
    <button type="button" onClick={onToggle} className="flex w-full items-start justify-between gap-4 text-left">
      <div>
        <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#111827]">{item.question}</h3>
        {expanded ? (
          <p className="mt-3 text-[14px] leading-[1.45] text-[#5f6572]">{item.answer}</p>
        ) : null}
      </div>
      <span className={`mt-1 text-[#111827] transition ${expanded ? 'rotate-90' : ''}`}>
        <ChevronRightIcon />
      </span>
    </button>
  </article>
);

const ModalShell = ({ children, widthClassName = 'max-w-[980px]', onClose }) => (
  <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#111827]/25 px-4 py-6" onClick={onClose}>
    <div
      className={`w-full rounded-[22px] bg-white shadow-[0_24px_60px_rgba(17,24,39,0.2)] ${widthClassName}`}
      onClick={(event) => event.stopPropagation()}
    >
      {children}
    </div>
  </div>
);

const AssignmentMeta = ({ label, value, accentClassName = '' }) => (
  <div className="grid gap-2 py-1 sm:grid-cols-[200px_minmax(0,1fr)]">
    <p className="text-[14px] font-semibold text-[#111827]">{label} :</p>
    <div className={`text-[14px] text-[#111827] sm:text-right ${accentClassName}`}>{value}</div>
  </div>
);

const ResourceListBlock = ({ title, items, removable = false, onRemove }) => (
  <div className={title ? 'mt-8' : 'mt-3'}>
    {title ? <h4 className="text-[16px] font-semibold text-[#111827]">{title}</h4> : null}
    <div className="mt-3 space-y-3">
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 rounded-xl bg-[#f1f1f1] px-4 py-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="text-[#22c55e]">
                <DocumentIcon />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[14px] font-medium text-[#111827]">{item.name ?? item.title}</p>
                <p className="mt-1 text-[10px] text-[#8b8a90]">{item.meta}</p>
              </div>
            </div>

            {removable ? (
              <button
                type="button"
                onClick={() => onRemove?.(item.id)}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#ff6b6b] transition hover:bg-[#fff1f1]"
                aria-label={`Remove ${item.name ?? item.title}`}
              >
                <CloseIcon />
              </button>
            ) : null}
          </div>
        ))
      ) : (
        <div className="rounded-xl bg-[#f8f4f4] px-4 py-4 text-[13px] text-[#8b8a90]">
          No submitted attachments yet.
        </div>
      )}
    </div>
  </div>
);

const AssignmentDetailsModal = ({ assignment, onClose, onOpenSubmit }) => (
  <ModalShell widthClassName="max-w-[980px]" onClose={onClose}>
    <div className="px-5 py-5 sm:px-6 sm:py-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-[#111827]">Assignment Details</h3>
        <button
          type="button"
          onClick={onClose}
          className="text-[#111827] transition hover:text-[#061526]"
          aria-label="Close assignment details"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="mt-8 space-y-1">
        <AssignmentMeta label="Title" value={assignment.title} />
        <AssignmentMeta label="Due Date" value={assignment.dueDate} />
        <AssignmentMeta label="No. of submissions" value={assignment.submissions} />
        <AssignmentMeta label="Grade Scale" value={assignment.gradeScale} />
        <AssignmentMeta label="Submission Type" value={assignment.submissionType} />
        <AssignmentMeta
          label="Plagiarism Report"
          value={
            <span className="inline-flex items-center gap-2">
              <span className={`inline-block h-2.5 w-2.5 rounded-full ${assignment.plagiarismReport === 'Pending' ? 'bg-[#9ca3af]' : 'bg-[#22c55e]'}`} />
              {assignment.plagiarismReport}
            </span>
          }
          accentClassName={assignment.plagiarismReport === 'Pending' ? 'text-[#6b7280]' : 'text-[#0f8b0f]'}
        />
      </div>

      <div className="mt-6 rounded-xl bg-[#fcf9f9] px-4 py-4">
        <h4 className="text-[16px] font-semibold text-[#111827]">Detailed Instructions :</h4>
        <p className="mt-3 text-[14px] text-[#111827]">{assignment.instructions}</p>
      </div>

      <ResourceListBlock title="Additional resources for assignment" items={assignment.resources} />
      <ResourceListBlock title="Submitted Attachments" items={assignment.submittedAttachments} />

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onClose}
          className="flex h-12 flex-1 items-center justify-center rounded-xl border border-[#9aa1ab] bg-white text-[16px] font-semibold text-[#111827] transition hover:bg-[#faf7f7]"
        >
          Close
        </button>
        <button
          type="button"
          onClick={onOpenSubmit}
          className="flex h-12 flex-1 items-center justify-center rounded-xl bg-[#061526] text-[16px] font-semibold text-white transition hover:bg-[#0b1c32]"
        >
          Submit Assignment
        </button>
      </div>
    </div>
  </ModalShell>
);

const SubmitAssignmentModal = ({
  assignment,
  draftAttachments,
  fileInputRef,
  onClose,
  onOpenFilePicker,
  onFileChange,
  onRemoveAttachment,
  onSubmit,
}) => (
  <ModalShell widthClassName="max-w-[980px]" onClose={onClose}>
    <div className="px-5 py-5 sm:px-6 sm:py-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-[#111827]">Submit Assignment</h3>
        <button
          type="button"
          onClick={onClose}
          className="text-[#111827] transition hover:text-[#061526]"
          aria-label="Close submit assignment"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="mt-8 space-y-1">
        <AssignmentMeta label="Title" value={assignment.title} />
        <AssignmentMeta label="Due Date" value={assignment.dueDate} />
        <AssignmentMeta label="No. of submissions" value={assignment.submissions} />
        <AssignmentMeta label="Grade Scale" value={assignment.gradeScale} />
        <AssignmentMeta label="Submission Type" value={assignment.submissionType} />
        <AssignmentMeta
          label="Plagiarism Report"
          value={
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#9ca3af]" />
              Pending
            </span>
          }
          accentClassName="text-[#6b7280]"
        />
      </div>

      <div className="mt-6 rounded-xl bg-[#fcf9f9] px-4 py-4">
        <h4 className="text-[16px] font-semibold text-[#111827]">Detailed Instructions :</h4>
        <p className="mt-3 text-[14px] text-[#111827]">{assignment.instructions}</p>
      </div>

      <ResourceListBlock title="Additional resources for assignment" items={assignment.resources} />

      <div className="mt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-[16px] font-semibold text-[#111827]">Submitted Attachments</h4>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={onFileChange}
          />
          <button
            type="button"
            onClick={onOpenFilePicker}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-[#9aa1ab] bg-white px-4 text-[14px] font-semibold text-[#111827] transition hover:bg-[#faf7f7]"
          >
            <UploadIcon />
            Upload Files
          </button>
        </div>

        <ResourceListBlock
          title=""
          items={draftAttachments}
          removable
          onRemove={onRemoveAttachment}
        />
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onClose}
          className="flex h-12 flex-1 items-center justify-center rounded-xl border border-[#9aa1ab] bg-white text-[16px] font-semibold text-[#111827] transition hover:bg-[#faf7f7]"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={draftAttachments.length === 0}
          className="flex h-12 flex-1 items-center justify-center rounded-xl bg-[#061526] text-[16px] font-semibold text-white transition hover:bg-[#0b1c32] disabled:cursor-not-allowed disabled:opacity-60"
        >
          Submit Assignment
        </button>
      </div>
    </div>
  </ModalShell>
);

const AnalysisModal = ({ item, onClose }) => {
  const distribution = item.analysis.distribution;
  const totalStudents = item.analysis.totalStudents;
  let runningPercent = 0;
  const gradientStops = distribution
    .map((entry) => {
      const entryPercent = (entry.students / totalStudents) * 100;
      const stop = `${entry.color} ${runningPercent}% ${runningPercent + entryPercent}%`;
      runningPercent += entryPercent;
      return stop;
    })
    .join(', ');

  return (
    <ModalShell widthClassName="max-w-[980px]" onClose={onClose}>
      <div className="px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-[#111827]">Analysis</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-[#111827] transition hover:text-[#061526]"
            aria-label="Close analysis"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="mt-8">
          <h4 className="text-[16px] font-semibold text-[#111827]">Score Graph Distribution for Quiz 1</h4>
          <div className="mt-4 rounded-[24px] bg-white px-4 py-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)] sm:px-6">
            <div className="grid gap-2 text-[12px] text-[#4b5563] sm:grid-cols-[48px_minmax(0,1fr)]">
              <div className="hidden sm:flex sm:flex-col sm:justify-between sm:pb-10">
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>
              <div>
                <div className="relative h-[240px]">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2, 3].map((line) => (
                      <div key={line} className="border-t border-dashed border-[#e5e7eb]" />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-end justify-between gap-4 px-2 pb-10 sm:px-6">
                    {distribution.map((entry) => (
                      <div key={entry.label} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                        <div
                          className="w-5 rounded-t-[6px] sm:w-7"
                          style={{ height: `${(entry.students / 400) * 100}%`, backgroundColor: entry.color }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between gap-4 px-2 text-[12px] text-[#4b5563] sm:px-6">
                    {distribution.map((entry) => (
                      <span key={`${entry.label}-label`} className="flex-1 text-center">
                        {entry.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center text-[13px] text-[#4b5563]">
                  Percentage Score
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-[16px] font-semibold text-[#111827]">Pie Chart Distribution for Quiz 1</h4>
          <div className="mt-4 rounded-[24px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
            <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-center">
              <div>
                <p className="text-[14px] text-[#111827]">Total Students</p>
                <p className="mt-1 text-[36px] font-semibold tracking-[-0.03em] text-[#111827]">{totalStudents}</p>
              </div>
              <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-center">
                <div
                  className="mx-auto h-[240px] w-[240px] rounded-full"
                  style={{ background: `conic-gradient(${gradientStops})` }}
                />
                <div className="space-y-3">
                  {distribution.map((entry) => (
                    <div key={`${entry.label}-legend`} className="flex items-center justify-between gap-4 text-[14px] text-[#111827]">
                      <div className="flex items-center gap-2">
                        <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span>{entry.label}</span>
                      </div>
                      <span>{((entry.students / totalStudents) * 100).toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalShell>
  );
};

export const CoursesPage = () => {
  const [courses, setCourses] = useState(initialCoursesState);
  const [searchQuery, setSearchQuery] = useState('');
  const [catalogFilter, setCatalogFilter] = useState('All Courses');
  const [isCatalogFilterOpen, setIsCatalogFilterOpen] = useState(false);
  const [selectedCourseKey, setSelectedCourseKey] = useState(null);
  const [activeTab, setActiveTab] = useState('topics');
  const [expandedTopicId, setExpandedTopicId] = useState(null);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState(null);
  const [assignmentModalMode, setAssignmentModalMode] = useState(null);
  const [draftAttachments, setDraftAttachments] = useState([]);
  const [analysisGradeId, setAnalysisGradeId] = useState(null);
  const [expandedResourceId, setExpandedResourceId] = useState(null);
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);
  const [newQuestion, setNewQuestion] = useState('');
  const fileInputRef = useRef(null);

  const selectedCourse = selectedCourseKey ? courses[selectedCourseKey] : null;
  const selectedAssignment = selectedCourse?.assignments.find((item) => item.id === selectedAssignmentId) ?? null;
  const selectedGrade = selectedCourse?.gradeBook.find((item) => item.id === analysisGradeId) ?? null;

  const filteredCourses = courseCatalogEntries.filter((entry) => {
    const course = courses[entry.courseKey];
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.trim().toLowerCase());
    const matchesFilter = catalogFilter === 'All Courses' || course.title === catalogFilter;

    return matchesSearch && matchesFilter;
  });

  const handleOpenCourse = (courseKey) => {
    setSelectedCourseKey(courseKey);
    setActiveTab('topics');
    setExpandedTopicId(courses[courseKey].topics[0]?.id ?? null);
    setSelectedAssignmentId(null);
    setAssignmentModalMode(null);
    setAnalysisGradeId(null);
    setExpandedResourceId(null);
    setExpandedQuestionId(null);
    setIsCatalogFilterOpen(false);
  };

  const handleBackToCatalog = () => {
    setSelectedCourseKey(null);
    setActiveTab('topics');
    setExpandedTopicId(null);
    setSelectedAssignmentId(null);
    setAssignmentModalMode(null);
    setAnalysisGradeId(null);
    setExpandedResourceId(null);
    setExpandedQuestionId(null);
  };

  const handleOpenAssignmentDetails = (assignmentId) => {
    setSelectedAssignmentId(assignmentId);
    setAssignmentModalMode('details');
  };

  const handleOpenSubmitModal = () => {
    if (!selectedAssignment) {
      return;
    }

    setDraftAttachments(selectedAssignment.submittedAttachments);
    setAssignmentModalMode('submit');
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files ?? []);

    if (files.length === 0) {
      return;
    }

    const uploadedAttachments = files.map((file, index) => ({
      id: `upload-${Date.now()}-${index}`,
      name: file.name,
      meta: `${Math.max(1, Math.round(file.size / 1024 / 1024))}MB - Uploaded just now`,
    }));

    setDraftAttachments((current) => [...current, ...uploadedAttachments]);
    event.target.value = '';
  };

  const handleRemoveDraftAttachment = (attachmentId) => {
    setDraftAttachments((current) => current.filter((attachment) => attachment.id !== attachmentId));
  };

  const handleSubmitAssignment = () => {
    if (!selectedAssignment || draftAttachments.length === 0 || !selectedCourseKey) {
      return;
    }

    setCourses((current) => ({
      ...current,
      [selectedCourseKey]: {
        ...current[selectedCourseKey],
        assignments: current[selectedCourseKey].assignments.map((assignment) =>
          assignment.id === selectedAssignment.id
            ? {
                ...assignment,
                status: 'Submitted',
                plagiarismReport: '10%',
                submittedAttachments: draftAttachments,
              }
            : assignment,
        ),
      },
    }));

    setAssignmentModalMode('details');
  };

  const handleAddQuestion = () => {
    const trimmedQuestion = newQuestion.trim();

    if (!trimmedQuestion || !selectedCourseKey) {
      return;
    }

    const newQaItem = {
      id: `qa-${Date.now()}`,
      question: trimmedQuestion,
      answer: 'Pending response from the course team. Your question has been saved.',
    };

    setCourses((current) => ({
      ...current,
      [selectedCourseKey]: {
        ...current[selectedCourseKey],
        qa: [newQaItem, ...current[selectedCourseKey].qa],
      },
    }));
    setExpandedQuestionId(newQaItem.id);
    setNewQuestion('');
  };

  return (
    <section className="space-y-6">
      {!selectedCourse ? (
        <>
          <div className="relative flex items-center gap-3">
            <label className="relative block flex-1">
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search Courses..."
                className="h-11 w-full rounded-lg bg-[#efefef] pl-4 pr-10 text-[13px] text-[#111827] outline-none placeholder:text-[#7f7b85] focus:ring-2 focus:ring-[#061526]/20"
              />
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#111827]">
                <SearchIcon />
              </span>
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCatalogFilterOpen((current) => !current)}
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#061526] text-white transition hover:bg-[#0b1c32]"
                aria-label="Filter courses"
              >
                <FilterIcon />
              </button>

              {isCatalogFilterOpen ? (
                <FilterMenu
                  currentFilter={catalogFilter}
                  onSelect={(option) => {
                    setCatalogFilter(option);
                    setIsCatalogFilterOpen(false);
                  }}
                />
              ) : null}
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredCourses.map((entry) => (
                <CatalogCard
                  key={entry.id}
                  course={courses[entry.courseKey]}
                  onOpen={() => handleOpenCourse(entry.courseKey)}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[360px] items-center justify-center rounded-[28px] bg-white text-center shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
              <div>
                <p className="text-[28px] font-semibold tracking-[-0.03em] text-[#111827]">No courses found</p>
                <p className="mt-2 text-[14px] text-[#6b7280]">Try a different search term or clear your filter.</p>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleBackToCatalog}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7d7db] bg-white text-[#111827] transition hover:bg-[#f8f4f4]"
              aria-label="Back to courses"
            >
              <ArrowLeftIcon />
            </button>
            <h2 className="text-[42px] font-semibold tracking-[-0.04em] text-[#111827]">{selectedCourse.title}</h2>
          </div>

          <div className="flex flex-wrap items-center gap-6 border-b border-[#eee5e5]">
            {courseTabs.map((tab) => (
              <TabButton
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </TabButton>
            ))}
          </div>

          {activeTab === 'topics' ? (
            <div className="space-y-6">
              <div className="max-w-[420px]">
                <div className="relative overflow-hidden rounded-[22px]">
                  <CourseArtwork theme={selectedCourse.theme} large />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111827]/85 to-transparent px-4 py-4 text-white">
                    <p className="text-[22px] font-semibold tracking-[-0.03em]">{selectedCourse.title}</p>
                    <p className="mt-1 text-[12px] text-white/80">{selectedCourse.lessons} Lessons</p>
                    <p className="mt-1 text-[12px] text-white/80">{selectedCourse.institution}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {selectedCourse.topics.map((topic, index) => (
                  <TopicRow
                    key={topic.id}
                    topic={topic}
                    index={index + 1}
                    active={expandedTopicId === topic.id}
                    onClick={() => setExpandedTopicId(expandedTopicId === topic.id ? null : topic.id)}
                  />
                ))}
              </div>
            </div>
          ) : null}

          {activeTab === 'assignments' ? (
            <div className="space-y-4">
              {selectedCourse.assignments.map((assignment) => (
                <AssignmentCard
                  key={assignment.id}
                  assignment={assignment}
                  onOpenDetails={() => handleOpenAssignmentDetails(assignment.id)}
                />
              ))}
            </div>
          ) : null}

          {activeTab === 'tests' ? (
            <div className="space-y-6">
              <section className="rounded-[24px] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827]">Current Assessment</h3>
                {selectedCourse.quizzes.currentAssessment ? (
                  <div className="mt-3">
                    <p className="text-[16px] font-semibold text-[#111827]">{selectedCourse.quizzes.currentAssessment.title}</p>
                    <p className="mt-2 text-[14px] text-[#5f6572]">{selectedCourse.quizzes.currentAssessment.description}</p>
                  </div>
                ) : (
                  <div className="mt-3 space-y-1">
                    <p className="text-[15px] font-medium text-[#111827]">You have no Quiz to take</p>
                  </div>
                )}
              </section>

              <section className="space-y-4">
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827]">Submitted Assessments</h3>
                {selectedCourse.quizzes.submitted.map((quiz) => (
                  <QuizItem key={quiz.id} quiz={quiz} />
                ))}
              </section>
            </div>
          ) : null}

          {activeTab === 'gradebook' ? (
            <div className="space-y-4">
              {selectedCourse.gradeBook.map((item) => (
                <GradeRow
                  key={item.id}
                  item={item}
                  onOpenAnalysis={(gradeId) => setAnalysisGradeId(gradeId)}
                />
              ))}
            </div>
          ) : null}

          {activeTab === 'resources' ? (
            <div className="space-y-4">
              {selectedCourse.resources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  expanded={expandedResourceId === resource.id}
                  onToggle={() => setExpandedResourceId(expandedResourceId === resource.id ? null : resource.id)}
                />
              ))}
            </div>
          ) : null}

          {activeTab === 'qa' ? (
            <div className="space-y-6">
              <div className="rounded-[24px] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827]">Ask a question</h3>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    value={newQuestion}
                    onChange={(event) => setNewQuestion(event.target.value)}
                    placeholder="Type your question about this course..."
                    className="h-12 flex-1 rounded-xl border border-[#ece7e7] bg-[#fcf9f9] px-4 text-[14px] text-[#111827] outline-none placeholder:text-[#7f7b85] focus:border-[#061526]/20 focus:ring-2 focus:ring-[#061526]/10"
                  />
                  <button
                    type="button"
                    onClick={handleAddQuestion}
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-[#061526] px-5 text-[14px] font-semibold text-white transition hover:bg-[#0b1c32]"
                  >
                    Post Question
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {selectedCourse.qa.map((item) => (
                  <QaCard
                    key={item.id}
                    item={item}
                    expanded={expandedQuestionId === item.id}
                    onToggle={() => setExpandedQuestionId(expandedQuestionId === item.id ? null : item.id)}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}

      {assignmentModalMode === 'details' && selectedAssignment ? (
        <AssignmentDetailsModal
          assignment={selectedAssignment}
          onClose={() => setAssignmentModalMode(null)}
          onOpenSubmit={handleOpenSubmitModal}
        />
      ) : null}

      {assignmentModalMode === 'submit' && selectedAssignment ? (
        <SubmitAssignmentModal
          assignment={selectedAssignment}
          draftAttachments={draftAttachments}
          fileInputRef={fileInputRef}
          onClose={() => setAssignmentModalMode('details')}
          onOpenFilePicker={() => fileInputRef.current?.click()}
          onFileChange={handleFileChange}
          onRemoveAttachment={handleRemoveDraftAttachment}
          onSubmit={handleSubmitAssignment}
        />
      ) : null}

      {selectedGrade ? (
        <AnalysisModal
          item={selectedGrade}
          onClose={() => setAnalysisGradeId(null)}
        />
      ) : null}
    </section>
  );
};
