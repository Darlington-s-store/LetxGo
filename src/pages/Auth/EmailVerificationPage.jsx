import React from 'react';
import {
  VerificationCodeScreen,
  maskEmail,
} from '../../components/Auth/VerificationCodeScreen';

export const EmailVerificationPage = ({
  email,
  onNavigateBack,
  onVerifyCode,
}) => {
  const handleVerifyCode = (verificationCode) => {
    console.log('Email verification code:', verificationCode);
    onVerifyCode?.(verificationCode);
  };

  const handleResendCode = () => {
    console.log('Resend email verification code for:', email);
  };

  return (
    <VerificationCodeScreen
      title="Email Verification"
      description={
        <>
          Enter the verification code we just sent on your email address{' '}
          {maskEmail(email)}.
        </>
      }
      onNavigateBack={onNavigateBack}
      onVerifyCode={handleVerifyCode}
      onResendCode={handleResendCode}
    />
  );
};
