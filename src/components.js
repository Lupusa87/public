import { LINKS } from "./links.js";
import { t } from "./mainI18n.js";

function shareLink(url) {
  return encodeURIComponent(url);
}

function shareText(text) {
  return encodeURIComponent(text);
}

export function renderProfile() {
  return `
    <section class="profile">
      <div class="profile-header">
        <div class="avatar-circle" aria-hidden="true">VA</div>
        <div>
          <div class="profile-name">ვახტანგ აბაშიძე - Vakhtangi Abashidze</div>
          <div class="profile-description">
            ${t("profileDescription")}
          </div>
        </div>
      </div>

      <nav class="social-links" aria-label="Social media links">
        <a class="social-button email" href="${LINKS.profile.email}" aria-label="Send email">
          <span class="material-icons" aria-hidden="true">email</span>
        </a>

        <a class="social-button youtube" href="${LINKS.profile.youtube}" target="_blank" rel="noopener noreferrer" aria-label="Visit YouTube channel">
          <i class="fa-brands fa-youtube" aria-hidden="true"></i>
        </a>

        <a class="social-button github" href="${LINKS.profile.github}" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile">
          <i class="fa-brands fa-github" aria-hidden="true"></i>
        </a>

        <a class="social-button facebook" href="${LINKS.profile.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Visit Facebook profile">
          <i class="fa-brands fa-facebook" aria-hidden="true"></i>
        </a>

        <a class="social-button x" href="${LINKS.profile.x}" target="_blank" rel="noopener noreferrer" aria-label="Visit X (Twitter) profile">
          <i class="fa-brands fa-x-twitter" aria-hidden="true"></i>
        </a>

        <a class="social-button linkedin" href="${LINKS.profile.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">
          <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
        </a>
      </nav>
    </section>
  `;
}

export function renderSocialNetworks() {
  return `
    <section class="social-networks">
      <h2 class="social-networks-name">${t("socialTitle")}</h2>
      <nav class="social-links" aria-label="Social media links">
        <a
          class="social-button facebook"
          href="${LINKS.appSocial.facebook}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Facebook page"
        >
          <i class="fa-brands fa-facebook" aria-hidden="true"></i>
        </a>

        <a
          class="social-button youtube"
          href="${LINKS.appSocial.youtube}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit YouTube channel"
        >
          <i class="fa-brands fa-youtube" aria-hidden="true"></i>
        </a>

        <a
          class="social-button instagram"
          href="${LINKS.appSocial.instagram}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Instagram page"
        >
          <i class="fa-brands fa-instagram" aria-hidden="true"></i>
        </a>
      </nav>
    </section>
  `;
}

export function renderShareSection() {
  return `
    <section class="share-section">
      <h2 class="share-title">${t("shareTitle")}</h2>
      <nav class="share-links" aria-label="Share on social media">
        <a class="share-button fb" aria-label="Share on Facebook">
          <i class="fa-brands fa-facebook" aria-hidden="true"></i>
        </a>

        <a class="share-button x" aria-label="Share on X (Twitter)">
          <i class="fa-brands fa-x-twitter" aria-hidden="true"></i>
        </a>

        <a class="share-button linkedin" aria-label="Share on LinkedIn">
          <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
        </a>

        <a class="share-button whatsapp" aria-label="Share on WhatsApp">
          <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
        </a>

        <a class="share-button telegram" aria-label="Share on Telegram">
          <i class="fa-brands fa-telegram" aria-hidden="true"></i>
        </a>

        <a class="share-button copylink" href="#" aria-label="Copy link to clipboard">
          <i class="fa-solid fa-link" aria-hidden="true"></i>
          ${t("copyLink")}
        </a>
      </nav>
    </section>
  `;
}

export function initShareSection({ title, url }) {
  const root = document.querySelector(".share-section");
  if (!root) {
    return;
  }

  const fb = root.querySelector(".share-button.fb");
  const x = root.querySelector(".share-button.x");
  const linkedin = root.querySelector(".share-button.linkedin");
  const whatsapp = root.querySelector(".share-button.whatsapp");
  const telegram = root.querySelector(".share-button.telegram");
  const copy = root.querySelector(".share-button.copylink");
  const text = title || "Share";

  if (fb) fb.href = LINKS.share.facebook(shareLink(url));
  if (x) x.href = LINKS.share.x(shareLink(url), shareText(text));
  if (linkedin) linkedin.href = LINKS.share.linkedin(shareLink(url));
  if (whatsapp) whatsapp.href = LINKS.share.whatsapp(shareText(`${text} ${url}`));
  if (telegram) telegram.href = LINKS.share.telegram(shareLink(url), shareText(text));

  if (copy) {
    copy.addEventListener("click", async (event) => {
      event.preventDefault();

      try {
        await navigator.clipboard.writeText(url);
        const original = copy.textContent;
        copy.textContent = t("copied");
        window.setTimeout(() => {
          copy.textContent = original || t("copyLink");
        }, 1400);
      } catch {
        const original = copy.textContent;
        copy.textContent = t("copyFailed");
        window.setTimeout(() => {
          copy.textContent = original || t("copyLink");
        }, 1400);
      }
    });
  }
}
