import React, { useState } from 'react';
import { Logo } from '../../components/Auth/Logo';
import { BrandPanel } from '../../components/Auth/BrandPanel';
import { Input } from '../../components/Auth/Input';
import { Button } from '../../components/Auth/Button';
// Icon components
const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);

export const SignupStep1Page = ({
  onNext,
  onNavigateToLogin,
  initialData = {}
}) => {
  const [formData, setFormData] = useState({
    email: initialData.email || '',
    password: initialData.password || '',
    fullName: initialData.fullName || ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 600));

    onNext(formData);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Brand Panel */}
      <BrandPanel />

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          {/* Header Section */}
          <div className="text-center mb-8">
            <Logo />
            <div className="mt-8">
              <p className="text-sm text-gray-600 mb-2">Step 1 of 2</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Basic Information</h1>
              <p className="text-gray-600 text-sm">Fill in your personal details</p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">1</div>
              <span className="text-sm font-medium text-gray-900">Basic Info</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-gray-300 text-gray-400 flex items-center justify-center text-sm font-semibold">2</div>
              <span className="text-sm font-medium text-gray-400">Academic Info</span>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleNext} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Email</label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                  className="pr-10"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"><MailIcon /></div>
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">password</label>
              <div className="relative">
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  error={errors.password}
                  className="pr-10"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"><LockIcon /></div>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Full Name Field */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Full Name</label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Enter Your Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  error={errors.fullName}
                  className="pr-10"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"><UserIcon /></div>
              </div>
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full mt-8"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Sign Up'}
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <button
                onClick={onNavigateToLogin}
                className="text-gray-900 font-medium hover:underline"
              >
                Log In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
