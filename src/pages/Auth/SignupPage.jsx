import React, { useState } from 'react';
import { BrandPanel } from '../../components/Auth/BrandPanel';
import { ScalesIcon } from '../../components/Icons/ScalesIcon';
import {
  mockSignupInstitutions,
  mockSignupLevelsOfStudy,
  mockSignupPrograms,
} from '../../mockData/index';

const baseInputClass =
  'h-12 w-full rounded-xl border border-transparent bg-[#fbf7f7] px-4 text-[14px] text-[#0b1627] shadow-[0_2px_10px_rgba(11,22,39,0.03)] outline-none placeholder:text-[#9b98a1] focus:border-[#061526] focus:bg-white';

const fieldLabelClass = 'mb-2 block text-[10px] font-medium text-[#8d8b93]';

const EmailIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
    <path d="M3.75 7.5L10.95 12.54C11.59 12.99 12.41 12.99 13.05 12.54L20.25 7.5" />
    <rect x="3.75" y="5.25" width="16.5" height="13.5" rx="1.75" />
  </svg>
);

const LockIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
    <rect x="5" y="10.5" width="14" height="10" rx="1.75" />
    <path d="M8 10.5V8.25C8 6.04 9.79 4.25 12 4.25C14.21 4.25 16 6.04 16 8.25V10.5" />
  </svg>
);

const UserIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
    <circle cx="12" cy="8" r="3.25" />
    <path d="M5.75 19.5C6.64 16.83 9.05 15 12 15C14.95 15 17.36 16.83 18.25 19.5" />
  </svg>
);

const ChevronIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 10L12 15L17 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12.5L9.25 16.75L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
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

const StepItem = ({ active, complete, number, label, onClick }) => {
  const isInteractive = typeof onClick === 'function';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!isInteractive}
      className={`flex flex-col items-center gap-3 ${
        isInteractive ? 'cursor-pointer' : 'cursor-default'
      }`}
      aria-current={active ? 'step' : undefined}
    >
      <span
        className={`flex h-[44px] w-[44px] items-center justify-center rounded-full text-[18px] font-semibold transition-colors sm:h-[50px] sm:w-[50px] sm:text-[20px] ${
          active || complete
            ? 'bg-[#061526] text-white'
            : 'bg-[#f7f3f3] text-[#061526]'
        }`}
      >
        {complete ? <CheckIcon /> : number}
      </span>
      <span className="text-center text-[14px] font-medium text-[#111827]">{label}</span>
    </button>
  );
};

const InputField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  icon,
  autoComplete,
}) => (
  <label className="block">
    <span className={fieldLabelClass}>{label}</span>
    <div className="relative">
      <input
        className={`${baseInputClass} ${icon ? 'pr-12' : ''}`}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        autoComplete={autoComplete}
      />
      {icon ? (
        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#061526]">
          {icon}
        </span>
      ) : null}
    </div>
  </label>
);

const SelectField = ({ label, name, value, onChange, options, placeholder }) => (
  <label className="block">
    <span className={fieldLabelClass}>{label}</span>
    <div className="relative">
      <select
        className={`${baseInputClass} appearance-none pr-12 ${value ? '' : 'text-[#9b98a1]'}`}
        name={name}
        value={value}
        onChange={onChange}
        required
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#061526]">
        <ChevronIcon />
      </span>
    </div>
  </label>
);

