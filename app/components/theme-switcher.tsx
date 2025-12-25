"use client"

import { useTheme } from "next-themes"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-3 py-1 rounded border"
    >
      Toggle theme
    </button>
  )
}
