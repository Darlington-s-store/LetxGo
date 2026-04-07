import React from 'react';
import { BrandPanel } from '../../components/Auth/BrandPanel';
import { ScalesIcon } from '../../components/Icons/ScalesIcon';

export const GoogleLoginPage = ({ onLoginComplete, onNavigateToLogin }) => {
  const accounts = [
    { name: 'Elkana Wiseman', email: 'ew@gmail.com', avatar: null }
  ];

  return (
    <div className="min-h-screen bg-white text-[#061526]">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <BrandPanel />

        <main className="flex flex-1 items-center justify-center bg-white px-5 py-8 sm:px-8 lg:basis-[58.5%] lg:px-16 lg:py-10">
          <div className="flex w-full max-w-[540px] flex-col items-center">
            {/* Top Branding */}
            <div className="mb-12 flex flex-col items-center">
              <ScalesIcon className="h-14 w-14 text-[#061526]" />
              <div className="mt-2 text-center text-[#061526]">
                <p className="text-[22px] font-bold leading-none tracking-tight">LexGo</p>
                <p className="mt-1 text-[11px] leading-none tracking-wide text-[#8d8b93]">Law on the Go</p>
              </div>
            </div>

            <div className="w-full max-w-[420px]">
              <h2 className="mb-8 text-center text-[26px] font-bold tracking-tight text-[#061526] underline decoration-2 underline-offset-8">
                Continue with Google!
              </h2>

              <div className="overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                {/* Google Sub-Header */}
                <div className="flex items-center gap-3 border-b border-[#e5e7eb] px-6 py-4">
                  <div className="flex h-6 w-6 items-center justify-center">
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
                  </div>
                  <span className="text-[15px] font-medium text-[#5f6368]">Sign in with Google</span>
                </div>

                <div className="p-8">
                  <header className="mb-8 text-center">
                    <h3 className="text-[20px] font-bold text-[#061526] underline decoration-1 underline-offset-4">
                      Choose an account
                    </h3>
                    <p className="mt-1.5 text-[15px] font-medium text-[#111827]">
                      to continue to - <span className="underline underline-offset-2">LexGo</span>
                    </p>
                  </header>

                  <div className="space-y-2">
                    {accounts.map((acc, index) => (
                      <button
                        key={index}
                        onClick={() => onLoginComplete({ fullName: acc.name, email: acc.email })}
                        className="flex w-full items-center gap-4 rounded-lg border border-transparent p-3 text-left transition-all hover:bg-[#f8fafc] hover:border-[#e2e8f0]"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#061526] text-[15px] font-bold text-white">
                          {acc.name.charAt(0)}
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <p className="truncate text-[15px] font-semibold text-[#061526]">{acc.name}</p>
                          <p className="truncate text-[13px] text-[#8d8b93]">{acc.email}</p>
                        </div>
                      </button>
                    ))}

                    <div className="my-2 h-[1px] bg-[#e5e7eb]" />

                    <button className="flex w-full items-center gap-4 rounded-lg p-3 text-left transition-all hover:bg-[#f8fafc]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#e5e7eb] bg-white">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5f6368" strokeWidth="2">
                            <circle cx="12" cy="7" r="4" />
                            <path d="M5.5 21C6.5 17.5 9 15 12 15C15 15 17.5 17.5 18.5 21" />
                         </svg>
                      </div>
                      <span className="text-[15px] font-semibold text-[#061526] underline underline-offset-4Decoration">
                        Use another account
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Disclaimers */}
              <div className="mt-8 text-center text-[11px] leading-relaxed text-[#8d8b93]">
                <p>
                  To continue, Google will share your name, email address, language
                  preference, and profile picture with Company. Before using this app, you can
                  review Company's{' '}
                  <button className="font-semibold text-[#061526] underline decoration-1 underline-offset-2 hover:text-black">
                    privacy policy
                  </button>{' '}
                  and{' '}
                  <button className="font-semibold text-[#061526] underline decoration-1 underline-offset-2 hover:text-black">
                    terms of service
                  </button>.
                </p>
              </div>

              {/* Back to regular login */}
              <div className="mt-6 flex justify-center">
                 <button 
                  onClick={onNavigateToLogin}
                  className="text-[13px] font-medium text-[#8d8b93] underline underline-offset-4 hover:text-[#061526]"
                 >
                   Back to regular Log In
                 </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
