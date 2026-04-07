import React, { useState } from 'react';
import { Logo } from '../../components/Auth/Logo';
import { Input } from '../../components/Auth/Input';
import { Button } from '../../components/Auth/Button';
import { AuthLayout } from '../../components/Auth/AuthLayout';

export const ForgotPasswordPage = ({ onNavigateToLogin }) => {
  const [step, setStep] = useState('email'); // 'email' | 'otp' | 'reset'
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword] = useState(false);
  const [showConfirmPassword] = useState(false);
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep('otp');
      setErrors({});
      startResendCooldown();
    } catch {
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep('reset');
      setErrors({});
    } catch {
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onNavigateToLogin();
    } catch {
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
        <div>
          <button
            onClick={onNavigateToLogin}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm mb-4 flex items-center gap-1"
          >
            ← Back to Login
          </button>
          <Logo />
        </div>

        {step === 'email' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
              <p className="text-gray-600 text-sm mt-1">Enter your email address to receive a reset code</p>
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
              <Button type="submit" variant="primary" fullWidth isLoading={isLoading}>Send Reset Code</Button>
            </form>
          </div>
        )}

        {step === 'otp' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Verify Email</h2>
              <p className="text-gray-600 text-sm mt-1">Enter code sent to <span className="font-medium text-gray-900">{email}</span></p>
            </div>
            <form onSubmit={handleOtpSubmit} className="space-y-5">
              <Input
                label="Verification Code"
                type="text"
                maxLength="6"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                error={errors.otp}
              />
              <Button type="submit" variant="primary" fullWidth isLoading={isLoading}>Verify Code</Button>
            </form>
            <div className="text-center">
              <Button type="button" variant="ghost" onClick={handleResendOtp} disabled={resendCooldown > 0 || isLoading}>
                {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend Code'}
              </Button>
            </div>
          </div>
        )}

        {step === 'reset' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">New Password</h2>
              <p className="text-gray-600 text-sm mt-1">Enter your new password below</p>
            </div>
            <form onSubmit={handleResetSubmit} className="space-y-5">
              <Input
                label="New Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                // showToggleButton is just indicative, simplified here
              />
              <Input
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={errors.confirmPassword}
              />
              <Button type="submit" variant="primary" fullWidth isLoading={isLoading}>Reset Password</Button>
            </form>
          </div>
        )}
      </div>
    </AuthLayout>
  );
};
