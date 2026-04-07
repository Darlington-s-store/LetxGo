import React, { useRef, useState } from 'react';

const LEGAL_PATTERN = `url("data:image/svg+xml,${encodeURIComponent(`
  <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#8BA0B8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.28">
      <g transform="translate(16 12)">
        <path d="M16 12V38" />
        <path d="M16 16L4 28M16 16L28 28" />
        <path d="M4 28L0 38H8L4 28Z" />
        <path d="M28 28L24 38H32L28 28Z" />
        <path d="M7 42H25" />
      </g>
      <g transform="translate(84 20)">
        <path d="M3 8H23L27 16H7L3 8Z" />
        <path d="M3 8V28H27V8" />
        <path d="M15 8V28" />
      </g>
      <g transform="translate(148 12)">
        <path d="M6 36C6 18 13 8 24 8C35 8 42 18 42 36" />
        <path d="M10 40H38" />
      </g>
      <g transform="translate(196 16)">
        <path d="M6 10L30 20" />
        <path d="M18 6L34 12" />
        <path d="M10 28L22 10" />
        <path d="M5 31L17 13" />
      </g>

      <g transform="translate(22 84)">
        <path d="M2 10H30V26H2V10Z" />
        <path d="M2 26H30" />
      </g>
      <g transform="translate(86 74)">
        <path d="M16 12V38" />
        <path d="M16 16L4 28M16 16L28 28" />
        <path d="M4 28L0 38H8L4 28Z" />
        <path d="M28 28L24 38H32L28 28Z" />
        <path d="M7 42H25" />
      </g>
      <g transform="translate(148 82)">
        <path d="M3 8H23L27 16H7L3 8Z" />
        <path d="M3 8V28H27V8" />
        <path d="M15 8V28" />
      </g>
      <g transform="translate(198 78)">
        <path d="M6 36C6 18 13 8 24 8C35 8 42 18 42 36" />
        <path d="M10 40H38" />
      </g>

      <g transform="translate(12 146)">
        <path d="M6 10L30 20" />
        <path d="M18 6L34 12" />
        <path d="M10 28L22 10" />
        <path d="M5 31L17 13" />
      </g>
      <g transform="translate(76 142)">
        <path d="M2 10H30V26H2V10Z" />
        <path d="M2 26H30" />
      </g>
      <g transform="translate(138 138)">
        <path d="M16 12V38" />
        <path d="M16 16L4 28M16 16L28 28" />
        <path d="M4 28L0 38H8L4 28Z" />
        <path d="M28 28L24 38H32L28 28Z" />
        <path d="M7 42H25" />
      </g>
      <g transform="translate(192 146)">
        <path d="M3 8H23L27 16H7L3 8Z" />
        <path d="M3 8V28H27V8" />
        <path d="M15 8V28" />
      </g>

      <g transform="translate(22 202)">
        <path d="M6 36C6 18 13 8 24 8C35 8 42 18 42 36" />
        <path d="M10 40H38" />
      </g>
      <g transform="translate(92 198)">
        <path d="M6 10L30 20" />
        <path d="M18 6L34 12" />
        <path d="M10 28L22 10" />
        <path d="M5 31L17 13" />
      </g>
      <g transform="translate(156 196)">
        <path d="M2 10H30V26H2V10Z" />
        <path d="M2 26H30" />
      </g>
    </g>
  </svg>
`)})")`;

export const maskEmail = (email) => {
  if (!email || !email.includes('@')) {
    return 'kwe**************@gmail.com';
  }

  const [localPart, domain] = email.split('@');
  const visiblePart = localPart.slice(0, 3);
  const hiddenPart = '*'.repeat(Math.max(localPart.length - visiblePart.length, 12));

  return `${visiblePart}${hiddenPart}@${domain}`;
};

export const maskPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) {
    return '+233******67';
  }

  const normalized = phoneNumber.replace(/\s+/g, '');
  const prefixMatch = normalized.match(/^\+\d{1,3}/);
  const prefix = prefixMatch ? prefixMatch[0] : normalized.slice(0, 4);
  const suffix = normalized.slice(-2);
  const hiddenLength = Math.max(normalized.length - prefix.length - suffix.length, 6);

  return `${prefix}${'*'.repeat(hiddenLength)}${suffix}`;
};

const ScalesIcon = ({ className = '', color = 'currentColor' }) => (
  <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="48" cy="14" r="4.5" fill={color} />
    <path d="M48 20V72" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    <path d="M31 73H65" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    <path d="M40 20H56" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    <path d="M48 24L17 39" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    <path d="M48 24L79 39" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    <path d="M17 39L8.5 57.5H25.5L17 39Z" fill={color} />
    <path d="M79 39L70.5 57.5H87.5L79 39Z" fill={color} />
    <path d="M32 74.5C32 68.7 36.7 64 42.5 64H53.5C59.3 64 64 68.7 64 74.5V77H32V74.5Z" fill={color} />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BrandPanel = () => (
  <aside className="relative flex min-h-[250px] items-center justify-center overflow-hidden bg-[#061526] px-8 py-14 lg:min-h-screen lg:basis-[41.5%]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: LEGAL_PATTERN,
        backgroundSize: '240px 240px',
      }}
      aria-hidden="true"
    />
    <div className="relative z-10 flex flex-col items-center text-center text-white">
      <ScalesIcon className="mb-6 h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56" color="#ffffff" />
      <h1 className="text-[48px] font-bold leading-none tracking-[-0.04em] sm:text-[56px] lg:text-[68px]">LexGo</h1>
      <p className="mt-2 text-[24px] font-light tracking-[-0.02em] sm:text-[28px] lg:text-[42px]">Law on the Go</p>
    </div>
  </aside>
);

