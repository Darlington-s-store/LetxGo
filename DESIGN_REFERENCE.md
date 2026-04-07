# LexGo Design Reference Guide

## Color Palette

### Primary Colors
| Color | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Dark Navy | #061526 | N/A | Sidebar background, brand |
| Dark Gray | #1f2937 | gray-900 | Primary buttons, text |
| White | #ffffff | white | Main background |
| Light Gray | #f3f4f6 | gray-100 | Secondary background |

### Text Colors
| Color | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Primary | #111827 | gray-900 | Main text, headings |
| Secondary | #6b7280 | gray-600 | Subtext, labels |
| Light | #9ca3af | gray-400 | Disabled, placeholders |
| Very Light | #d1d5db | gray-300 | Borders |

### Status Colors
| Color | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Error | #ef4444 | red-500 | Error messages, validation |
| Success | #10b981 | green-500 | Success states, confirmations |
| Warning | #f59e0b | amber-500 | Warnings, important notices |
| Info | #3b82f6 | blue-500 | Information messages |

## Typography System

### Font Family
```
Font Stack: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
Font Weight Scale: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
```

### Type Scale

#### Headings
| Size | CSS | Tailwind | Usage |
|------|-----|----------|-------|
| 32px | font-size: 32px; | text-2xl | Page main heading |
| 24px | font-size: 24px; | text-xl | Section headings |
| 20px | font-size: 20px; | text-lg | Subsection headings |
| 18px | font-size: 18px; | text-base | Card titles |

#### Body Text
| Size | CSS | Tailwind | Usage |
|------|-----|----------|-------|
| 16px | font-size: 16px; | text-base | Main body text |
| 14px | font-size: 14px; | text-sm | Secondary text, labels |
| 12px | font-size: 12px; | text-xs | Small labels, captions |

#### Line Height
| Type | Value | CSS |
|------|-------|-----|
| Headings | 1.2 | line-height: 1.2 |
| Body | 1.5 | line-height: 1.5; |
| Compact | 1.4 | line-height: 1.4 |

## Spacing Scale

### Tailwind Spacing Units
```
Space-1: 4px     (p-1, m-1, gap-1)
Space-2: 8px     (p-2, m-2, gap-2)
Space-3: 12px    (p-3, m-3, gap-3)
Space-4: 16px    (p-4, m-4, gap-4)
Space-6: 24px    (p-6, m-6, gap-6)
Space-8: 32px    (p-8, m-8, gap-8)
```

### Common Spacing Patterns
```
Form Field Spacing: space-y-6 (24px between fields)
Card Padding: p-6 (24px)
Section Padding: p-8 (32px)
Page Padding: px-6 py-12 (24px horizontal, 48px vertical)
Component Gap: gap-4 or gap-6 (16px or 24px)
```

## Component Specifications

### Primary Button
```css
/* Styling */
Background: #1f2937 (gray-900)
Text: white, semibold
Padding: py-3 px-6 (12px 24px)
Border Radius: rounded-lg (8px)
Width: w-full (typically)

/* States */
Default: bg-gray-900 text-white
Hover: bg-gray-800
Active: scale-[0.99]
Focus: ring-2 ring-gray-300
Disabled: bg-gray-400 cursor-not-allowed
Loading: opacity-75

/* Size */
Height: 48px (py-3)
Width: 100% in forms
Min Width: 120px for standalone
```

### Input Field
```css
/* Styling */
Border: 1px solid #d1d5db (gray-300)
Background: #ffffff (white)
Text: #111827 (gray-900)
Padding: py-3 px-4 (12px 16px)
Border Radius: rounded-lg (8px)

/* States */
Default: gray-300 border
Focus: ring-2 ring-gray-900, border-gray-900
Filled: text-gray-900
Disabled: bg-gray-100, opacity-50
Error: ring-2 ring-red-500, border-red-500
```

### Card/Container
```css
/* Styling */
Background: #ffffff (white)
Border: 1px solid #e5e7eb (gray-200)
Padding: p-6 (24px)
Border Radius: rounded-lg (8px)
Box Shadow: shadow-sm (0 1px 2px rgba(0, 0, 0, 0.05))
```

### Sidebar
```css
/* Styling */
Width: w-64 (256px)
Background: #1a1f2e (dark navy)
Color: text-white
Fixed Position: fixed left-0 top-0 h-screen
Padding: p-6
Border Right: border-gray-800

/* Responsive */
Hidden on mobile (hidden or overflow)
Collapsible toggle: w-0 or w-64 with transition
Smooth transition: transition-all duration-300
```

### Progress Bar/Indicator
```css
/* Styling */
Height: h-1 (4px)
Background: #d1d5db (gray-300)
Filled: bg-gray-900
Border Radius: rounded-full

/* Responsive */
Flex layout with proportional widths
1 step: flex-1 (50%)
2 steps: flex-1 each (each step 50%)
```

### OTP Input
```css
/* Individual Digit Box */
Width: w-14 (56px)
Height: h-14 (56px)
Border: 2px solid
Text: text-xl (20px)
Border Radius: rounded-lg (8px)

/* States */
Empty: border-gray-300
Filled: border-gray-900 bg-gray-50
Focus: ring-2 ring-gray-900
Error: border-red-500

/* Gap between inputs */
Gap: gap-4 (16px)
```

## Responsive Breakpoints

