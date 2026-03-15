import * as React from 'react';

export const VercelIcon = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 1L24 22H0L12 1Z" />
  </svg>
);
