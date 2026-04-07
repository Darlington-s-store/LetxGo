import React, { useState } from 'react';
import {
  helpArticleIds,
  mockCaseItems,
  mockDashboardFeaturedCase,
  mockDashboardQuickStats,
  mockDashboardRecentActivity,
  quizQuestionBank,
} from '../../mockData/index';
import { lexgoStorage } from '../../utils/storage';
import { CasesPage } from './CasesPage';
import { CaseReaderPage } from './CaseReaderPage';
import { CoursesPage } from './CoursesPage';
import { AcademicRecordPage } from './AcademicRecordPage';
import { AiLegalAssistantPage } from './AiLegalAssistantPage';
import { CompanionPage } from './CompanionPage';
import { HelpCenterPage } from './HelpCenterPage';
import { HelpCenterArticlePage } from './HelpCenterArticlePage';
import { NotesPage } from './NotesPage';
import { QuizSetupPage } from './QuizSetupPage';
import { QuizQuestionPage } from './QuizQuestionPage';
import { QuizResultPage } from './QuizResultPage';
import { QuizReviewPage } from './QuizReviewPage';

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'cases', label: 'Cases', icon: 'briefcase' },
  { id: 'quiz', label: 'Quiz', icon: 'clock' },
  { id: 'courses', label: 'Courses', icon: 'book' },
  { id: 'help', label: 'Help Center', icon: 'info' },
  { id: 'companion', label: 'Companion', icon: 'dictionary' },
  { id: 'record', label: 'Academic Record', icon: 'chart' },
];

const quickActions = [
  {
    id: 'quiz',
    label: 'Practice Quiz',
    description: 'Test your knowledge',
    icon: 'quiz',
    accent: 'text-[#d89b00]',
    background: 'bg-[#fff4d6]',
  },
  {
    id: 'ask-ai',
    label: 'Ask AI',
    description: 'Get instant help with legal concept',
    icon: 'assistant',
    accent: 'text-[#2857ff]',
    background: 'bg-[#eef2ff]',
  },
  {
    id: 'notes',
    label: 'Take Notes',
    description: 'organize your thoughts',
    icon: 'note',
    accent: 'text-[#ff3b30]',
    background: 'bg-[#fff0ef]',
  },
  {
    id: 'dictionary',
    label: 'Dictionary',
    description: 'Study landmark decisions',
    icon: 'dictionary',
    accent: 'text-[#111827]',
    background: 'bg-[#f3f4f6]',
  },
];

const pageTitles = {
  dashboard: 'Home',
  cases: 'Cases',
  'case-reader': 'Cases',
  courses: 'Courses',
  help: 'Help Center',
  'help-get-started': 'Help Center',
  'help-cases': 'Help Center',
  'help-quiz': 'Help Center',
  'help-courses': 'Help Center',
  'help-ask-ai': 'Help Center',
  notes: 'Notes',
  companion: 'Law Dictionary',
  'ai-assistant': 'AI Legal Assistant',
  record: 'Academic Record',
  'quiz-setup': 'Quiz',
  'quiz-session': 'Quiz',
  'quiz-result': 'Quiz',
  'quiz-review': 'Quiz',
};

const quizPageIds = ['quiz-setup', 'quiz-session', 'quiz-result', 'quiz-review'];

const buildQuizQuestions = (area, questionCount) => {
  const filteredQuestions = quizQuestionBank.filter((question) => question.area === area);
  const source = filteredQuestions.length ? filteredQuestions : quizQuestionBank;

  return Array.from({ length: questionCount }, (_, index) => {
    const baseQuestion = source[index % source.length];

    return {
      ...baseQuestion,
      id: `${baseQuestion.id}-${index}`,
    };
  });
};

const ScalesIcon = ({ className = '', color = 'currentColor', opacity }) => (
  <svg
    className={className}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={opacity ? { opacity } : undefined}
  >
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

const UserAvatarIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="3.25" />
    <path d="M5.75 19.25C6.68 16.65 9.08 14.9 12 14.9C14.92 14.9 17.32 16.65 18.25 19.25" />
  </svg>
);

const BellIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
    <path d="M8 18H16" strokeLinecap="round" />
    <path
      d="M6.5 16.5V11C6.5 7.96 8.96 5.5 12 5.5C15.04 5.5 17.5 7.96 17.5 11V16.5L19 18H5L6.5 16.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 7L15 12L10 17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MenuIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 6H20M4 12H20M4 18H20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const renderIcon = (icon, className = 'h-4 w-4') => {
  const props = { className, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.9' };

  switch (icon) {
    case 'dashboard':
      return (
        <svg {...props}>
          <rect x="4" y="4" width="6.5" height="6.5" rx="1.3" />
          <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.3" />
          <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.3" />
          <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.3" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg {...props}>
          <rect x="4" y="7" width="16" height="12" rx="2" />
          <path d="M9 7V5.5C9 4.67 9.67 4 10.5 4H13.5C14.33 4 15 4.67 15 5.5V7" />
          <path d="M4 11.5H20" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8V12L14.75 13.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'book':
      return (
        <svg {...props}>
          <path d="M6 5.5H11C12.1 5.5 13 6.4 13 7.5V18.5H8C6.9 18.5 6 17.6 6 16.5V5.5Z" />
          <path d="M18 5.5H13C11.9 5.5 11 6.4 11 7.5V18.5H16C17.1 18.5 18 17.6 18 16.5V5.5Z" />
        </svg>
      );
    case 'info':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 10.5V15.5" strokeLinecap="round" />
          <circle cx="12" cy="8" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'home':
      return (
        <svg {...props}>
          <path d="M5 10.5L12 5L19 10.5V18.5H5V10.5Z" />
          <path d="M9.5 18.5V13.5H14.5V18.5" />
        </svg>
      );
    case 'assistant':
      return (
        <svg {...props}>
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
    case 'chart':
      return (
        <svg {...props}>
          <path d="M6 18V10" strokeLinecap="round" />
          <path d="M12 18V6" strokeLinecap="round" />
          <path d="M18 18V13" strokeLinecap="round" />
        </svg>
      );
    case 'logout':
      return (
        <svg {...props}>
          <path d="M10 5H6.5C5.67 5 5 5.67 5 6.5V17.5C5 18.33 5.67 19 6.5 19H10" strokeLinecap="round" />
          <path d="M13 8L17 12L13 16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12H17" strokeLinecap="round" />
        </svg>
      );
    case 'quiz':
      return (
        <svg {...props}>
          <rect x="6.25" y="5.5" width="11.5" height="13" rx="2.2" />
          <path d="M9 10.25H15" strokeLinecap="round" />
          <path d="M9 13.25H13" strokeLinecap="round" />
          <path d="M10.5 5.5V4.5H13.5V5.5" strokeLinecap="round" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="6.2" />
          <path d="M12 9V15" strokeLinecap="round" />
          <path d="M9 12H15" strokeLinecap="round" />
        </svg>
      );
    case 'note':
      return (
        <svg {...props}>
          <rect x="7" y="5.5" width="10" height="13" rx="1.8" />
          <path d="M10 9.25H14" strokeLinecap="round" />
          <path d="M10 12.25H14" strokeLinecap="round" />
          <path d="M10 15.25H13" strokeLinecap="round" />
        </svg>
      );
    case 'dictionary':
      return (
        <svg {...props}>
          <path d="M8 6H16V18H8C7.17 18 6.5 17.33 6.5 16.5V7.5C6.5 6.67 7.17 6 8 6Z" />
          <path d="M16 6V18" />
        </svg>
      );
    default:
      return null;
  }
};

const SidebarItem = ({ item, active, onClick, disabled = false }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-current={active ? 'page' : undefined}
    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-[13px] font-medium transition ${
      active
        ? 'bg-gradient-to-r from-[#0c1728] to-[#c9cbcf] text-white shadow-[0_10px_25px_rgba(12,23,40,0.12)]'
        : 'text-[#1f2937] hover:bg-[#f6f2f2]'
    } ${disabled ? 'cursor-default' : ''}`}
  >
    <span className={active ? 'text-white' : 'text-[#111827]'}>{renderIcon(item.icon)}</span>
    <span>{item.label}</span>
  </button>
);

const QuickActionCard = ({ action, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex flex-col items-center rounded-2xl px-3 py-4 text-center transition hover:bg-[#fbf8f8]"
  >
    <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${action.background} ${action.accent}`}>
      {renderIcon(action.icon, 'h-[13px] w-[13px]')}
    </span>
    <span className="mt-4 text-[18px] font-semibold tracking-[-0.02em] text-[#111827]">{action.label}</span>
    <span className="mt-1 text-[12px] leading-[1.35] text-[#8b8a90]">{action.description}</span>
  </button>
);

const ActivityItem = ({ item }) => (
  <button
    type="button"
    className="flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition hover:bg-[#fbf8f8]"
  >
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#cff8de] text-[#111827]">
      {renderIcon('book')}
    </span>
    <span className="min-w-0 flex-1">
      <span className="block text-[18px] font-semibold tracking-[-0.02em] text-[#111827]">{item.title}</span>
      <span className="mt-1 block text-[13px] text-[#8b8a90]">{item.time}</span>
    </span>
    <span className="text-[#7f7b85]">
      <ChevronRightIcon />
    </span>
  </button>
);
const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-5 py-4 backdrop-blur-sm bg-black/40 transition-opacity">
      <div className="relative w-full max-w-[480px] scale-100 transform overflow-hidden rounded-[24px] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] sm:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[24px] font-bold tracking-tight text-[#111827]">Log Out</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fbf8f8] text-[#111827] transition hover:bg-[#f3f4f6]"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        <p className="mt-6 text-[16px] leading-[1.5] text-[#5f6775]">
          Leaving already? You're about to log out. You can log back in anytime.
        </p>

        <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-12 items-center justify-center rounded-xl border border-[#e5e7eb] px-6 text-[15px] font-semibold text-[#111827] transition hover:bg-[#f3f4f6]"
          >
            No, Stay Logged In
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-[#061526] px-6 text-[15px] font-semibold text-white transition hover:bg-[#0c1e34] shadow-[0_4px_12px_rgba(6,21,38,0.2)]"
          >
            Yes, Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

const DashboardHeader = ({ title, onMenuClick, onLogoutClick, user }) => (
  <header className="sticky top-0 z-30 border-b border-[#f0e9e9] bg-white/95 px-5 py-4 backdrop-blur sm:px-8 lg:fixed lg:left-[240px] lg:right-0 lg:px-10">
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="lg:hidden text-[#111827] hover:bg-[#f3f4f6] p-1.5 rounded-lg transition-colors"
          aria-label="Open sidebar"
        >
          <MenuIcon />
        </button>
        <h1 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827] sm:text-[20px]">{title}</h1>
      </div>

      <div className="flex items-center gap-5 sm:gap-6">
        <button type="button" className="relative text-[#111827] transition hover:text-[#061526]">
          <BellIcon />
          <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ff4f46] text-[8px] font-semibold text-white">
            {user.notificationCount ?? 8}
          </span>
        </button>

        <button 
          type="button"
          onClick={onLogoutClick}
          className="flex items-center gap-4 py-1 px-2 -mr-2 rounded-xl transition hover:bg-[#f3f4f6] active:bg-[#eceef1] group"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffb11b] text-white shadow-sm ring-2 ring-transparent group-hover:ring-orange-100 transition-all">
              <UserAvatarIcon />
            </span>
            <div className="hidden sm:block text-left">
              <p className="text-[14px] font-semibold text-[#111827] leading-tight group-hover:text-[#ff4f46] transition-colors">{user.role || 'Law Student'}</p>
              <p className="text-[11px] text-[#8b8a90] mt-0.5">{(user.fullName || '').split(' ')[0] || 'Guest User'}</p>
            </div>
          </div>
          
          <span className="text-[#5f6775] transition-colors group-hover:text-[#ff4f46]">
            {renderIcon('logout', 'h-[18px] w-[18px]')}
          </span>
        </button>
      </div>
    </div>
  </header>
);

