import React, { useState } from 'react';
import { Logo } from '../../components/Auth/Logo';
import { BrandPanel } from '../../components/Auth/BrandPanel';
import { Input } from '../../components/Auth/Input';
import { Button } from '../../components/Auth/Button';
import { Lock } from 'lucide-react';

export const SignupStep2Page = ({
  step1Data,
  onSignupComplete,
  onNavigateBack
}) => {
  const [formData, setFormData] = useState({
    institution: '',
    studentId: '',
    levelOfStudy: '',
    program: '',
    password: step1Data?.password || '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const institutions = [
    'Harvard University',
    'Yale University',
    'Stanford University',
    'MIT',
    'University of Lagos',
    'Other'
  ];

  const levelOfStudy = [
    '100 Level',
    '200 Level',
    '300 Level',
    '400 Level',
    'Master',
    'PhD'
  ];

  const programs = [
    'Law',
    'Business Law',
    'International Law',
    'Criminal Law',
    'Constitutional Law',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.institution) {
      newErrors.institution = 'Institution is required';
    }

    if (!formData.studentId.trim()) {
      newErrors.studentId = 'Student ID is required';
    }

    if (!formData.levelOfStudy) {
      newErrors.levelOfStudy = 'Level of Study is required';
    }

    if (!formData.program) {
      newErrors.program = 'Program is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    onSignupComplete({
      ...step1Data,
      institution: formData.institution,
      studentId: formData.studentId,
      levelOfStudy: formData.levelOfStudy,
      program: formData.program
    });
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Brand Panel */}
      <BrandPanel />

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto px-8 py-12">
        <div className="w-full max-w-md mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <Logo />
            <div className="mt-8">
              <p className="text-sm text-gray-600 mb-2">Step 2 of 2</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Academic Information</h1>
              <p className="text-gray-600 text-sm">Fill in your academic details</p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <span className="text-sm font-medium text-gray-900">Basic Info</span>
            </div>
            <div className="flex-1 h-1 bg-gray-900 mx-4"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">2</div>
              <span className="text-sm font-medium text-gray-900">Academic Info</span>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Institution Field */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Name of Institution *</label>
              <select
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 bg-white text-gray-900"
              >
                <option value="">Enter your institution name</option>
                {institutions.map((inst) => (
                  <option key={inst} value={inst}>
                    {inst}
                  </option>
                ))}
              </select>
              {errors.institution && <p className="text-red-500 text-xs mt-1">{errors.institution}</p>}
            </div>

            {/* Student ID Field */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Student ID</label>
              <Input
                type="text"
                placeholder="Enter your student ID"
                value={formData.studentId}
                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                error={errors.studentId}
              />
              {errors.studentId && <p className="text-red-500 text-xs mt-1">{errors.studentId}</p>}
            </div>

            {/* Level of Study & Program Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Level of Study</label>
                <select
                  value={formData.levelOfStudy}
                  onChange={(e) => setFormData({ ...formData, levelOfStudy: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 bg-white text-gray-900"
                >
                  <option value="">Enter your password</option>
                  {levelOfStudy.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
                {errors.levelOfStudy && <p className="text-red-500 text-xs mt-1">{errors.levelOfStudy}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Program</label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 bg-white text-gray-900"
                >
                  <option value="">Enter your password</option>
                  {programs.map((prog) => (
                    <option key={prog} value={prog}>
                      {prog}
                    </option>
                  ))}
                </select>
                {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Password</label>
              <div className="relative">
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  error={errors.password}
                  disabled
                  className="pr-10 bg-gray-100"
                />
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Confirm Password</label>
              <div className="relative">
                <Input
                  type="password"
                  placeholder="confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  error={errors.confirmPassword}
                  className="pr-10"
                />
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 my-6">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-gray-300 cursor-pointer"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                By you clicking Sign Up, you agree to our{' '}
                <a href="#" className="text-red-500 hover:underline">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-red-500 hover:underline">
                  Privacy Policy.
                </a>
              </label>
            </div>
            {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full mt-6"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
