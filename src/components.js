const PAGE_URL = "https://lupusa87.github.io/public/";

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
            დამოუკიდებელი დეველოპერი - მობილური · ვები · Backend · TypeScript ·
            React Native · Expo.
          </div>
        </div>
      </div>

      <nav class="social-links" aria-label="Social media links">
        <a class="social-button email" href="mailto:VakhtangiAbashidze@gmail.com" aria-label="Send email">
          <span class="material-icons" aria-hidden="true">email</span>
        </a>

        <a class="social-button youtube" href="https://www.youtube.com/@vakhtangiabashidze8559" target="_blank" rel="noopener noreferrer" aria-label="Visit YouTube channel">
          <i class="fa-brands fa-youtube" aria-hidden="true"></i>
        </a>

        <a class="social-button github" href="https://www.github.com/Lupusa87" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile">
          <i class="fa-brands fa-github" aria-hidden="true"></i>
        </a>

        <a class="social-button facebook" href="https://www.facebook.com/share/1JAEXpjttU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Visit Facebook profile">
          <i class="fa-brands fa-facebook" aria-hidden="true"></i>
        </a>

        <a class="social-button x" href="https://x.com/lupusa1" target="_blank" rel="noopener noreferrer" aria-label="Visit X (Twitter) profile">
          <i class="fa-brands fa-x-twitter" aria-hidden="true"></i>
        </a>

        <a class="social-button linkedin" href="https://www.linkedin.com/in/vakhtangi-abashidze-652887140" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">
          <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
        </a>
      </nav>
    </section>
  `;
}

export function renderSocialNetworks() {
  return `
    <section class="social-networks">
      <h2 class="social-networks-name">ლოცვანი „იო“ სოც. ქსელებში</h2>
      <nav class="social-links" aria-label="Social media links">
        <a
          class="social-button facebook"
          href="https://www.facebook.com/locvani"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Facebook page"
        >
          <i class="fa-brands fa-facebook" aria-hidden="true"></i>
        </a>

        <a
          class="social-button youtube"
          href="https://www.youtube.com/playlist?list=PLgZE0RHqetzvvQhheT_kEcRh3GNwutd4M"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit YouTube channel"
        >
          <i class="fa-brands fa-youtube" aria-hidden="true"></i>
        </a>

        <a
          class="social-button instagram"
          href="https://www.instagram.com/locvani/"
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
      <h2 class="share-title">გააზიარე:</h2>
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
          ბმულის კოპირება
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

  if (fb) fb.href = `https://www.facebook.com/sharer/sharer.php?u=${shareLink(url)}`;
  if (x) x.href = `https://twitter.com/intent/tweet?text=${shareText(text)}&url=${shareLink(url)}`;
  if (linkedin) linkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${shareLink(url)}`;
  if (whatsapp) whatsapp.href = `https://wa.me/?text=${shareText(`${text} ${url}`)}`;
  if (telegram) telegram.href = `https://t.me/share/url?url=${shareLink(url)}&text=${shareText(text)}`;

  if (copy) {
    copy.addEventListener("click", async (event) => {
      event.preventDefault();

      try {
        await navigator.clipboard.writeText(url);
        const original = copy.textContent;
        copy.textContent = "კოპირებულია";
        window.setTimeout(() => {
          copy.textContent = original || "ბმულის კოპირება";
        }, 1400);
      } catch {
        const original = copy.textContent;
        copy.textContent = "ვერ დაკოპირდა";
        window.setTimeout(() => {
          copy.textContent = original || "ბმულის კოპირება";
        }, 1400);
      }
    });
  }
}

export { PAGE_URL };
