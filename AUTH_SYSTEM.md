# LexGo Authentication System

A complete web authentication system for the LexGo legal education platform. The system is built with React and Tailwind CSS, supporting desktop/web only (no mobile UI).

## Features

✅ **Login Screen**
- Email and password authentication
- Show/hide password toggle
- Forgot password link
- Validation and error messages
- Sign up link for new users

✅ **Sign Up with Role Selection**
- Three role options:
  - Student - Access legal resources and study materials
  - Lecturer - Teach and create courses for students
  - Law Aspirant - Prepare for legal practice and exams
- Step-based form:
  1. Role selection
  2. Account creation with full name, email, password
- Password strength requirements:
  - Minimum 8 characters
  - Uppercase, lowercase, and numbers
- Terms & conditions agreement
- Back navigation between steps

✅ **Forgot Password Recovery**
- Three-step password reset flow:
  1. Enter email address
  2. Verify with OTP (6-digit code)
  3. Create new password
- Resend OTP button with cooldown timer
- Validation at each step

✅ **UI Components**
- Logo component with LexGo branding
- Input fields with labels, validation, and error messages
- Primary and secondary buttons with loading states
- Authentication layout with background pattern
- Form validation and error handling

## Project Structure

```
src/
├── components/
│   └── Auth/
│       ├── Logo.jsx              # LexGo logo component
│       ├── Input.jsx             # Reusable input field
│       ├── Button.jsx            # Button component with variants
│       ├── AuthLayout.jsx        # Auth page container layout
│       ├── LoginPage.jsx         # Login screen
│       ├── SignupPage.jsx        # Sign up with role selection
│       ├── ForgotPasswordPage.jsx# Password reset flow
│       ├── AuthRouter.jsx        # Navigation between auth pages
│       └── index.js              # Component exports
├── App.jsx                       # Main app component
├── main.jsx                      # App entry point
├── index.css                     # Global styles + Tailwind
├── tailwind.config.js            # Tailwind configuration
└── postcss.config.js             # PostCSS configuration
```

## Styling

- **Framework**: Tailwind CSS
- **Colors**: Clean blue and gray palette with dark backgrounds
- **Responsive**: Desktop/Web optimized
- **Animations**: Smooth transitions and loading states
- **Accessibility**: WCAG compliant with focus states

## Component Breakdown

### Logo
Displays the LexGo branding with scales of justice icon

### Input
Reusable form input with:
- Label support
- Error message display
- Focus states
- Validation styling

### Button
Multi-variant button component:
- `primary` - Blue CTA button
- `secondary` - Gray button
- `outline` - Border button
- `ghost` - Text button
- Loading state with spinner
- Full-width option

### AuthLayout
Container component that:
- Centers content on screen
- Adds subtle background pattern
- Provides white content card
- Responsive padding

### LoginPage
- Email and password inputs
- Show/hide password toggle
- Form validation
- Loading state on submit
- Navigation to signup and forgot password

### SignupPage
Step-based signup:
1. **Role Selection**: Choose from Student, Lecturer, or Law Aspirant
2. **Account Creation**: Enter full name, email, password, confirm password
3. **Terms Agreement**: Accept terms and privacy policy
4. **Back Navigation**: Return to role selection to change choice

### ForgotPasswordPage
Three-step password recovery:
1. **Email Verification**: Enter email address
2. **OTP Verification**: Enter 6-digit code with resend option
3. **Password Reset**: Create new password with confirmation

### AuthRouter
Manages navigation between:
- Login page
- Sign up page
- Forgot password page

## API Integration Points

The following components have TODO comments for API integration:

1. **LoginPage.jsx** - `handleSubmit()` - POST to login endpoint
2. **SignupPage.jsx** - `handleSubmit()` - POST to signup endpoint
3. **ForgotPasswordPage.jsx**:
   - `handleEmailSubmit()` - POST to request password reset
   - `handleOtpSubmit()` - POST to verify OTP
   - `handleResetSubmit()` - POST to set new password

## Getting Started

### Installation

```bash
# Install dependencies (if not already installed)
npm install

# Install Tailwind CSS (already set up)
npm install -D tailwindcss postcss autoprefixer
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Form Validation

### Login
- Email: Required, valid email format
- Password: Required, minimum 6 characters

### Sign Up
- Full Name: Required, minimum 2 characters
- Email: Required, valid email format
- Password: Required, 8+ characters, uppercase + lowercase + numbers
- Confirm Password: Must match password
- Terms: Must be agreed

### Forgot Password
- Email: Required, valid email format
- OTP: Required, exactly 6 digits
- Password: Same as signup requirements

## Styling Customization

Edit `tailwind.config.js` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints
- Animations

## Icons

The logo uses a simple SVG scale icon. To add additional icons:
1. Add SVG components in dedicated `icons/` folder
2. Import and use in components
3. Apply Tailwind classes for sizing and styling

## Accessibility

- ✅ Semantic HTML (form, label, input)
- ✅ ARIA labels on inputs
- ✅ Focus visible styles
- ✅ Color contrast meets WCAG AA
- ✅ Error messages linked to fields
- ✅ Loading states with spinner

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Requires ES6+ JavaScript support

## Next Steps

1. **API Integration**: Replace TODO handlers with actual API calls
2. **State Management**: Consider Redux/Zustand for auth state
3. **Routing**: Integrate React Router for proper SPA navigation
4. **Storage**: Add localStorage/sessionStorage for auth tokens
5. **Testing**: Add Jest + React Testing Library tests
6. **Email Verification**: Implement email verification flow
7. **Social Auth**: Add Google/GitHub login options

## License

Part of the LexGo platform. All rights reserved.
