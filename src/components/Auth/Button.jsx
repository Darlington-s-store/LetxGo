import React from 'react';

export const Button = React.forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-200 font-medium';

    const variants = {
      primary:
        'bg-gray-900 text-white hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed focus:ring-4 focus:ring-gray-300',
      secondary:
        'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed focus:ring-4 focus:ring-gray-200',
      outline:
        'border-2 border-gray-300 text-gray-900 hover:bg-gray-50 disabled:bg-gray-50 disabled:cursor-not-allowed focus:ring-4 focus:ring-gray-200',
      ghost:
        'text-gray-900 hover:bg-gray-50 disabled:cursor-not-allowed focus:ring-4 focus:ring-gray-200',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={`
          ${baseStyles}
          ${variants[variant] || variants.primary}
          ${sizes[size] || sizes.md}
          ${fullWidth ? 'w-full' : ''}
          ${className}
          flex items-center justify-center gap-2
        `}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
