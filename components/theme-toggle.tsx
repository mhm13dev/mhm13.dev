"use client";

import { useTheme } from "next-themes";
import { useIsClient } from "usehooks-ts";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isClient = useIsClient();

  // Don't render anything until mounted on client to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="h-9 w-9 rounded-md border border-neutral-200 dark:border-neutral-800 bg-transparent" />
    );
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return "☀️";
      case "dark":
        return "🌙";
      case "system":
        return "💻";
      default:
        return "💻";
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      case "system":
        return "System";
      default:
        return "System";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-9 w-9 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 bg-transparent"
      title={`Switch to ${
        theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
      } mode`}
    >
      <span className="sr-only">Toggle theme</span>
      <span className="text-base" role="img" aria-label={getThemeLabel()}>
        {getThemeIcon()}
      </span>
    </button>
  );
}
