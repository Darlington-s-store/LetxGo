# LexGo Architecture & System Design

## System Architecture

### High-Level Application Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    LexGo Application                         │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              React Application (React 19)             │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │                                                        │  │
│  │  ┌────────────────────────────────────────────┐      │  │
│  │  │          App.jsx (Main Component)          │      │  │
│  │  ├────────────────────────────────────────────┤      │  │
│  │  │         AuthRouter (State Manager)         │      │  │
│  │  ├────────────────────────────────────────────┤      │  │
│  │  │                                            │      │  │
│  │  │   ┌─────────────────────────────────┐    │      │  │
│  │  │   │  Authentication Pages            │    │      │  │
│  │  │   ├─────────────────────────────────┤    │      │  │
│  │  │   │ • RoleSelectionPage              │    │      │  │
│  │  │   │ • SignupStep1Page                │    │      │  │
│  │  │   │ • SignupStep2Page                │    │      │  │
│  │  │   │ • EmailVerificationPageNew       │    │      │  │
│  │  │   │ • PhoneVerificationPageNew       │    │      │  │
│  │  │   │ • LoginPageNew                   │    │      │  │
│  │  │   └─────────────────────────────────┘    │      │  │
│  │  │                                            │      │  │
│  │  │   ┌─────────────────────────────────┐    │      │  │
│  │  │   │  Dashboard Pages                 │    │      │  │
│  │  │   ├─────────────────────────────────┤    │      │  │
│  │  │   │ • DashboardPageNew               │    │      │  │
│  │  │   │   - Overview Section             │    │      │  │
│  │  │   │   - Cases Section                │    │      │  │
│  │  │   │   - Courses Section              │    │      │  │
│  │  │   │   - Quiz Section                 │    │      │  │
│  │  │   │   - Notes Section                │    │      │  │
│  │  │   │   - Help Section                 │    │      │  │
│  │  │   └─────────────────────────────────┘    │      │  │
│  │  │                                            │      │  │
│  │  └────────────────────────────────────────────┘      │  │
│  │                                                        │  │
│  │  ┌────────────────────────────────────────────┐      │  │
│  │  │          Shared Components                 │      │  │
│  │  ├────────────────────────────────────────────┤      │  │
│  │  │ • Button (Dark Navy Styling)               │      │  │
│  │  │ • Input (Form Validation)                  │      │  │
│  │  │ • Logo (LexGo Branding)                    │      │  │
│  │  │ • BrandPanel (Left Sidebar)                │      │  │
│  │  └────────────────────────────────────────────┘      │  │
│  │                                                        │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌────────────────────────────────────────────┐             │
│  │       Styling Layer (Tailwind CSS)         │             │
│  ├────────────────────────────────────────────┤             │
│  │ • Color System                             │             │
│  │ • Typography Scale                         │             │
│  │ • Spacing System                           │             │
│  │ • Responsive Breakpoints                   │             │
│  └────────────────────────────────────────────┘             │
│                                                               │
│  ┌────────────────────────────────────────────┐             │
│  │      Data Persistence Layer                │             │
│  ├────────────────────────────────────────────┤             │
│  │ • localStorage Management                  │             │
│  │ • User Profile Storage                     │             │
│  │ • Session Management                       │             │
│  └────────────────────────────────────────────┘             │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

### Authentication Flow Tree

```
App.jsx
└── AuthRouter
    ├── RoleSelectionPage
    │   ├── Logo
    │   └── BrandPanel
    │
    ├── SignupStep1Page
    │   ├── Logo
    │   ├── BrandPanel
    │   ├── Input (Email)
    │   ├── Input (Password)
    │   ├── Input (Full Name)
    │   └── Button (Sign Up)
    │
    ├── SignupStep2Page
    │   ├── Logo
    │   ├── BrandPanel
    │   ├── Input (Institution)
    │   ├── Input (Student ID)
    │   ├── Select (Level of Study)
    │   ├── Select (Program)
    │   ├── Input (Password)
    │   ├── Input (Confirm Password)
    │   └── Button (Sign Up)
    │
    ├── EmailVerificationPageNew
    │   ├── Logo
    │   ├── BrandPanel
    │   ├── OTP Input (4 fields)
    │   └── Button (Verify Code)
    │
    ├── PhoneVerificationPageNew
    │   ├── Logo
    │   ├── BrandPanel
    │   ├── OTP Input (4 fields)
    │   └── Button (Verify Code)
    │
    ├── LoginPageNew
    │   ├── Logo
    │   ├── BrandPanel
    │   ├── Input (Email)
    │   ├── Input (Password)
    │   ├── Link (Forgot Password)
    │   └── Button (Log In)
    │
    └── DashboardPageNew
        ├── Sidebar
        │   └── Navigation Menu Items
        ├── TopBar
        │   ├── Search Input
        │   ├── Notification Bell
        │   ├── Settings Icon
        │   └── User Avatar
        └── Content Area
            ├── Overview Section
            │   ├── Welcome Card
            │   ├── Profile Cards (4)
            │   └── Stats Cards (3)
            ├── Cases Section
            ├── Courses Section
            ├── Quiz Section
            ├── Notes Section
            └── Help Section
```

