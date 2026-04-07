# LexGo - Quick Start Guide

## Project Setup

### Installation
```bash
# Install dependencies
npm install

# or with yarn
yarn install

# or with pnpm
pnpm install
```

### Development Server
```bash
# Start the development server
npm run dev

# or with yarn
yarn dev

# or with pnpm
pnpm dev
```

The application will be available at `http://localhost:5173`

### Building for Production
```bash
npm run build

# Preview production build
npm run preview
```

## Authentication Flow

### User Journey
1. **Start** - Application loads with role selection screen
2. **Select Role** - Choose Student, Lecturer, or Law Aspirant
3. **Sign Up (Step 1)** - Enter email, password, and full name
4. **Sign Up (Step 2)** - Enter institution, student ID, level of study, and program
5. **Email Verification** - Enter 4-digit OTP code
6. **Login** - Use email and password to log in
7. **Dashboard** - Access main application features

### Demo Credentials
The application currently uses localStorage for demonstration. Any email/password combination will work:
- Email: any valid email format
- Password: any password with 6+ characters
- All signup data is stored locally

## Dashboard Features

### Navigation
- **Overview** - User profile and quick statistics
- **Cases** - Case studies and legal documents (coming soon)
- **Courses** - Learning materials and courses (coming soon)
- **Quiz** - Practice questions and assessments (coming soon)
- **Notes** - Personal notes and annotations (coming soon)
- **Help Center** - FAQ and support articles (coming soon)

### User Profile Display
The dashboard displays:
- User's email address
- Institution name
- Student ID
- Level of study
- Program/field of study
- User role (Student/Lecturer/Law Aspirant)

### Sidebar Navigation
- Click hamburger menu to toggle sidebar
- Click on navigation items to switch sections
- Logout button with confirmation

## File Structure Overview

```
LetxGo/
├── src/
│   ├── components/Auth/          # Authentication components
│   │   ├── AuthRouter.jsx        # Main auth flow controller
│   │   ├── Button.jsx            # Reusable button component
│   │   ├── Input.jsx             # Reusable input component
│   │   ├── Logo.jsx              # LexGo logo component
│   │   └── BrandPanel.jsx        # Left sidebar branding
│   ├── pages/Auth/               # Authentication pages
│   │   ├── RoleSelectionPage.jsx
│   │   ├── SignupStep1Page.jsx
│   │   ├── SignupStep2Page.jsx
│   │   ├── EmailVerificationPageNew.jsx
│   │   ├── PhoneVerificationPageNew.jsx
│   │   └── LoginPageNew.jsx
│   ├── pages/Student/            # Dashboard pages
│   │   ├── DashboardPageNew.jsx
│   │   └── ... (other features)
│   ├── utils/
│   │   └── storage.js            # Local storage management
│   ├── App.jsx                   # Main app component
│   ├── index.css                 # Global styles
│   └── main.jsx                  # React entry point
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Tailwind CSS configuration
├── vite.config.js                # Vite configuration
├── IMPLEMENTATION_SUMMARY.md     # Detailed implementation guide
└── QUICK_START.md               # This file
```

## Design System

### Colors
- **Primary Actions**: Gray-900 (#111827) - Dark navy buttons
- **Secondary**: Gray-300 to Gray-600 - Borders and text
- **Backgrounds**: White (#FFFFFF) main, Light gray (#F3F4F6) secondary
- **Brand**: Dark Navy (#061526) - Sidebar and brand elements

### Typography
- **Headlines**: Bold, 24-32px
- **Body Text**: Regular, 14-16px
- **Labels**: Semibold, uppercase, smaller size

### Components
- Form inputs with icon support
- OTP code entry fields (4 digits)
- Dark navy primary buttons
- Collapsible sidebar navigation
- Responsive grid layouts

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the actual URL.

### Tailwind Styles Not Loading
Ensure `index.css` is imported in `main.jsx`. The file should be in the root of `src/`.

### Icons Not Displaying
Icons come from `lucide-react`. Ensure the package is installed:
```bash
npm install lucide-react
```

### Data Not Persisting
Data is stored in localStorage. Open browser DevTools (F12) → Application → Local Storage to view stored data. Data persists across browser refreshes but is cleared on logout.

## Development Tips

### Adding New Pages
1. Create component in appropriate `/pages/` directory
2. Add to `AuthRouter.jsx` for authentication pages
3. Import and render in the router switch statement

### Styling
- Use Tailwind CSS classes (no custom CSS needed)
- Reference the color system above
- Use responsive prefixes: `md:`, `lg:`, `xl:`, etc.

### Form Validation
- Validation happens before submission
- Display errors below input fields
- Show loading state during submission

### State Management
- Use React hooks for component state
- `lexgoStorage` for persistent data
- `AuthRouter` for global auth state

## Building for Deployment

### Production Build
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Vercel
```bash
# If you have Vercel CLI installed
vercel deploy

# or push to GitHub and connect to Vercel
```

## Support & Documentation

For detailed implementation information, see `IMPLEMENTATION_SUMMARY.md`.

## Notes

- The application is fully responsive and works on mobile, tablet, and desktop
- All data is stored locally using browser localStorage (demo only)
- For production, integrate with a backend API and database
- All form validations are client-side; implement server-side validation for production
