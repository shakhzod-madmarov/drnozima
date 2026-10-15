import React from "react";

/**
 * DentalSticker — Professional Medical Dental Quality Badge & Seal
 * Minimalist, elegant, and perfectly matched to Dr. Nozima Baxtiyarovna's official brand:
 * Primary: #086288 | Cerulean: #4D8DBA | Sky: #97D7FF | Warm Champagne Gold: #FFEFC4
 */
const DentalSticker = ({
  variant = "tooth-sparkle",
  label,
  sublabel,
  color = "primary",
  rotate = "",
  size = "md",
  className = "",
}) => {
  // Cohesive brand palettes built strictly with user-specified brand tokens
  const colorThemes = {
    primary: {
      bg: "bg-gradient-to-br from-[#086288] via-[#0b5473] to-[#064b69]",
      border: "border-[#97D7FF]/30",
      ring: "ring-1 ring-[#086288]/20",
      badgeText: "text-white",
      subText: "text-[#97D7FF]",
      iconBg: "bg-white/10",
      shadow: "shadow-sm hover:shadow-md",
    },
    navy: {
      bg: "bg-gradient-to-br from-[#086288] via-[#0b5473] to-[#064b69]",
      border: "border-[#97D7FF]/30",
      ring: "ring-1 ring-[#086288]/20",
      badgeText: "text-white",
      subText: "text-[#97D7FF]",
      iconBg: "bg-white/10",
      shadow: "shadow-sm hover:shadow-md",
    },
    cerulean: {
      bg: "bg-gradient-to-br from-[#4D8DBA] to-[#086288]",
      border: "border-[#97D7FF]/40",
      ring: "ring-1 ring-[#4D8DBA]/30",
      badgeText: "text-white",
      subText: "text-[#FFEFC4]",
      iconBg: "bg-white/15",
      shadow: "shadow-sm hover:shadow-md",
    },
    slate: {
      bg: "bg-gradient-to-br from-[#4D8DBA] to-[#086288]",
      border: "border-[#97D7FF]/40",
      ring: "ring-1 ring-[#4D8DBA]/30",
      badgeText: "text-white",
      subText: "text-[#FFEFC4]",
      iconBg: "bg-white/15",
      shadow: "shadow-sm hover:shadow-md",
    },
    sky: {
      bg: "bg-gradient-to-br from-[#EBF6FC] via-[#d7eeff] to-[#c2e4fc]",
      border: "border-[#97D7FF]",
      ring: "ring-1 ring-[#97D7FF]/40",
      badgeText: "text-[#086288]",
      subText: "text-[#4D8DBA]",
      iconBg: "bg-white/80",
      shadow: "shadow-xs hover:shadow-sm",
    },
    gold: {
      bg: "bg-gradient-to-br from-[#FFEFC4] via-[#FFF6DE] to-[#fae6b2]",
      border: "border-[#E6CA85]",
      ring: "ring-1 ring-[#FFEFC4]/60",
      badgeText: "text-[#086288]",
      subText: "text-[#8a681c]",
      iconBg: "bg-white/85",
      shadow: "shadow-xs hover:shadow-sm",
    },
    emerald: {
      // Harmonized with primary palette rather than garish bright green
      bg: "bg-gradient-to-br from-[#0c5c7d] via-[#10708f] to-[#086288]",
      border: "border-[#97D7FF]/40",
      ring: "ring-1 ring-[#086288]/30",
      badgeText: "text-white",
      subText: "text-[#97D7FF]",
      iconBg: "bg-white/15",
      shadow: "shadow-sm hover:shadow-md",
    },
    indigo: {
      // Harmonized with primary palette
      bg: "bg-gradient-to-br from-[#086288] via-[#1a4e75] to-[#4D8DBA]",
      border: "border-[#97D7FF]/30",
      ring: "ring-1 ring-[#086288]/20",
      badgeText: "text-white",
      subText: "text-[#FFEFC4]",
      iconBg: "bg-white/15",
      shadow: "shadow-sm hover:shadow-md",
    },
    porcelain: {
      bg: "bg-white",
      border: "border-[#D1E4F0]",
      ring: "ring-1 ring-[#086288]/10",
      badgeText: "text-[#086288]",
      subText: "text-[#4D8DBA]",
      iconBg: "bg-[#F4F8FB]",
      shadow: "shadow-xs hover:shadow-sm",
    },
  };

  const theme = colorThemes[color] || colorThemes.primary;

  const sizeClasses = {
    sm: "px-3 py-1.5 rounded-xl gap-2",
    md: "px-4 py-2.5 rounded-2xl gap-3",
    lg: "px-5 py-3 rounded-2xl gap-3.5",
  };

  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const renderArtwork = () => {
    switch (variant) {
      case "tooth-crown":
        // Minimalist aesthetic crown & tooth line-art
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <path
              d="M12 18L18 8L24 14L30 8L36 18H12Z"
              fill="#FFEFC4"
              stroke="#086288"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M14 20C14 16 18 15 21 15C23 15 23.5 16 24 16C24.5 16 25 15 27 15C30 15 34 16 34 20C34 28 31 35 28 40C26.5 42 24.5 42 24 38L24 34L24 38C23.5 42 21.5 42 20 40C17 35 14 28 14 20Z"
              fill="white"
              stroke="#086288"
              strokeWidth="1.8"
            />
            <circle cx="24" cy="24" r="2.5" fill="#4D8DBA" />
          </svg>
        );

      case "implant-shield":
        // Minimalist precision dental implant fixture
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <path
              d="M24 6L11 12V22C11 31.5 16.5 39 24 42C31.5 39 37 31.5 37 22V12L24 6Z"
              fill="#F4F8FB"
              stroke="#086288"
              strokeWidth="1.8"
            />
            {/* Implant fixture lines */}
            <path d="M19 16H29" stroke="#086288" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 20H28" stroke="#4D8DBA" strokeWidth="2" strokeLinecap="round" />
            <path d="M21 24H27" stroke="#4D8DBA" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 28H26" stroke="#4D8DBA" strokeWidth="2" strokeLinecap="round" />
            <path d="M23 32H25" stroke="#086288" strokeWidth="2" strokeLinecap="round" />
            <circle cx="24" cy="11" r="2" fill="#FFEFC4" stroke="#086288" strokeWidth="1.2" />
          </svg>
        );

      case "painless-heart":
        // Gentle touch & painless anesthesia droplet/shield
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <path
              d="M24 7C24 7 13 18 13 26C13 32 17.9 37 24 37C30.1 37 35 32 35 26C35 18 24 7 24 7Z"
              fill="white"
              stroke="#086288"
              strokeWidth="1.8"
            />
            {/* Medical comfort cross */}
            <path d="M24 19V29M19 24H29" stroke="#4D8DBA" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="30" cy="16" r="2" fill="#FFEFC4" />
          </svg>
        );

      case "laser-diamond":
        // Diamond radiance & cold-LED brightening
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <polygon
              points="24,8 38,20 24,40 10,20"
              fill="white"
              stroke="#086288"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <polygon points="24,14 32,20 24,34 16,20" fill="#EBF6FC" />
            <path
              d="M36 8L37.5 11.5L41 13L37.5 14.5L36 18L34.5 14.5L31 13L34.5 11.5L36 8Z"
              fill="#FFEFC4"
              stroke="#086288"
              strokeWidth="1"
            />
          </svg>
        );

      case "doctor-badge":
        // Minimalist doctor seal
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <circle cx="24" cy="24" r="19" fill="#086288" stroke="#FFEFC4" strokeWidth="1.8" />
            <circle cx="24" cy="24" r="15" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
            {/* Gold medical star */}
            <path
              d="M24 14L26.5 19.5L32.5 20.3L28 24.5L29.2 30.5L24 27.5L18.8 30.5L20 24.5L15.5 20.3L21.5 19.5L24 14Z"
              fill="#FFEFC4"
            />
          </svg>
        );

      case "sterile-shield":
        // Hospital Class-B sterilization guarantee
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <path
              d="M24 6L11 12V22C11 31.5 16.5 39 24 42C31.5 39 37 31.5 37 22V12L24 6Z"
              fill="white"
              stroke="#086288"
              strokeWidth="1.8"
            />
            <path
              d="M18 24L22 28L30 18"
              stroke="#086288"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="13" r="1.5" fill="#FFEFC4" />
          </svg>
        );

      case "tooth-sparkle":
      default:
        // Stylized single-curve tooth matching Dr. Nozima's official logo
        return (
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            {/* Outer tooth curve */}
            <path
              d="M15 17C13 22 14 30 19 37C20.5 39 22 39 23 35L24 29L25 35C26 39 27.5 39 29 37C34 30 35 22 33 17C31 12 27 12 24 14C21 12 17 12 15 17Z"
              fill="white"
              stroke="#086288"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Flowing brand wave in cerulean #4D8DBA */}
            <path
              d="M17 22C21 21 24 27 31 23"
              stroke="#4D8DBA"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Gold crest sparkle #FFEFC4 */}
            <path
              d="M34 10L35 12.5L37.5 13.5L35 14.5L34 17L33 14.5L30.5 13.5L33 12.5L34 10Z"
              fill="#FFEFC4"
              stroke="#086288"
              strokeWidth="0.8"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={`inline-flex items-center ${theme.bg} ${sizeClasses[size]} border ${theme.border} ${theme.ring} ${theme.shadow} hover:-translate-y-0.5 transition-all duration-200 select-none ${className}`}
    >
      <div className={`${iconSizes[size]} shrink-0 ${theme.iconBg} rounded-xl p-1 flex items-center justify-center`}>
        {renderArtwork()}
      </div>
      {(label || sublabel) && (
        <div className="leading-tight text-left pr-0.5">
          {sublabel && (
            <span className={`block text-[9px] font-bold uppercase tracking-wider ${theme.subText}`}>
              {sublabel}
            </span>
          )}
          {label && (
            <span className={`block text-xs sm:text-sm font-bold tracking-tight ${theme.badgeText}`}>
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default DentalSticker;
