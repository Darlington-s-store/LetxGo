import React, { useState } from 'react';
import { Logo } from './Logo';
import { Input } from './Input';
import { Button } from './Button';
import { AuthLayout } from './AuthLayout';

export const ForgotPasswordPage = ({ onNavigateToLogin }) => {
  const [step, setStep] = useState('email'); // 'email' | 'otp' | 'reset'
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [resendCooldown, setResendCooldown] = useState(0);

  // Email Step
  const validateEmail = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail()) return;

    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Reset email sent to:', email);
      setStep('otp');
      setErrors({});
      startResendCooldown();
    } catch (error) {
      setErrors({ submit: 'Failed to send reset email. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // OTP Step
  const validateOtp = () => {
    const newErrors = {};

    if (!otp.trim()) {
      newErrors.otp = 'Verification code is required';
    } else if (otp.length !== 6) {
      newErrors.otp = 'Verification code must be 6 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (!validateOtp()) return;

    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('OTP verified:', otp);
      setStep('reset');
      setErrors({});
    } catch (error) {
      setErrors({ otp: 'Invalid verification code' });
    } finally {
      setIsLoading(false);
    }
  };

  const startResendCooldown = () => {
    setResendCooldown(60);
    const interval = setInterval(() => {
      setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      startResendCooldown();
    } finally {
      setIsLoading(false);
    }
  };

  // Reset Password Step
  const validateReset = () => {
    const newErrors = {};

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])/.test(password)) {
      newErrors.password = 'Password must contain lowercase letters';
    } else if (!/(?=.*[A-Z])/.test(password)) {
      newErrors.password = 'Password must contain uppercase letters';
    } else if (!/(?=.*\d)/.test(password)) {
      newErrors.password = 'Password must contain numbers';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();

    if (!validateReset()) return;

    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Password reset successful');
      onNavigateToLogin();
    } catch (error) {
      setErrors({
        submit: 'Failed to reset password. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <button
            onClick={onNavigateToLogin}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm mb-4 flex items-center gap-1"
          >
            ← Back to Login
          </button>
          <Logo />
        </div>

        {/* Step 1: Email */}
        {step === 'email' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Reset Password
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Enter your email address to receive a reset code
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-5">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />

              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-600">{errors.submit}</p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={isLoading}
              >
                Send Reset Code
              </Button>
            </form>
          </div>
        )}

        {/* Step 2: OTP Verification */}
        {step === 'otp' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Verify Email
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Enter the 6-digit code sent to
                <br />
                <span className="font-medium text-gray-900">{email}</span>
              </p>
            </div>

            <form onSubmit={handleOtpSubmit} className="space-y-5">
              <Input
                label="Verification Code"
                type="text"
                inputMode="numeric"
                maxLength="6"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                error={errors.otp}
              />

              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-600">{errors.submit}</p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={isLoading}
              >
                Verify Code
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Didn't receive the code?
              </p>
              <Button
                type="button"
                variant="ghost"
                onClick={handleResendOtp}
                disabled={resendCooldown > 0 || isLoading}
              >
                {resendCooldown > 0
                  ? `Resend in ${resendCooldown}s`
                  : 'Resend Code'}
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Reset Password */}
        {step === 'reset' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Create New Password
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Enter your new password below
              </p>
            </div>

            <form onSubmit={handleResetSubmit} className="space-y-5">
              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`
                    w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    bg-white text-gray-900 placeholder-gray-500
                    transition-all duration-200
                    ${
                      errors.password
                        ? 'border-red-500 focus:ring-red-500'
                        : ''
                    }
                  `}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
                <p className="text-xs text-gray-500">
                  At least 8 characters with uppercase, lowercase, and numbers
                </p>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {showConfirmPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`
                    w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    bg-white text-gray-900 placeholder-gray-500
                    transition-all duration-200
                    ${
                      errors.confirmPassword
                        ? 'border-red-500 focus:ring-red-500'
                        : ''
                    }
                  `}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-600">{errors.submit}</p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={isLoading}
              >
                Reset Password
              </Button>
            </form>
          </div>
        )}
      </div>
    </AuthLayout>
  );
};
