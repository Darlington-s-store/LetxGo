import React from 'react';
import {
  VerificationCodeScreen,
  maskPhoneNumber,
} from '../../components/Auth/VerificationCodeScreen';

export const PhoneVerificationPage = ({
  phoneNumber,
  onNavigateBack,
  onVerifyCode,
}) => {
  const handleVerifyCode = (verificationCode) => {
    console.log('Phone verification code:', verificationCode);
    onVerifyCode?.(verificationCode);
  };

  const handleResendCode = () => {
    console.log('Resend phone verification code for:', phoneNumber);
  };

  return (
    <VerificationCodeScreen
      title="Phone Number Verification"
      description={
        <>
          Enter the verification code we just sent on your phone number{' '}
          {maskPhoneNumber(phoneNumber)}
        </>
      }
      onNavigateBack={onNavigateBack}
      onVerifyCode={handleVerifyCode}
      onResendCode={handleResendCode}
    />
  );
};
