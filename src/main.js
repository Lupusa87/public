import "../styles.css";
import "../shareComp/shareComp.css";
import "../profile/styles.css";
import "../socialNetworks/socialNetworks.css";
import { LINKS, SITE_URL } from "./links.js";
import { initShareSection, renderProfile, renderShareSection, renderSocialNetworks } from "./components.js";
import { applyStaticTexts, getLanguage, setLanguage, t } from "./mainI18n.js";
import { applyTheme, currentTheme, saveTheme, watchSystemTheme } from "./sitePrefs.js";

function getVisitorDomain() {
  const hostName = window.location.hostname;

  return hostName === "localhost" || hostName === "127.0.0.1" || hostName === ""
    ? "vakhtangi-iolilocvani-download-local"
    : "iolilocvani-download-page";
}

function setupPlatformUI() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isIOS = /iPhone|iPod/.test(userAgent) && !window.MSStream;
  const isAndroid = /Android/i.test(userAgent);

  const loader = document.querySelector(".loader");
  const messageEl = document.getElementById("message");
  const fallbackEl = document.getElementById("fallback");
  const appStoreBadge = document.querySelector(".app-store-badge");
  const playStoreBadge = document.querySelector(".play-store-badge");

  if (loader) loader.style.display = "none";
  if (fallbackEl) fallbackEl.style.display = "block";

  if (isIOS) {
    if (messageEl) messageEl.textContent = t("downloadIos");
    if (appStoreBadge) appStoreBadge.style.display = "inline-block";
    if (playStoreBadge) playStoreBadge.style.display = "none";
  } else if (isAndroid) {
    if (messageEl) messageEl.textContent = t("downloadAndroid");
    if (appStoreBadge) appStoreBadge.style.display = "none";
    if (playStoreBadge) playStoreBadge.style.display = "inline-block";
  } else {
    if (messageEl) messageEl.textContent = t("choosePlatform");
    if (appStoreBadge) appStoreBadge.style.display = "inline-block";
    if (playStoreBadge) playStoreBadge.style.display = "inline-block";
  }

  if (appStoreBadge) appStoreBadge.href = LINKS.app.ios;
  if (playStoreBadge) playStoreBadge.href = LINKS.app.android;
}

function mountComponents() {
  const profileContainer = document.getElementById("profile-container");
  const networksContainer = document.getElementById("social-networks-container");
  const shareContainer = document.getElementById("share-section-placeholder");

  if (profileContainer) profileContainer.innerHTML = renderProfile();
  if (networksContainer) networksContainer.innerHTML = renderSocialNetworks();
  if (shareContainer) shareContainer.innerHTML = renderShareSection();

  initShareSection({
    title: t("shareText"),
    url: SITE_URL,
  });
}

function renderSwitches() {
  const themeButton = document.getElementById("theme-toggle");
  const languageButton = document.getElementById("language-toggle");
  if (themeButton) {
    const dark = currentTheme() === "dark";
    themeButton.textContent = dark ? "☀️" : "🌙";
    themeButton.setAttribute("aria-label", dark ? t("themeToLight") : t("themeToDark"));
  }
  if (languageButton) {
    const toEnglish = getLanguage() === "ka";
    languageButton.textContent = toEnglish ? "🇺🇸" : "🇬🇪";
    languageButton.setAttribute("aria-label", toEnglish ? t("toEnglish") : t("toGeorgian"));
  }
}

function render() {
  applyStaticTexts();
  mountComponents();
  setupPlatformUI();
  renderSwitches();
}

function bindQrDialog() {
  const fab = document.querySelector(".qr-fab");
  const dialog = document.getElementById("qr-dialog");
  if (!fab || !dialog?.showModal) return;
  fab.addEventListener("click", () => dialog.showModal());
  // Closes on its X, on a tap outside, or once the window is wide enough for the card.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest(".qr-close")) dialog.close();
  });
  window.addEventListener("resize", () => {
    if (dialog.open && window.innerWidth >= 1350) dialog.close();
  });
}

function bindSwitches() {
  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    saveTheme(currentTheme() === "dark" ? "light" : "dark");
    renderSwitches();
  });
  document.getElementById("language-toggle")?.addEventListener("click", () => {
    setLanguage(getLanguage() === "ka" ? "en" : "ka");
    render();
  });
  watchSystemTheme(renderSwitches);
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  bindSwitches();
  bindQrDialog();
  render();
});
