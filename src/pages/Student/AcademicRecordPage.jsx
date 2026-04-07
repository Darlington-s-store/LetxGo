import React, { useState } from 'react';
import {
  mockAcademicCourseGroups,
  mockAcademicTranscriptItems,
} from '../../mockData/index';

const TabButton = ({ active, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex h-12 items-center justify-center rounded-2xl px-6 text-[15px] font-semibold transition ${
      active
        ? 'bg-[#061526] text-white shadow-[0_12px_24px_rgba(6,21,38,0.12)]'
        : 'bg-transparent text-[#111827]'
    }`}
  >
    {children}
  </button>
);

const CourseListView = () => (
  <div className="space-y-8">
    {mockAcademicCourseGroups.map((group) => (
      <section key={group.id} className="space-y-2">
        <div className="rounded-[22px] bg-[#efebeb] px-4 py-4 text-[18px] font-semibold tracking-[-0.02em] text-[#1f2937] sm:px-5">
          {group.title}
        </div>

        <div className="space-y-4 px-2 py-1 sm:px-3">
          {group.courses.map((course) => (
            <div
              key={`${group.id}-${course.code}-${course.title}`}
              className="flex items-center justify-between gap-4 text-[14px] text-[#1f2937]"
            >
              <p className="min-w-0">
                {course.code} - {course.title}
              </p>
              <p className="shrink-0 text-right text-[14px] text-[#1f2937]">{course.credits}</p>
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);

const TranscriptView = () => (
  <section className="rounded-[28px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)] sm:px-6">
    <div className="grid gap-3 rounded-2xl bg-[#efebeb] px-4 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4b5563] sm:grid-cols-[1.2fr_1fr_0.6fr_0.8fr]">
      <span>Session</span>
      <span>Semester</span>
      <span>GPA</span>
      <span>Standing</span>
    </div>

    <div className="mt-4 space-y-3">
      {mockAcademicTranscriptItems.map((item) => (
        <div
          key={`${item.session}-${item.semester}`}
          className="grid gap-3 rounded-2xl border border-[#efebeb] bg-[#fcf9f9] px-4 py-4 text-[14px] text-[#111827] sm:grid-cols-[1.2fr_1fr_0.6fr_0.8fr]"
        >
          <span>{item.session}</span>
          <span>{item.semester}</span>
          <span className="font-semibold">{item.gpa}</span>
          <span>{item.status}</span>
        </div>
      ))}
    </div>
  </section>
);

export const AcademicRecordPage = () => {
  const [activeTab, setActiveTab] = useState('course-list');

  return (
    <section className="space-y-7">
      <div className="flex items-center gap-2">
        <TabButton active={activeTab === 'course-list'} onClick={() => setActiveTab('course-list')}>
          Course List
        </TabButton>
        <TabButton active={activeTab === 'transcript'} onClick={() => setActiveTab('transcript')}>
          Transcript
        </TabButton>
      </div>

      {activeTab === 'course-list' ? <CourseListView /> : <TranscriptView />}
    </section>
  );
};
