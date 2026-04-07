import React from 'react';

const CheckIcon = () => (
  <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12.5L9.25 16.75L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StatCard = ({ label, value }) => (
  <div className="rounded-2xl bg-[#fbf7f7] px-4 py-4 text-center">
    <p className="text-[12px] text-[#7f7b85]">{label}</p>
    <p className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-[#111827]">{value}</p>
  </div>
);

export const QuizResultPage = ({
  scorePercentage,
  totalQuestions,
  correctCount,
  wrongCount,
  onReviewQuiz,
  onReturnHome,
}) => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[560px] rounded-[30px] bg-white px-6 py-8 text-center shadow-[0_10px_30px_rgba(17,24,39,0.04)] sm:px-7">
        <div className="mx-auto flex h-[152px] w-[152px] items-center justify-center rounded-full bg-[#e5f3e9]">
          <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[#baf2c2] text-[#00e676]">
            <CheckIcon />
          </div>
        </div>

        <h2 className="mt-6 text-[24px] font-semibold tracking-[-0.03em] text-[#111827]">
          Congratulations
        </h2>
        <p className="mt-1 text-[14px] text-[#111827]">Excellent Work Done</p>

        <div className="mt-8">
          <p className="text-[16px] text-[#111827]">You Scored</p>
          <p className="mt-2 text-[64px] font-semibold leading-none tracking-[-0.05em] text-[#111827]">
            {scorePercentage}%
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <StatCard label="Total Questions" value={totalQuestions} />
          <StatCard label="Correct" value={correctCount} />
          <StatCard label="wrong" value={wrongCount} />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onReviewQuiz}
            className="flex h-12 flex-1 items-center justify-center rounded-xl border border-[#8a909b] bg-white text-[16px] font-semibold text-[#111827] transition hover:bg-[#faf7f7]"
          >
            Review Quiz
          </button>
          <button
            type="button"
            onClick={onReturnHome}
            className="flex h-12 flex-1 items-center justify-center rounded-xl bg-[#061526] text-[16px] font-semibold text-white transition hover:bg-[#0b1c32]"
          >
            Return to home
          </button>
        </div>
      </div>
    </section>
  );
};