## State Management Flow

### Authentication State Machine

```
┌─────────────────────────────────────────────────────────┐
│                    Initial State                         │
│              (role-selection)                            │
└──────────────────────┬──────────────────────────────────┘
                       │
                    onRoleSelect()
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│                 Signup Step 1                            │
│           (signup-step1)                                 │
└──────────────────────┬──────────────────────────────────┘
                       │
                    onNext()
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│                 Signup Step 2                            │
│           (signup-step2)                                 │
└──────────────────────┬──────────────────────────────────┘
                       │
                onSignupComplete()
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│            Email Verification                           │
│        (email-verification)                             │
└──────────────────────┬──────────────────────────────────┘
                       │
                  onVerifyCode()
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│                   Login                                 │
│              (login)                                     │
└──────────────────────┬──────────────────────────────────┘
                       │
                  onLoginComplete()
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│                 Dashboard                               │
│             (dashboard)                                 │
└──────────────────────┬──────────────────────────────────┘
                       │
                    onLogout()
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│              Back to Role Selection                      │
│              (role-selection)                            │
└─────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

### User Registration Data Flow

```
┌──────────────────────────────────────┐
│     Signup Step 1                     │
│  (Email, Password, Full Name)         │
└──────────────┬───────────────────────┘
               │
               ▼
        Store in Memory
     ┌─────────────────┐
     │  step1Data      │
     │  ├─ email       │
     │  ├─ password    │
     │  └─ fullName    │
     └────────┬────────┘
              │
              ▼
┌──────────────────────────────────────┐
│     Signup Step 2                     │
│  (Institution, ID, Level, Program)    │
└──────────────┬───────────────────────┘
               │
               ▼
   Merge Data + Step 2 Fields
     ┌────────────────────┐
     │  completeProfile   │
     │  ├─ email          │
     │  ├─ password       │
     │  ├─ fullName       │
     │  ├─ institution    │
     │  ├─ studentId      │
     │  ├─ levelOfStudy   │
     │  ├─ program        │
     │  └─ role           │
     └────────┬───────────┘
              │
              ▼
      Save to localStorage
     ┌────────────────────┐
     │   lexgoStorage     │
     │ .saveUserProfile() │
     └─────────┬──────────┘
               │
               ▼
      User Profile Persisted
```

## Data Persistence Architecture

```
┌──────────────────────────────────────────────────────────┐
│              Browser localStorage                         │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  ┌────────────────────────────────────────────────────┐  │
│  │           lexgo_auth_page                          │  │
│  │  (Current authentication state)                    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌────────────────────────────────────────────────────┐  │
│  │           lexgo_user_role                          │  │
│  │  (Selected role: student, lecturer, law-aspirant) │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌────────────────────────────────────────────────────┐  │
│  │           lexgo_auth_email                         │  │
│  │  (Verification email for OTP)                      │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌────────────────────────────────────────────────────┐  │
│  │           lexgo_user_profile                       │  │
│  │  {                                                 │  │
│  │    email,                                          │  │
│  │    fullName,                                       │  │
│  │    password,                                       │  │
│  │    institution,                                    │  │
│  │    studentId,                                      │  │
│  │    levelOfStudy,                                   │  │
│  │    program,                                        │  │
│  │    role                                            │  │
│  │  }                                                 │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

## Authentication Security Flow

