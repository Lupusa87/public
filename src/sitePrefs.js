// Theme and language choices shared by the main page and support.html (same origin, one localStorage): a switch on either page sets both.
// The keys keep the names support.html already used, so earlier choices are not lost.
export const THEME_KEY = "support-page-theme";
export const LANGUAGE_KEY = "support-page-language";

const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function read(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage blocked: the choice lasts until the page closes.
  }
}

/** "light" or "dark": the saved choice, else the system setting. */
export function currentTheme() {
  const saved = read(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return darkQuery.matches ? "dark" : "light";
}

export function applyTheme() {
  document.documentElement.dataset.theme = currentTheme();
}

export function saveTheme(theme) {
  write(THEME_KEY, theme);
  applyTheme();
}

/** Follows the system setting while no choice is saved. */
export function watchSystemTheme(onChange) {
  darkQuery.addEventListener("change", () => {
    applyTheme();
    onChange();
  });
}

export function currentLanguage() {
  const saved = read(LANGUAGE_KEY);
  return saved === "en" ? "en" : "ka";
}

export function saveLanguage(language) {
  write(LANGUAGE_KEY, language === "en" ? "en" : "ka");
}
