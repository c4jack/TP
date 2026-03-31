import React from 'react';

interface Props {
  className?: string;
}

export function Logo({ className = "w-8 h-8" }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#FF0000" />
      <text 
        x="48" 
        y="72" 
        fontFamily="Arial, Helvetica, sans-serif" 
        fontWeight="900" 
        fontStyle="italic" 
        fontSize="58" 
        fill="#FFFFFF" 
        textAnchor="middle" 
        letterSpacing="-4"
      >
        TP
      </text>
    </svg>
  );
}
