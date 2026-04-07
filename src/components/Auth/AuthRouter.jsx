import React, { useState, useEffect } from 'react';
import { RoleSelectionPage } from '../../pages/Auth/RoleSelectionPage';
import { SignupStep1Page } from '../../pages/Auth/SignupStep1Page';
import { SignupStep2Page } from '../../pages/Auth/SignupStep2Page';
import { EmailVerificationPageNew } from '../../pages/Auth/EmailVerificationPageNew';
import { PhoneVerificationPageNew } from '../../pages/Auth/PhoneVerificationPageNew';
import { LoginPageNew } from '../../pages/Auth/LoginPageNew';
import { DashboardPageNew } from '../../pages/Student/DashboardPageNew';
import { ForgotPasswordPage } from '../../pages/Auth/ForgotPasswordPage';
import { lexgoStorage } from '../../utils/storage';

export const AuthRouter = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('lexgo_auth_page') || 'role-selection';
  });

  const [userRole, setUserRole] = useState(
    localStorage.getItem('lexgo_user_role') || null
  );

  const [step1Data, setStep1Data] = useState(null);
  const [verificationEmail, setVerificationEmail] = useState(
    localStorage.getItem('lexgo_auth_email') || ''
  );

  useEffect(() => {
    localStorage.setItem('lexgo_auth_page', currentPage);
    if (userRole) {
      localStorage.setItem('lexgo_user_role', userRole);
    }
    if (verificationEmail) {
      localStorage.setItem('lexgo_auth_email', verificationEmail);
    } else {
      localStorage.removeItem('lexgo_auth_email');
    }
  }, [currentPage, userRole, verificationEmail]);

  const handleRoleSelect = (role) => {
    setUserRole(role);
    setCurrentPage('signup-step1');
  };

  const handleSignupStep1Complete = (formData) => {
    setStep1Data(formData);
    setVerificationEmail(formData.email);
    setCurrentPage('signup-step2');
  };

  const handleSignupStep2Complete = async (formData) => {
    lexgoStorage.saveUserProfile({
      ...formData,
      role: userRole
    });
    
    // For demo, go to email verification
    setCurrentPage('email-verification');
  };

  const handleEmailVerificationComplete = () => {
    setCurrentPage('login');
  };

  const handlePhoneVerificationComplete = () => {
    setCurrentPage('login');
  };

  const handleLoginComplete = (userData) => {
    if (userData) {
      lexgoStorage.saveUserProfile({
        ...userData,
        role: userRole
      });
    }
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('lexgo_auth_page');
    localStorage.removeItem('lexgo_user_role');
    localStorage.removeItem('lexgo_auth_email');
    lexgoStorage.clearAll();
    setCurrentPage('role-selection');
    setUserRole(null);
    setStep1Data(null);
  };

  const handleNavigateToLogin = () => setCurrentPage('login');
  const handleNavigateToForgotPassword = () => setCurrentPage('forgot-password');
  const handleNavigateToSignup = () => setCurrentPage('signup-step1');
  const handleNavigateBack = (target) => setCurrentPage(target || 'role-selection');

  return (
    <>
      {currentPage === 'role-selection' && (
        <RoleSelectionPage onRoleSelect={handleRoleSelect} />
      )}
      {currentPage === 'signup-step1' && (
        <SignupStep1Page
          onNext={handleSignupStep1Complete}
          onNavigateToLogin={handleNavigateToLogin}
          initialData={step1Data}
        />
      )}
      {currentPage === 'signup-step2' && (
        <SignupStep2Page
          step1Data={step1Data}
          onSignupComplete={handleSignupStep2Complete}
          onNavigateBack={() => setCurrentPage('signup-step1')}
        />
      )}
      {currentPage === 'email-verification' && (
        <EmailVerificationPageNew
          email={verificationEmail}
          onVerifyCode={handleEmailVerificationComplete}
          onNavigateBack={() => setCurrentPage('signup-step1')}
        />
      )}
      {currentPage === 'phone-verification' && (
        <PhoneVerificationPageNew
          phoneNumber={verificationEmail}
          onVerifyCode={handlePhoneVerificationComplete}
          onNavigateBack={() => setCurrentPage('signup-step1')}
        />
      )}
      {currentPage === 'login' && (
        <LoginPageNew
          onLoginComplete={handleLoginComplete}
          onNavigateToSignup={handleNavigateToSignup}
          onNavigateToForgotPassword={handleNavigateToForgotPassword}
        />
      )}
      {currentPage === 'dashboard' && (
        <DashboardPageNew onLogout={handleLogout} />
      )}
      {currentPage === 'forgot-password' && (
        <ForgotPasswordPage onNavigateToLogin={handleNavigateToLogin} />
      )}
    </>
  );
};
