import React from 'react';

const CloseIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1">
    <path d="M7 7L17 17" strokeLinecap="round" />
    <path d="M17 7L7 17" strokeLinecap="round" />
  </svg>
);

const StatusIcon = ({ correct }) => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    {correct ? (
      <>
        <circle cx="12" cy="12" r="8.2" stroke="#84cc16" />
        <path d="M8 12.3L10.8 15.1L16 9.7" stroke="#84cc16" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ) : (
      <>
        <circle cx="12" cy="12" r="8.2" stroke="#ff3b30" />
        <path d="M9 9L15 15" stroke="#ff3b30" strokeLinecap="round" />
        <path d="M15 9L9 15" stroke="#ff3b30" strokeLinecap="round" />
      </>
    )}
  </svg>
);

export const QuizReviewPage = ({ questions, selectedAnswers, onClose }) => {
  return (
    <section className="rounded-[28px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)] sm:px-6">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#111827]">Question Review</h2>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#111827] transition hover:bg-[#f2ecec]"
          aria-label="Close review"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {questions.map((question, index) => {
          const selectedAnswer = selectedAnswers[question.id];
          const chosenOption = question.options.find((option) => option.key === selectedAnswer);
          const correctOption = question.options.find((option) => option.key === question.correctAnswer);
          const isCorrect = selectedAnswer === question.correctAnswer;

          return (
            <article
              key={question.id}
              className="rounded-xl border border-[#bfc4ce] bg-[#fcf9f9] px-4 py-4 sm:px-5"
            >
              <div className="flex items-center gap-2">
                <StatusIcon correct={isCorrect} />
                <p className="text-[16px] font-semibold tracking-[-0.02em] text-[#111827]">
                  Question {index + 1}
                </p>
              </div>

              <p className="mt-3 text-[16px] leading-[1.35] text-[#111827]">{question.prompt}</p>

              <p className="mt-4 text-[15px] text-[#ff3b30]">
                Your answer: {chosenOption ? `${chosenOption.key}) ${chosenOption.text}` : 'No answer selected'}
              </p>

              <p className="mt-4 text-[15px] text-[#84cc16]">
                Correct Answer:{' '}
                {correctOption ? `${correctOption.key}) ${correctOption.text}` : 'Not available'}
              </p>

              <p className="mt-4 text-[15px] leading-[1.45] text-[#111827]">
                <span className="font-semibold">Explanation :</span> {question.explanation}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
