// ============================================================================
// IoliLocvani Download Page: Visitor Counter + Platform UI
// ============================================================================

// App store URLs
const IOS_URL = "https://apps.apple.com/app/id6754865510";
const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.lupusa87.ioliLocvani";

// Visitor Counter API base (CORS enabled)
const VISITOR_API_BASE = "https://visitor.6developer.com";

// ============================================================================
// VISITOR COUNTER (Today + Total)
// ============================================================================

async function updateVisitorCount() {
  const counterEl = document.getElementById("visitCount");

  const hostName = window.location.hostname;
  const domain =
    hostName === "localhost" ||
    hostName === "127.0.0.1" ||
    hostName === ""
      ? "vakhtangi-iolilocvani-download-local"
      : "iolilocvani-download-page";

  const payload = {
    domain,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    page_path: window.location.pathname,
    page_title: document.title,
    referrer: document.referrer || "",
  };

  if (counterEl) {
    counterEl.textContent = "...";
  }

  try {
    const res = await fetch(`${VISITOR_API_BASE}/visit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Visitor API error: " + res.status);
    }

    const data = await res.json();

    const total = typeof data.totalCount === "number" ? data.totalCount : 0;
    const today = typeof data.todayCount === "number" ? data.todayCount : 0;

    if (counterEl) {
      counterEl.textContent = `${today}/${total}`;
    }
  } catch (err) {
    console.error("Failed to update visitor count:", err);
    if (counterEl) {
      counterEl.textContent = "შეცდომა";
    }
  }
}

// ============================================================================
// PLATFORM DETECTION + UI SETUP (NO AUTO-OPEN)
// ============================================================================

async function setupPlatformUI() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // 1) Count visit
  await updateVisitorCount();

  // 2) Platform detection
  const isIOS = /iPhone|iPod/.test(userAgent) && !window.MSStream;
  const isAndroid = /Android/i.test(userAgent);

  // 3) Get DOM elements
  const loader = document.querySelector(".loader");
  const messageEl = document.getElementById("message");
  const fallbackEl = document.getElementById("fallback");
  const appStoreBadge = document.querySelector(".app-store-badge");
  const playStoreBadge = document.querySelector(".play-store-badge");

  // 4) Show main UI
  if (loader) loader.style.display = "none";
  if (fallbackEl) fallbackEl.style.display = "block";

  // 5) Show/hide store buttons based on platform
  if (isIOS) {
    if (messageEl) {
      messageEl.textContent = "გადმოწერა iOS:";
    }
    if (appStoreBadge) appStoreBadge.style.display = "inline-block";
    if (playStoreBadge) playStoreBadge.style.display = "none";
  } else if (isAndroid) {
    if (messageEl) {
      messageEl.textContent = "გადმოწერა Android:";
    }
    if (appStoreBadge) appStoreBadge.style.display = "none";
    if (playStoreBadge) playStoreBadge.style.display = "inline-block";
  } else {
    // Desktop / unknown → show both
    if (messageEl) {
      messageEl.textContent = "აირჩიეთ პლატფორმა:";
    }
    if (appStoreBadge) appStoreBadge.style.display = "inline-block";
    if (playStoreBadge) playStoreBadge.style.display = "inline-block";
  }

  // 6) Make sure hrefs are correct (defensive)
  if (appStoreBadge) appStoreBadge.href = IOS_URL;
  if (playStoreBadge) playStoreBadge.href = ANDROID_URL;
}

// Run on load
setupPlatformUI();
