import React from 'react';

export const ScalesIcon = ({ className = '', color = 'currentColor' }) => (
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