export const SignupPage = ({
  onSignupComplete,
  onNavigateToLogin,
  onNavigateToGoogleLogin,
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    basicPassword: '',
    fullName: '',
    institution: '',
    studentId: '',
    levelOfStudy: '',
    program: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleContinue = (event) => {
    event.preventDefault();
    setStep(2);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    console.log('Student signup data:', formData);
    onSignupComplete?.(formData);
  };

  const progressWidth = step === 1 ? '50%' : '100%';

  return (
    <div className="min-h-screen bg-white text-[#061526]">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <BrandPanel />

        <main className="flex flex-1 justify-center bg-white px-5 py-8 sm:px-8 lg:basis-[58.5%] lg:px-16 lg:py-10">
          <div className="flex w-full max-w-[540px] flex-col">
            <TopBrand />

            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between gap-4 text-[14px] text-[#111827]">
                <p className="font-medium">Step {step} of 2</p>
                <p className="font-semibold">Academic Information</p>
              </div>

              <div className="h-[11px] overflow-hidden rounded-full bg-[#eef1f4]">
                <div
                  className="h-full rounded-full bg-[#061526] transition-all duration-300 ease-out"
                  style={{ width: progressWidth }}
                />
              </div>
            </div>

            <div className="mb-8 flex items-start justify-between gap-6">
              <StepItem active={step === 1} complete={step === 2} number="1" label="Basic Info" onClick={step === 2 ? () => setStep(1) : undefined} />
              <StepItem active={step === 2} complete={false} number="2" label="Academic Info" />
            </div>

            {step === 1 ? (
              <section>
                <header className="mb-8">
                  <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-[#061526] sm:text-[46px]">
                    Basic Information
                  </h2>
                  <p className="mt-2 text-[16px] text-[#8d8b93]">Fill in your personal details</p>
                </header>

                <form onSubmit={handleContinue} className="space-y-5">
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    icon={<EmailIcon />}
                    autoComplete="email"
                  />
                  <InputField
                    label="password"
                    name="basicPassword"
                    type="password"
                    value={formData.basicPassword}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    icon={<LockIcon />}
                    autoComplete="new-password"
                  />
                  <InputField
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                    icon={<UserIcon />}
                    autoComplete="name"
                  />

                  <button
                    type="submit"
                    className="mt-6 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#061526] text-[17px] font-semibold text-white transition hover:bg-[#0b1c32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061526]"
                  >
                    Sign Up
                  </button>
                </form>

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-[#eef1f4]" />
                  <span className="text-[12px] font-medium text-[#8d8b93]">OR</span>
                  <div className="h-[1px] flex-1 bg-[#eef1f4]" />
                </div>

                <button
                  type="button"
                  onClick={onNavigateToGoogleLogin}
                  className="mt-6 flex h-[52px] w-full items-center justify-center gap-3 rounded-xl border border-[#eef1f4] bg-white text-[15px] font-semibold text-[#061526] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition hover:bg-[#fbf7f7]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </button>
              </section>
            ) : (
              <section>
                <header className="mb-8">
                  <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-[#061526] sm:text-[46px]">
                    Academic Information
                  </h2>
                  <p className="mt-2 text-[16px] text-[#8d8b93]">Fill in your academic details</p>
                </header>

                <form onSubmit={handleSignup} className="space-y-5">
                  <SelectField
                    label="NAME OF INSTITUTION *"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Enter your institution name"
                    options={mockSignupInstitutions}
                  />
                  <InputField
                    label="STUDENT ID"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    placeholder="Enter your student ID"
                    autoComplete="off"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <SelectField
                      label="LEVEL OF STUDY"
                      name="levelOfStudy"
                      value={formData.levelOfStudy}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      options={mockSignupLevelsOfStudy}
                    />
                    <SelectField
                      label="PROGRAM"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      options={mockSignupPrograms}
                    />
                  </div>

                  <InputField
                    label="PASSWORD"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    icon={<LockIcon />}
                    autoComplete="new-password"
                  />
                  <InputField
                    label="CONFIRM PASSWORD"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="confirm your password"
                    icon={<LockIcon />}
                    autoComplete="new-password"
                  />

                  <label className="flex items-start gap-3 pt-1 text-[11px] leading-[1.45] text-[#8d8b93]">
                    <input
                      type="checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleChange}
                      required
                      className="mt-[2px] h-4 w-4 rounded-[3px] border border-[#b7bcc7] accent-[#061526]"
                    />
                    <span>
                      By you clicking Sign Up, you agree to our{' '}
                      <a href="/" onClick={(event) => event.preventDefault()} className="font-medium text-[#f08a4b]">
                        Terms &amp; Conditions
                      </a>{' '}
                      and{' '}
                      <a href="/" onClick={(event) => event.preventDefault()} className="font-medium text-[#f08a4b]">
                        Privacy Policy.
                      </a>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="mt-2 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#061526] text-[17px] font-semibold text-white transition hover:bg-[#0b1c32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061526]"
                  >
                    Sign Up
                  </button>
                </form>
              </section>
            )}

            <div className="mt-6 pb-4 text-center text-[13px] text-[#8d8b93]">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onNavigateToLogin}
                className="font-medium text-[#061526] underline underline-offset-2"
              >
                Log In
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