const DashboardHomeContent = ({
  user,
  onReadFeatureCase,
  onStartQuiz,
  onOpenAiAssistant,
  onOpenDictionary,
  onOpenNotes,
}) => (
  <div className="space-y-6">
    <header className="mb-8">
      <h2 className="text-[28px] font-bold tracking-tight text-[#061526] sm:text-[36px]">
        Welcome back, <span className="text-[#061526] underline decoration-[3px] underline-offset-[6px]">{(user.fullName || '').split(' ')[0] || 'LexGo Student'}</span>!
      </h2>
      <p className="mt-2 text-[15px] font-medium text-[#8d8b93]">Ready to master the law today?</p>
    </header>

    <section className="relative overflow-hidden rounded-2xl bg-[#061526] px-5 py-5 text-white shadow-[0_18px_40px_rgba(6,21,38,0.12)] sm:px-7 sm:py-6">
      <div className="relative z-10 max-w-[520px]">
        <div className="flex items-center gap-2">
          <ScalesIcon className="h-6 w-6 text-white" />
          <p className="text-[18px] font-semibold tracking-[-0.02em] sm:text-[20px]">Case of the Day</p>
        </div>
        <h2 className="mt-3 text-[26px] font-semibold tracking-[-0.03em] sm:text-[30px]">{mockDashboardFeaturedCase.title}</h2>
        <p className="mt-2 max-w-[440px] text-[15px] leading-[1.45] text-[#c3ccd7]">
          {mockDashboardFeaturedCase.summary}
        </p>
        <button
          type="button"
          onClick={onReadFeatureCase}
          className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-[#16314e] px-5 text-[14px] font-semibold text-white transition hover:bg-[#214267]"
        >
          Read Full Case
        </button>
      </div>

      <ScalesIcon
        className="pointer-events-none absolute right-4 top-1/2 hidden h-44 w-44 -translate-y-1/2 text-[#29435d] sm:block"
        color="currentColor"
        opacity={0.5}
      />
    </section>

    <section className="rounded-[28px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)] sm:px-6">
      <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#111827]">Quick Actions</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {quickActions.map((action) => (
          <QuickActionCard
            key={action.id}
            action={action}
            onClick={
              action.id === 'quiz'
                ? onStartQuiz
                : action.id === 'ask-ai'
                  ? onOpenAiAssistant
                  : action.id === 'notes'
                    ? onOpenNotes
                  : action.id === 'dictionary'
                    ? onOpenDictionary
                  : undefined
            }
          />
        ))}
      </div>
    </section>

    <section className="rounded-[28px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)] sm:px-6">
      <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#111827]">Recent Activity</h2>
      <div className="mt-5 space-y-2">
        {mockDashboardRecentActivity.map((item) => (
          <ActivityItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  </div>
);

export const DashboardPage = ({ onLogout }) => {
  const [activePage, setActivePage] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [userProfile] = useState(() => lexgoStorage.getUserProfile());
  const [selectedCase, setSelectedCase] = useState(mockCaseItems[0]);
  const [quizSettings, setQuizSettings] = useState({
    area: 'Criminal Law',
    difficulty: 'easy',
    questionCount: 10,
  });
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCurrentIndex, setQuizCurrentIndex] = useState(0);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleNavigation = (pageId) => {
    if (
      pageId === 'dashboard'
      || pageId === 'cases'
      || pageId === 'courses'
      || pageId === 'help'
      || pageId === 'record'
      || pageId === 'companion'
    ) {
      setSelectedCase(mockCaseItems[0]);
      setActivePage(pageId);
    }

    if (pageId === 'quiz') {
      setActivePage('quiz-setup');
    }
    closeSidebar();
  };

  const handleReadCase = (caseItem) => {
    setSelectedCase(caseItem);
    setActivePage('case-reader');
    closeSidebar();
  };

  const handleQuizSettingsChange = (partialSettings) => {
    setQuizSettings((current) => ({
      ...current,
      ...partialSettings,
    }));
  };

  const handleStartQuiz = () => {
    const generatedQuestions = buildQuizQuestions(quizSettings.area, quizSettings.questionCount);

    setQuizQuestions(generatedQuestions);
    setQuizAnswers({});
    setQuizCurrentIndex(0);
    setActivePage('quiz-session');
  };

  const handleSelectQuizAnswer = (questionId, optionKey) => {
    setQuizAnswers((current) => ({
      ...current,
      [questionId]: optionKey,
    }));
  };

  const handlePreviousQuizQuestion = () => {
    setQuizCurrentIndex((current) => Math.max(current - 1, 0));
  };

  const handleNextQuizQuestion = () => {
    if (quizCurrentIndex >= quizQuestions.length - 1) {
      setActivePage('quiz-result');
      return;
    }

    setQuizCurrentIndex((current) => current + 1);
  };

  const handleReviewQuiz = () => {
    setActivePage('quiz-review');
  };

  const handleReturnHome = () => {
    setActivePage('dashboard');
  };

  const handleHelpTopicOpen = (topicId) => {
    if (topicId === 'notes') {
      setActivePage('notes');
      return;
    }

    if (helpArticleIds.includes(topicId)) {
      setActivePage(topicId);
      return;
    }
  };

  const handleLogoutClick = () => {
    closeSidebar();
    setIsLogoutModalOpen(true);
  };

  const activeSidebarPage = activePage === 'case-reader'
    ? 'cases'
    : activePage === 'notes' || helpArticleIds.includes(activePage)
      ? 'help'
    : activePage === 'ai-assistant'
      ? ''
      : quizPageIds.includes(activePage)
        ? 'quiz'
        : activePage;
  const title = pageTitles[activePage] ?? 'Home';
  const correctAnswersCount = quizQuestions.filter(
    (question) => quizAnswers[question.id] === question.correctAnswer,
  ).length;
  const wrongAnswersCount = quizQuestions.length - correctAnswersCount;
  const scorePercentage = quizQuestions.length
    ? Math.round((correctAnswersCount / quizQuestions.length) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-[#fbf8f8] text-[#111827]">
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={closeSidebar}
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-[280px] sm:w-[300px] lg:w-[240px] flex flex-col bg-white border-r border-[#f0e9e9] transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex items-center justify-between px-5 py-6 lg:px-5 lg:py-5">
          <div className="flex items-center gap-3">
            <ScalesIcon className="h-8 w-8 text-[#061526]" />
            <div>
              <p className="text-[17px] font-semibold tracking-[-0.03em] text-[#111827]">LexGo</p>
              <p className="text-[11px] text-[#8b8a90]">Smart Legal Learning</p>
            </div>
          </div>
          <button 
            type="button"
            onClick={closeSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-[#f3f4f6]"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              active={activeSidebarPage === item.id}
              onClick={() => handleNavigation(item.id)}
              disabled={!['dashboard', 'cases', 'courses', 'help', 'record', 'quiz', 'companion'].includes(item.id)}
            />
          ))}
        </div>

        <div className="p-5 mt-auto border-t border-[#f0e9e9] lg:border-none">
          <h2 className="text-[14px] font-bold tracking-tight uppercase text-[#8b8a90]">Quick Stats</h2>
          <div className="mt-4 space-y-3.5">
            {mockDashboardQuickStats.map((stat) => (
              <div key={stat.id} className="flex items-center justify-between gap-4 text-[13px]">
                <span className="text-[#5f6775]">{stat.label}</span>
                <span className={`font-semibold ${stat.valueClass}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <div className="lg:pl-[240px]">
        <DashboardHeader 
          title={title} 
          onMenuClick={toggleSidebar} 
          onLogoutClick={handleLogoutClick}
          user={userProfile}
        />

        <main className="px-5 py-6 sm:px-8 lg:px-10 lg:pb-10 lg:pt-[96px]">
          {activePage === 'cases' ? (
            <CasesPage onReadCase={handleReadCase} />
          ) : activePage === 'case-reader' ? (
            <CaseReaderPage caseItem={selectedCase} onBack={() => setActivePage('cases')} />
          ) : activePage === 'courses' ? (
            <CoursesPage />
          ) : activePage === 'record' ? (
            <AcademicRecordPage />
          ) : activePage === 'help' ? (
            <HelpCenterPage
              onOpenTopic={handleHelpTopicOpen}
              onContactUs={() => setActivePage('ai-assistant')}
            />
          ) : helpArticleIds.includes(activePage) ? (
            <HelpCenterArticlePage articleId={activePage} onBack={() => setActivePage('help')} />
          ) : activePage === 'notes' ? (
            <NotesPage onBack={() => setActivePage('help')} />
          ) : activePage === 'companion' ? (
            <CompanionPage onBack={() => setActivePage('dashboard')} />
          ) : activePage === 'ai-assistant' ? (
            <AiLegalAssistantPage />
          ) : activePage === 'quiz-setup' ? (
            <QuizSetupPage
              settings={quizSettings}
              onChange={handleQuizSettingsChange}
              onStartQuiz={handleStartQuiz}
            />
          ) : activePage === 'quiz-session' ? (
            <QuizQuestionPage
              area={quizSettings.area}
              questions={quizQuestions}
              currentIndex={quizCurrentIndex}
              selectedAnswers={quizAnswers}
              onSelectAnswer={handleSelectQuizAnswer}
              onPrevious={handlePreviousQuizQuestion}
              onNext={handleNextQuizQuestion}
            />
          ) : activePage === 'quiz-result' ? (
            <QuizResultPage
              scorePercentage={scorePercentage}
              totalQuestions={quizQuestions.length}
              correctCount={correctAnswersCount}
              wrongCount={wrongAnswersCount}
              onReviewQuiz={handleReviewQuiz}
              onReturnHome={handleReturnHome}
            />
          ) : activePage === 'quiz-review' ? (
            <QuizReviewPage
              questions={quizQuestions}
              selectedAnswers={quizAnswers}
              onClose={() => setActivePage('quiz-result')}
            />
          ) : (
            <DashboardHomeContent
              user={userProfile}
              onReadFeatureCase={() => handleReadCase(mockCaseItems[0])}
              onStartQuiz={() => handleNavigation('quiz')}
              onOpenAiAssistant={() => setActivePage('ai-assistant')}
              onOpenDictionary={() => handleNavigation('companion')}
              onOpenNotes={() => setActivePage('notes')}
            />
          )}
        </main>
      </div>
      <LogoutModal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirm={onLogout}
      />
    </div>
  );
};