const TopBrand = () => (
  <div className="mb-8 flex flex-col items-center">
    <ScalesIcon className="h-12 w-12 text-[#061526]" />
    <div className="mt-1 text-center text-[#061526]">
      <p className="text-[14px] font-semibold leading-none">LexGo</p>
      <p className="mt-1 text-[9px] leading-none">Law on the Go</p>
    </div>
  </div>
);

const OtpInput = ({ value, onChange, onKeyDown, onFocus, inputRef, autoFocus = false }) => (
  <input
    ref={inputRef}
    type="text"
    inputMode="numeric"
    pattern="[0-9]*"
    maxLength={1}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    onFocus={onFocus}
    autoFocus={autoFocus}
    className="h-[58px] w-[58px] rounded-2xl border border-transparent bg-[#fbf7f7] text-center text-[24px] font-medium text-[#061526] outline-none transition focus:border-[#061526] focus:bg-white sm:h-[64px] sm:w-[64px]"
    aria-label="Verification code digit"
  />
);

export const VerificationCodeScreen = ({
  title,
  description,
  onNavigateBack,
  onVerifyCode,
  onResendCode,
}) => {
  const [digits, setDigits] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const verificationCode = digits.join('');

  const handleDigitChange = (index, event) => {
    const nextValue = event.target.value.replace(/\D/g, '').slice(-1);

    setDigits((current) => {
      const updated = [...current];
      updated[index] = nextValue;
      return updated;
    });

    if (nextValue && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === 'ArrowRight' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event) => {
    const pastedDigits = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4).split('');

    if (!pastedDigits.length) {
      return;
    }

    event.preventDefault();

    setDigits([
      pastedDigits[0] ?? '',
      pastedDigits[1] ?? '',
      pastedDigits[2] ?? '',
      pastedDigits[3] ?? '',
    ]);

    const nextIndex = Math.min(pastedDigits.length, inputRefs.current.length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleVerify = (event) => {
    event.preventDefault();

    if (verificationCode.length !== 4) {
      const firstEmptyIndex = digits.findIndex((digit) => !digit);
      inputRefs.current[firstEmptyIndex >= 0 ? firstEmptyIndex : 0]?.focus();
      return;
    }

    onVerifyCode?.(verificationCode);
  };

  const handleResend = (event) => {
    event.preventDefault();
    onResendCode?.();
  };

  return (
    <div className="min-h-screen bg-white text-[#061526]">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <BrandPanel />

        <main className="flex flex-1 items-center justify-center bg-white px-5 py-8 sm:px-8 lg:basis-[58.5%] lg:px-16 lg:py-10">
          <div className="w-full max-w-[540px]">
            <div className="mx-auto max-w-[396px]">
              <div className="mb-10">
                <button
                  type="button"
                  onClick={onNavigateBack}
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#9ca3af] bg-white px-4 text-[14px] font-medium text-[#061526] transition hover:border-[#061526]"
                >
                  <ArrowLeftIcon />
                  Back
                </button>
              </div>

              <TopBrand />

              <header className="mb-8">
                <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-[#061526] sm:text-[46px]">
                  {title}
                </h2>
                <div className="mt-3 text-[16px] leading-[1.45] text-[#7f7b85]">{description}</div>
              </header>

              <form onSubmit={handleVerify}>
                <div
                  className="mb-10 flex items-center justify-between gap-3 sm:gap-4"
                  onPaste={handlePaste}
                >
                  {digits.map((digit, index) => (
                    <OtpInput
                      key={index}
                      value={digit}
                      onChange={(event) => handleDigitChange(index, event)}
                      onKeyDown={(event) => handleKeyDown(index, event)}
                      onFocus={(event) => event.target.select()}
                      inputRef={(element) => {
                        inputRefs.current[index] = element;
                      }}
                      autoFocus={index === 0}
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  className="flex h-[52px] w-full items-center justify-center rounded-lg bg-[#061526] text-[17px] font-semibold text-white transition hover:bg-[#0b1c32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061526]"
                >
                  Verify Code
                </button>
              </form>

              <div className="mt-8 text-center text-[13px] text-[#8d8b93]">
                Didn&apos;t receive code?{' '}
                <button
                  type="button"
                  onClick={handleResend}
                  className="font-semibold text-[#061526] underline underline-offset-2"
                >
                  Resend
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