```
User Input
    │
    ▼
Client-Side Validation
    ├─ Required fields check
    ├─ Email format validation
    ├─ Password length check
    └─ Confirmation matching
    │
    ▼
Validation Success?
    ├─ NO  → Show Error Message
    │
    ├─ YES ▼
    │   Show Loading State
    │       │
    │       ▼
    │   Simulate API Call
    │   (for demo)
    │       │
    │       ▼
    │   Store Data
    │   (localStorage)
    │       │
    │       ▼
    │   Update State
    │   (navigate)
    │       │
    │       ▼
    └─ Success Feedback
```

## Responsive Design Breakpoints

```
┌─────────────────────────────────────────────────────────┐
│                  Screen Sizes                            │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  Mobile: < 640px                                        │
│  ┌──────────────────────────────────┐                  │
│  │  Full-width layout               │                  │
│  │  Single column                   │                  │
│  │  Hamburger menu                  │                  │
│  │  Stacked form fields             │                  │
│  │  Touch-friendly buttons          │                  │
│  └──────────────────────────────────┘                  │
│                                                           │
│  Tablet: 640px - 1024px                                │
│  ┌──────────────────────────────────┐                  │
│  │  Two-column layout               │                  │
│  │  Compact sidebar                 │                  │
│  │  Side-by-side form fields        │                  │
│  │  Medium touch targets            │                  │
│  └──────────────────────────────────┘                  │
│                                                           │
│  Desktop: > 1024px                                      │
│  ┌──────────────────────────────────┐                  │
│  │  Full layout                     │                  │
│  │  Visible sidebar (256px)         │                  │
│  │  Multi-column grids              │                  │
│  │  Organized content sections      │                  │
│  └──────────────────────────────────┘                  │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

## Component Communication

```
┌──────────────────────────────────────────────────────┐
│                   AuthRouter                         │
│            (Global State Manager)                    │
├──────────────────────────────────────────────────────┤
│                                                       │
│  State:                                              │
│  • currentPage (string)                              │
│  • userRole (string)                                 │
│  • step1Data (object)                                │
│  • verificationEmail (string)                        │
│                                                       │
│  Handlers:                                           │
│  • handleRoleSelect()                                │
│  • handleSignupStep1Complete()                       │
│  • handleSignupStep2Complete()                       │
│  • handleEmailVerificationComplete()                 │
│  • handlePhoneVerificationComplete()                 │
│  • handleLoginComplete()                             │
│  • handleLogout()                                    │
│                                                       │
└──────────────┬───────────────────────────────────────┘
               │
        Props Distribution
               │
    ┌──────────┼──────────┐
    │          │          │
    ▼          ▼          ▼
Signup      Email Veri   Login
Pages       Pages        Page
    │          │          │
    └──────────┴──────────┘
         │
         ▼
    Pass Data Back
    (via callbacks)
         │
         ▼
   Update AuthRouter
   (trigger re-render)
