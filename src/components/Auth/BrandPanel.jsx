import React from 'react';

const LEGAL_PATTERN = `url("data:image/svg+xml,${encodeURIComponent(`
  <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.12">
      <!-- Scales of Justice -->
      <g transform="translate(20 20) scale(0.6)">
        <path d="M16 12V38" />
        <path d="M16 16L4 28M16 16L28 28" />
        <path d="M4 28L0 38H8L4 28Z" />
        <path d="M28 28L24 38H32L28 28Z" />
        <path d="M7 42H25" />
      </g>
      <!-- Gavel -->
      <g transform="translate(80 20) scale(0.6)">
        <path d="M3 8H23L27 16H7L3 8Z" />
        <path d="M3 8V28H27V8" />
        <path d="M15 8V28" />
      </g>
      <!-- Law Book -->
      <g transform="translate(135 25) scale(0.6)">
        <path d="M6 36C6 18 13 8 24 8C35 8 42 18 42 36" />
        <path d="M10 40H38" />
      </g>
      <!-- Court -->
      <g transform="translate(25 80) scale(0.6)">
        <path d="M2 10H30V26H2V10Z" />
        <path d="M2 26H30" />
      </g>
      <!-- Column -->
      <g transform="translate(85 80) scale(0.6)">
        <path d="M4 8H28M8 8V32M24 8V32M4 32H28" />
      </g>
      <!-- Shield -->
      <g transform="translate(135 85) scale(0.55)">
        <path d="M20 2L4 8V18C4 26.5 10.5 34.5 20 38C29.5 34.5 36 26.5 36 18V8L20 2Z" />
      </g>
    </g>
  </svg>
`)})")`;

const ScalesMainIcon = ({ color = 'currentColor' }) => (
  <svg className="mb-6 h-40 w-40 lg:h-52 lg:w-52" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export const BrandPanel = () => (
  <aside className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#061526] px-8 py-16 lg:min-h-screen lg:basis-[41.5%] lg:px-12">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: LEGAL_PATTERN,
        backgroundSize: '180px 180px',
      }}
      aria-hidden="true"
    />
    <div className="relative z-10 flex flex-col items-center text-center text-white">
      <ScalesMainIcon color="#ffffff" />
      <h1 className="text-[52px] font-bold leading-none tracking-[-0.04em] lg:text-[72px]">LexGo</h1>
      <p className="mt-3 text-[22px] font-medium tracking-tight text-white/90 lg:text-[28px]">Law on the Go</p>
    </div>
  </aside>
);
