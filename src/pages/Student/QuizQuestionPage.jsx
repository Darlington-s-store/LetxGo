import React from 'react';

const LockIcon = () => (
  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
    <rect x="5" y="10.5" width="14" height="10" rx="2" />
    <path d="M8 10.5V8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8V10.5" />
  </svg>
);

const QuestionIcon = () => (
  <svg className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8" />
    <path d="M9.5 9.5C9.5 8.12 10.62 7 12 7C13.38 7 14.5 8.12 14.5 9.5C14.5 11 13 11.4 12.4 12.1C12.1 12.45 12 12.72 12 13.5" strokeLinecap="round" />
    <circle cx="12" cy="16.8" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8V12L14.5 13.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const OptionCard = ({ option, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex w-full items-center gap-5 rounded-xl border px-4 py-5 text-left transition ${
      active
        ? 'border-[#061526] bg-[#f5f7fb] shadow-[0_8px_18px_rgba(6,21,38,0.06)]'
        : 'border-[#8a909b] bg-white hover:bg-[#faf7f7]'
    }`}
  >
    <span className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827]">{option.key})</span>
    <span className="text-[17px] font-semibold tracking-[-0.02em] text-[#111827]">{option.text}</span>
  </button>
);

export const QuizQuestionPage = ({
  area,
  questions,
  currentIndex,
  selectedAnswers,
  onSelectAnswer,
  onPrevious,
  onNext,
}) => {
  const totalQuestions = questions.length;
  const question = questions[currentIndex];
  const selectedAnswer = selectedAnswers[question.id];
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[640px] rounded-[30px] bg-white shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
        <div className="rounded-t-[30px] bg-[#061526] px-6 py-6 text-white sm:px-7">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#061526]">
              <LockIcon />
            </div>
            <div>
              <p className="max-w-[420px] text-[17px] font-semibold leading-[1.25] tracking-[-0.02em]">
                Answer these questions to review core concepts in {area.toLowerCase()}.
              </p>
            </div>
          </div>

          <div className="mt-6 h-2 rounded-full bg-white">
            <div
              className="h-full rounded-full bg-[#786b6b] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="px-6 py-6 sm:px-7">
          <div className="flex items-center justify-between gap-4 text-[13px] font-semibold">
            <div className="flex items-center gap-1.5 text-[#2857ff]">
              <QuestionIcon />
              <span>
                Question {currentIndex + 1} of {totalQuestions}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[#7f7b85]">
              <ClockIcon />
              <span>60S</span>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="max-w-[460px] text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#111827]">
              {question.prompt}
            </h2>
          </div>

          <div className="mt-5 space-y-4">
            {question.options.map((option) => (
              <OptionCard
                key={option.key}
                option={option}
                active={selectedAnswer === option.key}
                onClick={() => onSelectAnswer(question.id, option.key)}
              />
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onPrevious}
              disabled={currentIndex === 0}
              className="flex h-12 flex-1 items-center justify-center rounded-xl border border-[#8a909b] bg-white text-[17px] font-semibold text-[#111827] transition hover:bg-[#faf7f7] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={onNext}
              className="flex h-12 flex-1 items-center justify-center rounded-xl bg-[#061526] text-[17px] font-semibold text-white transition hover:bg-[#0b1c32]"
            >
              {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