### Tailwind Breakpoints
```
sm: 640px   (tablets)
md: 768px   (small laptops)
lg: 1024px  (standard laptops)
xl: 1280px  (large screens)
2xl: 1536px (extra large)
```

### Layout Patterns

#### Single Column (Mobile)
```css
grid-cols-1
Full width inputs
Stacked navigation
Bottom action buttons
```

#### Two Columns (Tablet)
```css
md:grid-cols-2
Sidebar optional
Side-by-side form fields
Centered content
```

#### Multi Column (Desktop)
```css
lg:grid-cols-3 or lg:grid-cols-4
Visible sidebar
Organized dashboard
Multiple sections
```

## Icons (Lucide React)

### Common Icons Used
```javascript
// Authentication
Mail            // Email fields
Lock            // Password fields
User            // User/profile fields
Eye             // Show/hide password
LogOut          // Logout action

// Navigation
Menu            // Hamburger menu
X               // Close button
Home            // Home/dashboard
Settings        // Settings menu
Bell            // Notifications
Search          // Search functionality

// Status
Check           // Success/completion
X/Close         // Error/cancel
AlertCircle     // Warning
Info            // Information

// Size Standard
w-5 h-5 (20px) - Most common
w-4 h-4 (16px) - Smaller, inline
w-6 h-6 (24px) - Larger, prominent
```

## Animations & Transitions

### Duration Scale
```
100ms:  Instant feedback (button press)
200ms:  Standard transition (focus states)
300ms:  Page transitions (fade in/out)
500ms:  Complex animations (modal open)
```

### Easing Functions
```
ease-in-out:    Default, smooth transitions
ease-out:       For page exits
ease-in:        For page enters
linear:         For continuous animations
```

### Common Animations
```css
/* Button Hover */
hover:scale-[1.02] transition-transform duration-200

/* Button Active */
active:scale-[0.98] transition-transform duration-200

/* Fade In */
opacity-0 to opacity-1, 300ms duration

/* Slide In */
translate-y-4 to translate-y-0, 300ms duration
```

## Shadow System

### Box Shadows
```css
shadow-sm:  0 1px 2px rgba(0, 0, 0, 0.05)     /* Cards, containers */
shadow-md:  0 4px 6px rgba(0, 0, 0, 0.1)      /* Modals, dropdowns */
shadow-lg:  0 10px 15px rgba(0, 0, 0, 0.1)    /* Important overlays */
shadow-xl:  0 20px 25px rgba(0, 0, 0, 0.1)    /* Main overlays */
```

## Borders & Radius

### Border Radius
```
rounded-sm:  2px   /* Subtle rounding */
rounded-md:  6px   /* Normal rounding */
rounded-lg:  8px   /* Standard, most used */
rounded-xl:  12px  /* Large, prominent */
rounded-full: 9999px /* Circles, pills */
```

### Border Styles
```css
Border Width: 1px (default), 2px (focus/prominent)
Border Color: gray-300 (normal), gray-900 (focused)
Border Placement: all sides (default), top/bottom specific
```

## Accessibility Requirements

### Color Contrast
- Text on backgrounds: Minimum 4.5:1 ratio
- Large text (18px+): Minimum 3:1 ratio
- Gray-900 on white: 16:1 (AAA)
- Gray-600 on white: 7:1 (AA)

### Focus States
- Visible on all interactive elements
- Ring outline: 2px with 2px offset
- Color: Contrasting with background
- No focus-visible removed without replacement

### Keyboard Navigation
- Tab order follows logical flow
- All buttons accessible via keyboard
- No keyboard traps
- Skip links for navigation (future)

### Screen Reader
- All form labels associated with inputs
- Icons have aria-labels
- Error messages announced
- Dynamic content updates announced

## File Size & Performance

### Target Metrics
- Bundle size: < 100KB (gzipped)
- First contentful paint: < 1.5s
- Time to interactive: < 3s
- CSS-in-JS overhead: Minimal (Tailwind)

### Optimization Tips
```
1. Use Tailwind for styling (no CSS runtime)
2. Lazy load heavy components
3. Minimize re-renders with React.memo
4. Use local storage for persistence
5. Compress images and assets
```

## Browser Support

### Supported Browsers
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

### CSS Features Used
- CSS Grid: All modern browsers
- Flexbox: All modern browsers
- CSS Variables: All modern browsers
- CSS Transforms: All modern browsers

### JavaScript Features
- ES6+ syntax
- Arrow functions
- Destructuring
- Spread operator
- Template literals
- async/await

## QA Testing Checklist

### Visual Testing
- [ ] Colors match design spec
- [ ] Typography sizes and weights correct
- [ ] Spacing follows grid system
- [ ] Shadows applied correctly
- [ ] Icons display properly
- [ ] Layout responsive on all sizes

### Interaction Testing
- [ ] Buttons respond to clicks
- [ ] Form validation works
- [ ] Loading states display
- [ ] Transitions are smooth
- [ ] Focus states visible
- [ ] Disabled states clear

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Focus order logical
- [ ] Color contrast sufficient
- [ ] Screen reader compatible
- [ ] Error messages clear
- [ ] Form labels present

## Future Design Extensions

### Planned Enhancements
1. Dark mode support
2. Additional color themes
3. Custom branding options
4. Enhanced animations
5. Data visualization components
6. Advanced form components
7. Toast notifications
8. Modal dialogs

### Component Library
Potential for creating a shared component library:
- Reusable button variants
- Form field components
- Card components
- Navigation components
- Modal/dialog components
- Notification components
