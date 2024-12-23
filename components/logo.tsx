"use client"
import React from 'react';

interface ShapeXUIHeaderLogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<ShapeXUIHeaderLogoProps> = ({ width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ShapeX-UI Logo"
      className='rounded-lg'
    >
      <rect width="40" height="40" fill="#f0f0f0" />
      <path d="M4 4L16 4L4 16Z" fill="#4a90e2" />
      <circle cx="28" cy="28" r="8" fill="#50e3c2" />
      <rect x="12" y="12" width="16" height="16" rx="2" fill="#ff6b6b" />
      <rect x="14" y="15" width="12" height="2" rx="1" fill="white" />
      <rect x="14" y="19" width="8" height="2" rx="1" fill="white" />
      <rect x="14" y="23" width="10" height="2" rx="1" fill="white" />
    </svg>
  );
};

export default Logo;

