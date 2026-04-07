import React, { useState, useEffect } from 'react';
// Icon components
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);

const LogOutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
);

const BellIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
);

const SettingsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
import { lexgoStorage } from '../../utils/storage';

export const DashboardPageNew = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const [currentSection, setCurrentSection] = useState('overview');

  useEffect(() => {
    const profile = lexgoStorage.getUserProfile();
    setUserProfile(profile);
  }, []);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'cases', label: 'Cases', icon: '📋' },
    { id: 'courses', label: 'Courses', icon: '📚' },
    { id: 'quiz', label: 'Quiz', icon: '✏️' },
    { id: 'notes', label: 'Notes', icon: '📝' },
    { id: 'help', label: 'Help Center', icon: '❓' },
  ];

  const handleLogoutClick = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      onLogout();
    }
  };

  if (!userProfile) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen bg-gray-900 text-white transition-all duration-300 z-40 ${
          isSidebarOpen ? 'w-64' : 'w-0'
        } overflow-hidden`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold">LexGo</h2>
          <p className="text-sm text-gray-400">Law on the Go</p>
        </div>

        {/* Navigation */}
        <nav className="p-6 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentSection === item.id
                  ? 'bg-white text-gray-900 font-semibold'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={handleLogoutClick}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <LogOutIcon />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
            >
              {isSidebarOpen ? (
                <CloseIcon />
              ) : (
                <MenuIcon />
              )}
            </button>

            <div className="flex-1 mx-6 max-w-md">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"><SearchIcon /></div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative text-gray-600">
                <BellIcon />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
                <SettingsIcon />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white font-semibold">
                {userProfile.fullName?.charAt(0).toUpperCase() || 'U'}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 overflow-auto">
          {currentSection === 'overview' && (
            <div className="space-y-8">
              {/* Welcome Section */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome back, {userProfile.fullName}!
                </h1>
                <p className="text-gray-600">Here's your academic overview</p>
              </div>

              {/* User Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Profile Card */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Email</p>
                  <p className="text-lg font-semibold text-gray-900 break-all">{userProfile.email}</p>
                </div>

                {/* Institution Card */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Institution</p>
                  <p className="text-lg font-semibold text-gray-900">{userProfile.institution || 'Not Set'}</p>
                </div>

                {/* Student ID Card */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Student ID</p>
                  <p className="text-lg font-semibold text-gray-900">{userProfile.studentId || 'Not Set'}</p>
                </div>

                {/* Level Card */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Level of Study</p>
                  <p className="text-lg font-semibold text-gray-900">{userProfile.levelOfStudy || 'Not Set'}</p>
                </div>
              </div>

              {/* Program Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Academic Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Program</p>
                    <p className="text-lg font-semibold text-gray-900">{userProfile.program || 'Not Set'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Role</p>
                    <p className="text-lg font-semibold text-gray-900 capitalize">{userProfile.role || 'Student'}</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-sm p-6 border border-blue-200">
                  <p className="text-sm text-blue-600 uppercase tracking-wide font-semibold mb-2">Cases Reviewed</p>
                  <p className="text-4xl font-bold text-blue-900">0</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-sm p-6 border border-green-200">
                  <p className="text-sm text-green-600 uppercase tracking-wide font-semibold mb-2">Quizzes Completed</p>
                  <p className="text-4xl font-bold text-green-900">0</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-sm p-6 border border-purple-200">
                  <p className="text-sm text-purple-600 uppercase tracking-wide font-semibold mb-2">Study Hours</p>
                  <p className="text-4xl font-bold text-purple-900">0</p>
                </div>
              </div>
            </div>
          )}

          {currentSection === 'cases' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cases</h2>
              <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 text-center">
                <p className="text-gray-500">Cases feature coming soon</p>
              </div>
            </div>
          )}

          {currentSection === 'courses' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Courses</h2>
              <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 text-center">
                <p className="text-gray-500">Courses feature coming soon</p>
              </div>
            </div>
          )}

          {currentSection === 'quiz' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quiz</h2>
              <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 text-center">
                <p className="text-gray-500">Quiz feature coming soon</p>
              </div>
            </div>
          )}

          {currentSection === 'notes' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Notes</h2>
              <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 text-center">
                <p className="text-gray-500">Notes feature coming soon</p>
              </div>
            </div>
          )}

          {currentSection === 'help' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Help Center</h2>
              <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 text-center">
                <p className="text-gray-500">Help Center feature coming soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
