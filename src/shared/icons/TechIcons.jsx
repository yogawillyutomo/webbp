"use client";

/* ================= SOCIAL ICONS ================= */

export function GitHubIcon({ className = "w-5 h-5 text-white" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008.2 10.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.2.8-1.5-2.7-.3-5.5-1.3-5.5-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0C17.5 3.7 18.5 4 18.5 4c.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.5 5.8.4.4.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
    </svg>
  );
}

export function LinkedInIcon({ className = "w-5 h-5 text-white" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h4v1.7h.1c.6-1 2-2.1 4.1-2.1C21 8.6 21 11 21 14v7h-4v-6c0-1.4 0-3-1.9-3s-2.2 1.5-2.2 2.9V21H9z"/>
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5 text-white" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 6a4 4 0 110 8 4 4 0 010-8zm6.5-.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
    </svg>
  );
}

export function EyeIcon(){
  return(
    <svg
  className="w-5 h-5 text-cyan-400"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z"
  />
  <circle
    cx="12"
    cy="12"
    r="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
  )
}


/* ✉️ EMAIL ICON */
export function EmailIcon({ className = "w-5 h-5 text-blue-400" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}


/* 🔥 X / Twitter (new logo) */
export function XIcon({ className = "w-5 h-5 text-white" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2H21l-6.48 7.41L22 22h-6.9l-5.4-7.06L3.5 22H1l6.92-7.91L2 2h6.95l4.86 6.5L18.244 2z"/>
    </svg>
  );
}

export function WhatsAppIcon({
  className = "w-5 h-5 text-white",
}) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Circle */}
      <circle cx="12" cy="12" r="8" />

      {/* Tail */}
      <path d="M8.8 18.8L7.5 22l3.1-1.1" />

      {/* Cleaner phone glyph */}
      <path d="M9.5 8.5c.6 2 2.4 3.8 4.4 4.4l.9-.9c.2-.2.5-.2.7 0l1.2 1.2c.2.2.2.5 0 .7-.8.8-1.9 1.1-3.4.7-2.7-.9-4.8-3-5.7-5.7-.4-1.5-.1-2.6.7-3.4.2-.2.5-.2.7 0l1.2 1.2c.2.2.2.5 0 .7l-.7.7z" />
    </svg>
  );
}



export const CodeIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const BrainIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M9 3a4 4 0 00-4 4v1a4 4 0 004 4m6-9a4 4 0 014 4v1a4 4 0 01-4 4M9 12h6M9 16h6" />
  </svg>
);

export const CloudIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M16 16a4 4 0 10-8 0H6a3 3 0 010-6 5 5 0 0110-1 4 4 0 010 7z" />
  </svg>
);

export const ChipIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="7" y="7" width="10" height="10" rx="2"/>
    <path d="M3 9h4M3 15h4M17 3v4M17 17v4M9 3v4M15 3v4"/>
  </svg>
);

export const LayoutIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h18M9 21V9"/>
  </svg>
);

export const PhoneIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="7" y="2" width="10" height="20" rx="2"/>
    <circle cx="12" cy="18" r="1"/>
  </svg>
);

export const ChartIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 3v18h18"/>
    <path d="M18 9l-5 5-4-4-4 4"/>
  </svg>
);

export const TrophyIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M8 21h8M12 17v4"/>
    <path d="M6 3h12v5a6 6 0 01-12 0V3z"/>
    <path d="M6 8H4a2 2 0 01-2-2V5h4M18 8h2a2 2 0 002-2V5h-4"/>
  </svg>
);

export const LearningIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10L12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5a6 3 0 0012 0v-5" />
  </svg>
);
// export const LearningIcon = () => (
//   <svg
//     className="w-5 h-5 text-white"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     viewBox="0 0 24 24"
//   >
//     <path d="M4 4h16v16H4z" />
//     <path d="M8 8h8M8 12h6M8 16h4" />
//   </svg>
// );