```

## Directory Structure

```
LetxGo/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── AuthRouter.jsx          [Rewritten]
│   │   │   ├── Button.jsx              [Updated]
│   │   │   ├── Input.jsx               [Updated]
│   │   │   ├── Logo.jsx                [Updated]
│   │   │   ├── BrandPanel.jsx          [Verified]
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── ForgotPasswordPage.jsx
│   │   │   └── index.js
│   │   └── Icons/
│   │       └── ScalesIcon.jsx
│   │
│   ├── pages/
│   │   ├── Auth/
│   │   │   ├── RoleSelectionPage.jsx        [NEW]
│   │   │   ├── SignupStep1Page.jsx          [NEW]
│   │   │   ├── SignupStep2Page.jsx          [NEW]
│   │   │   ├── EmailVerificationPageNew.jsx [NEW]
│   │   │   ├── PhoneVerificationPageNew.jsx [NEW]
│   │   │   ├── LoginPageNew.jsx             [NEW]
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignupPage.jsx
│   │   │   ├── EmailVerificationPage.jsx
│   │   │   ├── PhoneVerificationPage.jsx
│   │   │   ├── ForgotPasswordPage.jsx
│   │   │   └── ... (other pages)
│   │   │
│   │   ├── Student/
│   │   │   ├── DashboardPageNew.jsx         [NEW]
│   │   │   ├── DashboardPage.jsx
│   │   │   └── ... (other pages)
│   │   │
│   │   ├── Onboarding/
│   │   │   └── OnboardingPage.jsx
│   │   │
│   │   └── index.js
│   │
│   ├── utils/
│   │   ├── storage.js                  [Verified]
│   │   └── ... (other utilities)
│   │
│   ├── mockData/
│   │   ├── index.js
│   │   ├── authMockData.js
│   │   └── studentMockData.js
│   │
│   ├── App.jsx                         [Verified]
│   ├── App.css
│   ├── index.css                       [Updated]
│   └── main.jsx                        [Verified]
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── Documentation/
│   ├── README_NEW.md                   [NEW]
│   ├── QUICK_START.md                  [NEW]
│   ├── IMPLEMENTATION_SUMMARY.md       [NEW]
│   ├── UI_UX_IMPLEMENTATION.md         [NEW]
│   ├── DESIGN_REFERENCE.md             [NEW]
│   ├── ARCHITECTURE.md                 [NEW - This file]
│   ├── CHANGELOG.md                    [NEW]
│   └── PROJECT_COMPLETION_SUMMARY.md   [NEW]
│
├── package.json                        [Updated]
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── eslint.config.js
└── index.html
```

## Build & Deployment Pipeline

```
Development
    │
    ├─ Source Code
    │   └─ src/
    │
    ├─ Dependencies
    │   └─ node_modules/
    │
    ├─ Assets
    │   └─ public/
    │
    └─ Configuration
        └─ vite.config.js
            tailwind.config.js
            tsconfig.json
            package.json
                │
                ▼
        npm run build
                │
                ├─ Transpile JSX
                ├─ Bundle code
                ├─ Optimize CSS
                ├─ Minify assets
                └─ Generate source maps
                │
                ▼
            Production Build
                │
                ├─ dist/
                │   ├─ index.html
                │   ├─ assets/
                │   │   ├─ main.js (bundled)
                │   │   ├─ style.css (compiled)
                │   │   └─ (optimized assets)
                │   └─ manifest.json
                │
                ▼
        Deploy to Hosting
            │
            ├─ Vercel
            ├─ Netlify
            ├─ GitHub Pages
            ├─ AWS S3
            └─ Custom Server
```

## Performance Optimization Strategy

```
┌─────────────────────────────────────────────────────┐
│         Performance Optimization                     │
├─────────────────────────────────────────────────────┤
│                                                       │
│  Code Splitting                                      │
│  └─ Route-based lazy loading (future)               │
│                                                       │
│  Bundle Optimization                                │
│  ├─ Tailwind CSS purging                            │
│  ├─ Tree shaking                                    │
│  └─ Minification                                    │
│                                                       │
│  Asset Optimization                                 │
│  ├─ Image compression                               │
│  ├─ SVG optimization                                │
│  └─ Font subsetting                                 │
│                                                       │
│  Runtime Performance                                │
│  ├─ React.memo for components (future)              │
│  ├─ useCallback for handlers (future)               │
│  └─ Suspense boundaries (future)                    │
│                                                       │
│  Network Performance                                │
│  ├─ GZIP compression                                │
│  ├─ Browser caching                                 │
│  └─ CDN delivery                                    │
│                                                       │
└─────────────────────────────────────────────────────┘
```

## Accessibility Architecture

```
┌──────────────────────────────────────────────────────┐
│            Accessibility Layer                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  Semantic HTML                                       │
│  ├─ Proper heading hierarchy                         │
│  ├─ Landmark regions                                 │
│  └─ Form associations                                │
│                                                       │
│  ARIA Implementation                                 │
│  ├─ aria-labels for icons                            │
│  ├─ role attributes                                  │
│  ├─ aria-describedby for errors                      │
│  └─ aria-live for notifications                      │
│                                                       │
│  Keyboard Navigation                                 │
│  ├─ Tab order management                             │
│  ├─ Focus management                                 │
│  ├─ Escape key handling                              │
│  └─ Enter key submission                             │
│                                                       │
│  Visual Design                                       │
│  ├─ Color contrast (WCAG AA)                         │
│  ├─ Focus indicators                                 │
│  └─ Readable font sizes                              │
│                                                       │
│  Motion & Animation                                  │
│  ├─ Respect prefers-reduced-motion                   │
│  └─ Transition durations                             │
│                                                       │
└──────────────────────────────────────────────────────┘
```

---

This architecture document provides a comprehensive view of how all components, data flows, and systems work together to create the LexGo authentication and dashboard application.
