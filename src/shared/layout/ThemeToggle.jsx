"use client";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div
      onClick={toggleTheme}
      className={`theme-toggle ${theme === "light" ? "light" : ""}`}
    >
      <div className="theme-knob">
        {theme === "dark" ? (
          <svg
            className="theme-icon text-blue-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        ) : (
          <svg
            className="theme-icon text-yellow-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
          </svg>
        )}
      </div>
    </div>
  );
}