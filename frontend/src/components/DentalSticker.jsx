import React from "react";

/**
 * DentalSticker — Custom Die-Cut 3D Vinyl Dental Sticker Badge
 * Features thick white sticker border, glossy drop-shadow, subtle tilt, and vector dental artwork.
 * 100% tailored to Dr. Nozima Baxtiyarovna & Sevdo Denta brand aesthetic (#086287 / #4d8db9).
 */
const DentalSticker = ({
  variant = "tooth-sparkle",
  label,
  sublabel,
  color = "navy",
  rotate = "-rotate-2",
  size = "md",
  className = "",
}) => {
  const colorThemes = {
    navy: {
      bg: "from-[#086287] via-[#1c4475] to-[#4d8db9]",
      ring: "ring-[#9cb8d4]/70",
      badgeText: "text-white",
      subText: "text-[#9cb8d4]",
    },
    slate: {
      bg: "from-[#4d8db9] via-[#3572a5] to-[#086287]",
      ring: "ring-sky-200/80",
      badgeText: "text-white",
      subText: "text-sky-100",
    },
    sky: {
      bg: "from-[#0284c7] via-[#0ea5e9] to-[#0369a1]",
      ring: "ring-sky-200/80",
      badgeText: "text-white",
      subText: "text-sky-100",
    },
    gold: {
      bg: "from-amber-400 via-amber-500 to-yellow-600",
      ring: "ring-amber-200/80",
      badgeText: "text-slate-950",
      subText: "text-amber-950/80",
    },
    emerald: {
      bg: "from-emerald-500 via-teal-600 to-emerald-700",
      ring: "ring-emerald-200/80",
      badgeText: "text-white",
      subText: "text-emerald-100",
    },
    indigo: {
      bg: "from-indigo-700 via-blue-800 to-[#086287]",
      ring: "ring-indigo-200/80",
      badgeText: "text-white",
      subText: "text-indigo-100",
    },
  };

  const theme = colorThemes[color] || colorThemes.navy;

  const sizeClasses = {
    sm: "px-3 py-1.5 rounded-2xl gap-2",
    md: "px-4 py-2.5 rounded-3xl gap-3",
    lg: "px-5 py-3.5 rounded-[28px] gap-3.5",
  };

  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const renderArtwork = () => {
    switch (variant) {
      case "tooth-crown":
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs" fill="none">
            <path
              d="M14 22L22 10L32 18L42 10L50 22H14Z"
              fill="#FBBF24"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M18 26C18 21 22 19 27 19C30 19 31 20.5 32 20.5C33 20.5 34 19 37 19C42 19 46 21 46 26C46 34 43 43 39 51C37.5 54 35 54 34 50L32 43L30 50C29 54 26.5 54 25 51C21 43 18 34 18 26Z"
              fill="#FFFFFF"
              stroke="#086287"
              strokeWidth="2.5"
            />
            <path
              d="M26 32C28 35 36 35 38 32"
              stroke="#086287"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="25" cy="28" r="1.8" fill="#086287" />
            <circle cx="39" cy="28" r="1.8" fill="#086287" />
          </svg>
        );

      case "implant-shield":
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs" fill="none">
            <path
              d="M32 6L12 14V30C12 44 20.5 54.5 32 58C43.5 54.5 52 44 52 30V14L32 6Z"
              fill="#FFFFFF"
              stroke="#047857"
              strokeWidth="2.5"
            />
            <path
              d="M23 18H41L39 27H25L23 18Z"
              fill="#10B981"
              stroke="#047857"
              strokeWidth="2"
            />
            <rect x="26" y="30" width="12" height="4" rx="2" fill="#047857" />
            <rect x="27" y="37" width="10" height="4" rx="2" fill="#047857" />
            <rect x="28.5" y="44" width="7" height="4" rx="2" fill="#047857" />
          </svg>
        );

      case "painless-heart":
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs" fill="none">
            <path
              d="M32 54C32 54 10 40 10 23C10 15 16.5 10 23.5 10C28 10 30.5 12.5 32 15C33.5 12.5 36 10 40.5 10C47.5 10 54 15 54 23C54 40 32 54 32 54Z"
              fill="#FFFFFF"
              stroke="#0284c7"
              strokeWidth="2.5"
            />
            <path
              d="M28 24H36V30H42V38H36V44H28V38H22V30H28V24Z"
              fill="#0284c7"
            />
          </svg>
        );

      case "laser-diamond":
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs" fill="none">
            <polygon
              points="32,6 54,24 32,56 10,24"
              fill="#FFFFFF"
              stroke="#0284c7"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <polygon points="32,12 46,24 32,48 18,24" fill="#E0F2FE" />
            <path
              d="M48 10L50 15L55 17L50 19L48 24L46 19L41 17L46 15L48 10Z"
              fill="#FBBF24"
            />
          </svg>
        );

      case "doctor-badge":
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs" fill="none">
            <circle cx="32" cy="32" r="24" fill="#FFFFFF" stroke="#086287" strokeWidth="2.5" />
            <circle cx="32" cy="32" r="20" fill="#086287" />
            <path
              d="M32 18L35.5 25.5L44 26.8L37.8 33L39.2 41.5L32 37.3L24.8 41.5L26.2 33L20 26.8L28.5 25.5L32 18Z"
              fill="#FBBF24"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            <circle cx="32" cy="31" r="3" fill="#FFFFFF" />
          </svg>
        );

      case "sterile-shield":
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs" fill="none">
            <path
              d="M32 6L14 14V30C14 43 21.5 53 32 58C42.5 53 50 43 50 30V14L32 6Z"
              fill="#FFFFFF"
              stroke="#086287"
              strokeWidth="2.5"
            />
            <path
              d="M24 32L30 38L42 26"
              stroke="#10B981"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="32" cy="18" r="3" fill="#38BDF8" />
          </svg>
        );

      case "tooth-sparkle":
      default:
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-xs" fill="none">
            <path
              d="M16 22C16 14 21 10 27 10C30 10 31.5 11.5 32 11.5C32.5 11.5 34 10 37 10C43 10 48 14 48 22C48 32 44 43 39.5 52C38 55 35 55 34 50.5L32 42L30 50.5C29 55 26 55 24.5 52C20 43 16 32 16 22Z"
              fill="#FFFFFF"
              stroke="#086287"
              strokeWidth="2.5"
            />
            <path
              d="M25 27C27.5 30.5 36.5 30.5 39 27"
              stroke="#086287"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="24" cy="22" r="2" fill="#086287" />
            <circle cx="40" cy="22" r="2" fill="#086287" />
            <path
              d="M50 8L52 14L58 16L52 18L50 24L48 18L42 16L48 14L50 8Z"
              fill="#FBBF24"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={`inline-flex items-center bg-gradient-to-br ${theme.bg} ${sizeClasses[size]} ${rotate} border-[4px] border-white ring-2 ${theme.ring} shadow-[0_10px_25px_-5px_rgba(19,46,83,0.35),0_4px_10px_-2px_rgba(0,0,0,0.12)] hover:rotate-0 hover:scale-105 transition-all duration-300 select-none ${className}`}
    >
      <div className={`${iconSizes[size]} shrink-0 bg-white/20 rounded-2xl p-1 backdrop-blur-xs`}>
        {renderArtwork()}
      </div>
      {(label || sublabel) && (
        <div className="leading-tight text-left pr-1">
          {sublabel && (
            <span className={`block text-[9px] font-black uppercase tracking-widest ${theme.subText}`}>
              {sublabel}
            </span>
          )}
          {label && (
            <span className={`block text-xs sm:text-sm font-black tracking-tight ${theme.badgeText}`}>
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default DentalSticker;
