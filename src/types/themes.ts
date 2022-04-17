export const themes = ["dark-theme", "light-theme"];
export type Theme = typeof themes[number];

export function getPreferredTheme(): Theme {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  return hasDarkPreference ? "dark-theme" : "light-theme";
}

export function getTheme() {
  return localStorage.getItem("user-theme");
}

export function setTheme(theme: Theme) {
  if (themes.includes(theme)) {
    localStorage.setItem("user-theme", theme);
    document.documentElement.className = theme;
  }
}
