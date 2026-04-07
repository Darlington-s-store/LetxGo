import React, { useState, useRef, useEffect } from 'react';
import { Logo } from '../../components/Auth/Logo';
import { BrandPanel } from '../../components/Auth/BrandPanel';
import { Button } from '../../components/Auth/Button';

export const PhoneVerificationPageNew = ({
  phoneNumber,
  onVerifyCode,
  onNavigateBack,
  onResend
}) => {
  const [code, setCode] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleCodeChange = (index, value) => {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError('');

    // Auto focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    
    const fullCode = code.join('');
    if (fullCode.length !== 4) {
      setError('Please enter all 4 digits');
      return;
    }

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    onVerifyCode(fullCode);
  };

  const handleResend = async () => {
    setResendLoading(true);
    await new Promise(resolve => setTimeout(resolve, 600));
    
    if (onResend) {
      onResend();
    }
    
    setResendLoading(false);
    setResendTimer(30);
    setCode(['', '', '', '']);
    setError('');
  };

  const maskedPhone = phoneNumber
    ? `${phoneNumber.slice(0, 4)}${'*'.repeat(phoneNumber.length - 8)}${phoneNumber.slice(-2)}`
    : '';

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Brand Panel */}
      <BrandPanel />

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button
            onClick={onNavigateBack}
            className="mb-8 flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors"
          >
            ← Back
          </button>

          {/* Header Section */}
          <div className="text-center mb-8">
            <Logo />
            <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-2">Phone Number Verification</h1>
            <p className="text-gray-600 text-sm">
              Enter the verification code we just sent on your email address<br />
              <span className="text-gray-700 font-medium">{maskedPhone}</span>
            </p>
          </div>

          {/* Code Input Section */}
          <form onSubmit={handleVerify} className="space-y-6">
            {/* Code Inputs */}
            <div className="flex justify-center gap-4">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`w-14 h-14 text-center text-xl font-semibold border-2 rounded-lg focus:outline-none transition-colors ${
                    digit
                      ? 'border-gray-900 text-gray-900 bg-gray-50'
                      : 'border-gray-300 text-gray-400'
                  } ${error ? 'border-red-500' : ''}`}
                />
              ))}
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            {/* Verify Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify Code'}
            </Button>
          </form>

          {/* Resend Section */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Didn't receive code?{' '}
              <button
                onClick={handleResend}
                disabled={resendTimer > 0 || resendLoading}
                className={`font-medium ${
                  resendTimer > 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-900 hover:underline'
                }`}
              >
                {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
