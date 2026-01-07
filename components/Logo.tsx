
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 32, showText = false }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_4px_6px_rgba(0,123,255,0.2)]"
      >
        {/* The Outer Pin Shape - Vibrant Blue */}
        <path
          d="M100 190C100 190 30 120 30 75C30 36.3401 61.3401 5 100 5C138.66 5 170 36.3401 170 75C170 120 100 190 100 190Z"
          fill="#007BFF"
        />
        
        {/* The Inner Path (Road) - Deep Navy / Blackish */}
        <path
          d="M100 170C100 170 145 110 145 75C145 50.1472 124.853 30 100 30C75.1472 30 55 50.1472 55 75C55 110 100 170 100 170Z"
          fill="#020617"
        />
        
        {/* Road Markings / Stripes */}
        <rect x="97" y="50" width="6" height="15" rx="3" fill="white" opacity="0.8" />
        <rect x="97" y="85" width="6" height="15" rx="3" fill="white" opacity="0.8" />
        <rect x="97" y="120" width="6" height="15" rx="3" fill="white" opacity="0.8" />
        
        {/* Flag Pole - Darker Navy */}
        <rect x="95" y="0" width="6" height="40" rx="3" fill="#003566" />
        
        {/* Flag - Blue */}
        <path
          d="M101 0H150L135 15L150 30H101V0Z"
          fill="#007BFF"
        />
      </svg>
      {showText && (
        <span className="text-2xl font-black tracking-tighter text-white dark:text-white font-montserrat flex items-center">
          Roadmap<span className="text-[#007BFF]">Finder</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
