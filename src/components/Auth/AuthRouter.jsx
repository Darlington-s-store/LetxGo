import React, { useState, useEffect } from 'react';
import { OnboardingPage } from '../../pages/Onboarding/OnboardingPage';
import { SignupPage } from '../../pages/Auth/SignupPage';
import { EmailVerificationPage } from '../../pages/Auth/EmailVerificationPage';
import { LoginPage } from '../../pages/Auth/LoginPage';
import { DashboardPage } from '../../pages/Student/DashboardPage';
import { ForgotPasswordPage } from '../../pages/Auth/ForgotPasswordPage';
import { GoogleLoginPage } from '../../pages/Auth/GoogleLoginPage';
import { lexgoStorage } from '../../utils/storage';

export const AuthRouter = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('lexgo_auth_page') || 'onboarding';
  });

  const [verificationEmail, setVerificationEmail] = useState(
    localStorage.getItem('lexgo_auth_email') || ''
  );

  useEffect(() => {
    localStorage.setItem('lexgo_auth_page', currentPage);
    if (verificationEmail) {
      localStorage.setItem('lexgo_auth_email', verificationEmail);
    } else {
      localStorage.removeItem('lexgo_auth_email');
    }
  }, [currentPage, verificationEmail]);

  const handleNavigateToSignup = () => setCurrentPage('signup');
  const handleNavigateToLogin = () => setCurrentPage('login');
  const handleNavigateToForgotPassword = () => setCurrentPage('forgot-password');
  const handleNavigateToGoogleLogin = () => setCurrentPage('google-login');

  const handleSignupComplete = (formData) => {
    setVerificationEmail(formData.email);
    
    // Store user data on signup
    lexgoStorage.saveUserProfile({
      fullName: formData.fullName,
      email: formData.email,
      institution: formData.institution,
      studentId: formData.studentId,
      levelOfStudy: formData.levelOfStudy,
      program: formData.program
    });
    
    setCurrentPage('email-verification');
  };

  const handleVerificationComplete = () => {
    setCurrentPage('login');
  };

  const handleLoginComplete = (userData) => {
    if (userData) {
      lexgoStorage.saveUserProfile(userData);
    }
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    // Clear state on logout
    localStorage.removeItem('lexgo_auth_page');
    localStorage.removeItem('lexgo_auth_email');
    lexgoStorage.clearAll();
    setCurrentPage('login');
  };

  return (
    <>
      {currentPage === 'onboarding' && (
        <OnboardingPage onNavigateToSignup={handleNavigateToSignup} onNavigateToLogin={handleNavigateToLogin} />
      )}
      {currentPage === 'signup' && (
        <SignupPage 
          onSignupComplete={handleSignupComplete} 
          onNavigateToLogin={handleNavigateToLogin} 
          onNavigateToGoogleLogin={handleNavigateToGoogleLogin}
        />
      )}
      {currentPage === 'email-verification' && (
        <EmailVerificationPage
          email={verificationEmail}
          onVerifyCode={handleVerificationComplete}
          onNavigateBack={handleNavigateToSignup}
        />
      )}
      {currentPage === 'login' && (
        <LoginPage
          onLoginComplete={handleLoginComplete}
          onNavigateToSignup={handleNavigateToSignup}
          onNavigateToForgotPassword={handleNavigateToForgotPassword}
          onNavigateToGoogleLogin={handleNavigateToGoogleLogin}
        />
      )}
      {currentPage === 'google-login' && (
        <GoogleLoginPage
          onLoginComplete={handleLoginComplete}
          onNavigateToLogin={handleNavigateToLogin}
        />
      )}
      {currentPage === 'dashboard' && (
        <DashboardPage onLogout={handleLogout} />
      )}
      {currentPage === 'forgot-password' && (
        <ForgotPasswordPage onNavigateToLogin={handleNavigateToLogin} />
      )}
    </>
  );
};
