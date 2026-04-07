// Simple persistence layer for mock data
// In a real app, this would be an API client.

const STORAGE_KEYS = {
  USER_PROFILE: 'lexgo_user_profile',
  QUICK_STATS: 'lexgo_quick_stats',
  RECENT_ACTIVITY: 'lexgo_recent_activity',
  CHATS: 'lexgo_ai_chats',
};

// Initial data to seed storage if empty
const DEFAULT_USER_PROFILE = {
  role: 'Law Student',
  fullName: 'Guest User',
  notificationCount: 0,
  institution: '',
  studentId: '',
  levelOfStudy: '',
  program: '',
};

const DEFAULT_STATS = [
  { id: 'streak', label: 'Study Streak', value: '0 days', valueClass: 'text-[#f08a33]' },
  { id: 'cases', label: 'Cases Studied', value: '0', valueClass: 'text-[#2857ff]' },
  { id: 'ai-chats', label: 'AI Chats', value: '0', valueClass: 'text-[#1f2937]' },
];

const DEFAULT_ACTIVITY = [];

export const lexgoStorage = {
  // User Profile
  getUserProfile: () => {
    const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    return data ? JSON.parse(data) : DEFAULT_USER_PROFILE;
  },
  
  saveUserProfile: (profile) => {
    const current = lexgoStorage.getUserProfile();
    const updated = { ...current, ...profile };
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(updated));
    return updated;
  },

  // Quick Stats
  getStats: () => {
    const data = localStorage.getItem(STORAGE_KEYS.QUICK_STATS);
    return data ? JSON.parse(data) : DEFAULT_STATS;
  },

  saveStats: (stats) => {
    localStorage.setItem(STORAGE_KEYS.QUICK_STATS, JSON.stringify(stats));
  },
  
  updateStat: (id, newValue) => {
    const stats = lexgoStorage.getStats();
    const updated = stats.map(s => s.id === id ? { ...s, value: newValue } : s);
    lexgoStorage.saveStats(updated);
    return updated;
  },

  // Recent Activity
  getActivity: () => {
    const data = localStorage.getItem(STORAGE_KEYS.RECENT_ACTIVITY);
    return data ? JSON.parse(data) : DEFAULT_ACTIVITY;
  },

  addActivity: (title) => {
    const activity = lexgoStorage.getActivity();
    const newItem = {
      id: Date.now(),
      title,
      time: 'Just now'
    };
    const updated = [newItem, ...activity].slice(0, 10); // Keep last 10
    localStorage.setItem(STORAGE_KEYS.RECENT_ACTIVITY, JSON.stringify(updated));
    return updated;
  },

  // Clear all for logout
  clearAll: () => {
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
  }
};
