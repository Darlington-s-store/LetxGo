import React from 'react';
import { quizAreas } from '../../mockData/index';

const ChevronIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 10L12 15L17 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlayIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.75L15 12L10 15.25V8.75Z" fill="currentColor" stroke="none" />
  </svg>
);

const difficultyOptions = [
  {
    id: 'easy',
    title: 'Easy',
    description: 'Basic concepts and definitions',
  },
  {
    id: 'medium',
    title: 'Medium',
    description: 'Application and analysis',
  },
  {
    id: 'hard',
    title: 'Hard',
    description: 'Complex scenarios and synthesis',
  },
];

const questionCounts = [5, 10, 15, 20];

const DifficultyCard = ({ option, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full rounded-2xl px-4 py-5 text-center transition ${
      active
        ? 'bg-[#061526] text-white shadow-[0_16px_32px_rgba(6,21,38,0.12)]'
        : 'bg-transparent text-[#111827] hover:bg-[#f8f4f4]'
    }`}
  >
    <p className="text-[28px] font-semibold tracking-[-0.03em]">{option.title}</p>
    <p className={`mt-1 text-[14px] ${active ? 'text-[#d7dce5]' : 'text-[#5f6572]'}`}>
      {option.description}
    </p>
    {active ? (
      <span className="mt-3 inline-flex rounded-full bg-[#ffe27a] px-3 py-1 text-[11px] font-semibold text-[#111827]">
        Selected
      </span>
    ) : null}
  </button>
);

const CountButton = ({ count, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex h-12 w-14 items-center justify-center rounded-xl border text-[16px] font-semibold transition ${
      active
        ? 'border-[#061526] bg-[#061526] text-white'
        : 'border-[#a8adb7] bg-white text-[#111827] hover:bg-[#faf7f7]'
    }`}
  >
    {count}
  </button>
);

export const QuizSetupPage = ({ settings, onChange, onStartQuiz }) => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[820px] rounded-[30px] bg-white px-6 py-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)] sm:px-8 sm:py-8 lg:px-10">
        <label className="relative block">
          <select
            value={settings.area}
            onChange={(event) => onChange({ area: event.target.value })}
            className="h-12 w-full appearance-none rounded-xl bg-[#fbf7f7] px-4 pr-10 text-[15px] text-[#7f7b85] outline-none focus:ring-2 focus:ring-[#061526]/20"
          >
            {quizAreas.map((area) => (
              <option key={area} value={area}>
                {area === settings.area ? area : area}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#111827]">
            <ChevronIcon />
          </span>
        </label>

        <div className="mt-6">
          <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827]">Difficulty Level</h2>
          <div className="mt-4 space-y-3">
            {difficultyOptions.map((option) => (
              <DifficultyCard
                key={option.id}
                option={option}
                active={settings.difficulty === option.id}
                onClick={() => onChange({ difficulty: option.id })}
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827]">Number of Questions</h2>
          <div className="mt-4 grid max-w-[520px] grid-cols-4 gap-5">
            {questionCounts.map((count) => (
              <CountButton
                key={count}
                count={count}
                active={settings.questionCount === count}
                onClick={() => onChange({ questionCount: count })}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onStartQuiz}
          className="mt-9 flex h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#061526] text-[17px] font-semibold text-white transition hover:bg-[#0b1c32]"
        >
          <PlayIcon />
          Start Quiz
        </button>
      </div>
    </section>
  );
};
