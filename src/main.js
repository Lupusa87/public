import "../styles.css";
import "../shareComp/shareComp.css";
import "../profile/styles.css";
import "../socialNetworks/socialNetworks.css";
import { PAGE_URL, initShareSection, renderProfile, renderShareSection, renderSocialNetworks } from "./components.js";

const IOS_URL = "https://apps.apple.com/app/id6754865510";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.lupusa87.ioliLocvani";

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
    if (messageEl) messageEl.textContent = "გადმოწერა iOS:";
    if (appStoreBadge) appStoreBadge.style.display = "inline-block";
    if (playStoreBadge) playStoreBadge.style.display = "none";
  } else if (isAndroid) {
    if (messageEl) messageEl.textContent = "გადმოწერა Android:";
    if (appStoreBadge) appStoreBadge.style.display = "none";
    if (playStoreBadge) playStoreBadge.style.display = "inline-block";
  } else {
    if (messageEl) messageEl.textContent = "აირჩიეთ პლატფორმა:";
    if (appStoreBadge) appStoreBadge.style.display = "inline-block";
    if (playStoreBadge) playStoreBadge.style.display = "inline-block";
  }

  if (appStoreBadge) appStoreBadge.href = IOS_URL;
  if (playStoreBadge) playStoreBadge.href = ANDROID_URL;
}

function mountComponents() {
  const profileContainer = document.getElementById("profile-container");
  const networksContainer = document.getElementById("social-networks-container");
  const shareContainer = document.getElementById("share-section-placeholder");

  if (profileContainer) profileContainer.innerHTML = renderProfile();
  if (networksContainer) networksContainer.innerHTML = renderSocialNetworks();
  if (shareContainer) shareContainer.innerHTML = renderShareSection();

  initShareSection({
    title: "ლოცვანი „იო“ს გადმოწერა",
    url: PAGE_URL,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mountComponents();
  setupPlatformUI();
});
