import React, { useState } from 'react';
import { BrandPanel } from '../../components/Auth/BrandPanel';
import { ScalesIcon } from '../../components/Icons/ScalesIcon';

const inputClass =
  'h-12 w-full rounded-xl border border-transparent bg-[#fbf7f7] px-4 pr-12 text-[14px] text-[#0b1627] shadow-[0_2px_10px_rgba(11,22,39,0.03)] outline-none placeholder:text-[#9b98a1] focus:border-[#061526] focus:bg-white';

const labelClass = 'mb-2 block text-[10px] font-medium text-[#8d8b93]';

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

const TopBrand = () => (
  <div className="mb-8 flex flex-col items-center">
    <ScalesIcon className="h-12 w-12 text-[#061526]" />
    <div className="mt-1 text-center text-[#061526]">
      <p className="text-[14px] font-semibold leading-none">LexGo</p>
      <p className="mt-1 text-[9px] leading-none">Law on the Go</p>
    </div>
  </div>
);

const InputField = ({ label, name, type, value, onChange, placeholder, icon, autoComplete }) => (
  <label className="block">
    <span className={labelClass}>{label}</span>
    <div className="relative">
      <input
        className={inputClass}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        autoComplete={autoComplete}
      />
      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#061526]">
        {icon}
      </span>
    </div>
  </label>
);

export const LoginPage = ({
  onLoginComplete,
  onNavigateToSignup,
  onNavigateToForgotPassword,
  onNavigateToGoogleLogin,
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Login data:', formData);
    
    // Derive a name from the email for the mock experience
    const derivedName = formData.email.split('@')[0]
      .split('.')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

    onLoginComplete({ 
      fullName: derivedName || 'LexGo Student',
      email: formData.email 
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#061526]">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <BrandPanel />

        <main className="flex flex-1 items-center justify-center bg-white px-5 py-8 sm:px-8 lg:basis-[58.5%] lg:px-16 lg:py-10">
          <div className="w-full max-w-[540px]">
            <TopBrand />

            <div className="mx-auto max-w-[396px]">
              <header className="mb-8">
                <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-[#061526] sm:text-[46px]">
                  Welcome Back!
                </h2>
                <p className="mt-2 text-[16px] text-[#8d8b93]">Log In to Unlock the Experience</p>
              </header>

              <form onSubmit={handleLogin} className="space-y-5">
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

                <div>
                  <InputField
                    label="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    icon={<LockIcon />}
                    autoComplete="current-password"
                  />
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={onNavigateToForgotPassword}
                      className="text-[13px] font-medium text-[#061526] underline underline-offset-2"
                    >
                      Forgot Password
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-3 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#061526] text-[17px] font-semibold text-white transition hover:bg-[#0b1c32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061526]"
                >
                  Log In
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

              <div className="mt-6 text-center text-[13px] text-[#8d8b93]">
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  onClick={onNavigateToSignup}
                  className="font-medium text-[#061526] underline underline-offset-2"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
