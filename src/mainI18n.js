import { currentLanguage, saveLanguage } from "./sitePrefs.js";

// Texts of the main page (index.html, src/main.js, src/components.js). The support page has its own table in support.js.
export const translations = {
  ka: {
    appName: "ლოცვანი „იო“",
    tagline: "მართლმადიდებლური მობილური აპლიკაცია",
    free: "უფასო და რეგისტრაციის გარეშე",
    support: "დეველოპერის მხარდაჭერა",
    redirecting: "მიმდინარეობს გადამისამართება...",
    downloadIos: "გადმოწერა iOS:",
    downloadAndroid: "გადმოწერა Android:",
    choosePlatform: "აირჩიეთ პლატფორმა:",
    openInBrowser: "გახსენით ბრაუზერში",
    scanQr: "გადმოსაწერად\nდაასკანერეთ ტელეფონით",
    socialTitle: "ლოცვანი „იო“ სოც. ქსელებში",
    shareTitle: "გააზიარე:",
    copyLink: "ბმულის კოპირება",
    copied: "კოპირებულია",
    copyFailed: "ვერ დაკოპირდა",
    shareText: "ლოცვანი „იო“ს გადმოწერა",
    profileDescription: "დამოუკიდებელი დეველოპერი - მობილური · ვები · Backend · TypeScript · React Native · Expo.",
    themeToDark: "ბნელი რეჟიმის ჩართვა",
    themeToLight: "ნათელი რეჟიმის ჩართვა",
    toEnglish: "Show in English",
    toGeorgian: "ქართულად ჩვენება",
  },
  en: {
    appName: "Locvani Io",
    tagline: "Eastern Orthodox Christian mobile app",
    free: "Free, no registration",
    support: "Support the developer",
    redirecting: "Redirecting...",
    downloadIos: "Download for iOS:",
    downloadAndroid: "Download for Android:",
    choosePlatform: "Choose a platform:",
    openInBrowser: "Open in browser",
    scanQr: "Scan with your phone\nto download",
    socialTitle: "Locvani Io on social media",
    shareTitle: "Share:",
    copyLink: "Copy link",
    copied: "Copied",
    copyFailed: "Could not copy",
    shareText: "Download Locvani Io",
    profileDescription: "Independent developer - mobile · web · backend · TypeScript · React Native · Expo.",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    toEnglish: "Show in English",
    toGeorgian: "ქართულად ჩვენება",
  },
};

let language = currentLanguage();

export function t(key) {
  return translations[language][key] ?? translations.ka[key] ?? key;
}

export function getLanguage() {
  return language;
}

export function setLanguage(next) {
  language = next === "en" ? "en" : "ka";
  saveLanguage(language);
  document.documentElement.lang = language;
}

/** Fills the static elements marked data-i18n. */
export function applyStaticTexts() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
}
