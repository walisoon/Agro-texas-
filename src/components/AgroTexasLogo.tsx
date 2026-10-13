import React from 'react';

interface AgroTexasLogoProps {
  className?: string;
  variant?: 'full' | 'icon-only' | 'footer';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AgroTexasLogo: React.FC<AgroTexasLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  // Determine dimensions based on size and variant
  const sizeClasses = {
    sm: variant === 'icon-only' ? 'w-10 h-10' : 'h-10',
    md: variant === 'icon-only' ? 'w-14 h-14' : 'h-12 md:h-16',
    lg: variant === 'icon-only' ? 'w-20 h-20' : 'h-16 md:h-20',
    xl: variant === 'icon-only' ? 'w-24 h-24' : 'h-20 md:h-28',
  };

  if (variant === 'icon-only') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${className}`}
      >
        {/* White outline structure/horns of Texas Longhorn Steer */}
        {/* Beautiful Longhorn Horns */}
        <path
          d="M 54 48 C 30 42, 12 30, 8 22 C 8 22, 22 32, 48 44"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
        />
        <path
          d="M 66 48 C 90 42, 108 30, 112 22 C 112 22, 98 32, 72 44"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
        />

        {/* Texas Outline (Slightly stylized and symmetrical to match the logo) */}
        <path
          d="M 48 40 L 72 40 L 73 50 L 86 52 L 87 72 C 87 78, 83 83, 76 88 L 60 98 L 44 88 C 37 83, 33 78, 33 72 L 34 52 L 47 50 Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-80"
        />

        {/* Orange Center Star */}
        <polygon
          points="60,46 63,53 71,53 65,57 67,65 60,60 53,65 55,57 49,53 57,53"
          fill="#F58220"
        />

        {/* Bottom Leaves/Wings/Book representation */}
        <path
          d="M 38 88 C 45 92, 53 92, 60 88 C 67 92, 75 92, 82 88"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="opacity-85"
        />
        <path
          d="M 35 93 C 43 97, 52 97, 60 93 C 68 97, 77 97, 85 93"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          className="opacity-60"
        />

        {/* Swooping Orange checkmark/leaf accent */}
        <path
          d="M 46 93 C 54 90, 64 82, 78 81 C 66 84, 55 90, 46 95 Z"
          fill="#F58220"
        />
      </svg>
    );
  }

  // Full Horizontal Lockup (Matching the EXACT look of the uploaded image)
  return (
    <div className={`flex items-center gap-3 md:gap-4 select-none ${className}`}>
      {/* Icon portion */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${variant === 'footer' ? 'w-10 h-10 md:w-14 md:h-14' : 'w-12 h-12 md:w-16 md:h-16'} flex-shrink-0`}
      >
        {/* Left Horn */}
        <path
          d="M 54 48 C 26 42, 10 28, 6 20 C 6 20, 20 31, 48 44"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
        />
        {/* Right Horn */}
        <path
          d="M 66 48 C 94 42, 110 28, 114 20 C 114 20, 100 31, 72 44"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
        />

        {/* Texas Outline Shape (Centered and proportional) */}
        <path
          d="M 48 38 L 72 38 L 73 48 L 86 50 L 87 70 C 87 76, 83 81, 76 86 L 60 96 L 44 86 C 37 81, 33 76, 33 70 L 34 48 L 47 38 Z"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-80"
        />

        {/* Central Orange Point Star */}
        <polygon
          points="60,44 63,51 71,51 65,55 67,63 60,58 53,63 55,55 49,51 57,51"
          fill="#F58220"
        />

        {/* White Wing/Book Bottom Accent */}
        <path
          d="M 38 84 C 45 88, 53 88, 60 84 C 67 88, 75 88, 82 84"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="opacity-85"
        />
        <path
          d="M 35 89 C 43 93, 52 93, 60 89 C 68 93, 77 93, 85 89"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          className="opacity-50"
        />

        {/* Swooping Orange Accent Checkmark */}
        <path
          d="M 46 89 C 54 86, 64 78, 78 77 C 66 80, 55 86, 46 91 Z"
          fill="#F58220"
        />
      </svg>

      {/* Typography portion */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5 md:gap-2">
          {/* "AGRO" in elegant semibold white */}
          <span className="font-display text-lg sm:text-xl md:text-2xl font-normal tracking-wider text-white">
            AGRO
          </span>
          {/* "TEXAS" in thick, bold orange */}
          <span className="font-display text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-[#F58220]">
            TEXAS
          </span>
        </div>
        {/* Subtext: "CERTIFICAÇÃO E AUDITORIA" in light gray, fine font */}
        <span className="text-[7.5px] sm:text-[9px] md:text-[10px] font-sans font-light tracking-[0.2em] md:tracking-[0.25em] text-white/50 uppercase mt-1 md:mt-1.5 whitespace-nowrap">
          Certificação e Auditoria
        </span>
      </div>
    </div>
  );
};
