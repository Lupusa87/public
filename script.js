// ============================================================================
// IoliLocvani Download Page: Visitor Counter + Platform UI
// ============================================================================

// App store URLs
const IOS_URL = "https://apps.apple.com/app/id6754865510";
const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.lupusa87.ioliLocvani";

// Visitor Counter API base (CORS enabled)
const VISITOR_API_BASE = "https://visitor.6developer.com";
const VISITOR_API_TIMEOUT_MS = 8000;
const VISITOR_CACHE_KEY = "iolilocvani-visitor-counts";
const PROD_VISITOR_DOMAIN = "iolilocvani-download-page";
const LOCAL_VISITOR_DOMAIN = "vakhtangi-iolilocvani-download-local";

// ============================================================================
// VISITOR COUNTER (Today + Total)
// ============================================================================

function getVisitorDomain() {
  const hostName = window.location.hostname;

  return hostName === "localhost" || hostName === "127.0.0.1" || hostName === ""
    ? LOCAL_VISITOR_DOMAIN
    : PROD_VISITOR_DOMAIN;
}

function getVisitorPayload(domain) {
  return {
    domain,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    page_path: window.location.pathname,
    page_title: document.title,
    referrer: document.referrer || "",
  };
}

function normalizeVisitorCounts(data) {
  if (!data || typeof data !== "object") {
    return null;
  }

  const totalCount =
    typeof data.totalCount === "number" && Number.isFinite(data.totalCount)
      ? data.totalCount
      : null;
  const todayCount =
    typeof data.todayCount === "number" && Number.isFinite(data.todayCount)
      ? data.todayCount
      : null;

  if (totalCount === null || todayCount === null) {
    return null;
  }

  return { totalCount, todayCount };
}

function formatVisitorCounts(counts) {
  return `${counts.todayCount}/${counts.totalCount}`;
}

function renderVisitorText(counterEl, text) {
  counterEl.textContent = text;
}

function readCachedVisitorCounts() {
  try {
    const raw = window.localStorage.getItem(VISITOR_CACHE_KEY);
    if (!raw) {
      return null;
    }

    return normalizeVisitorCounts(JSON.parse(raw));
  } catch (error) {
    console.warn("Failed to read cached visitor counts:", error);
    return null;
  }
}

function writeCachedVisitorCounts(counts) {
  try {
    window.localStorage.setItem(VISITOR_CACHE_KEY, JSON.stringify(counts));
  } catch (error) {
    console.warn("Failed to cache visitor counts:", error);
  }
}

async function fetchVisitorJson(url, options = {}) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => {
    controller.abort();
  }, VISITOR_API_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Visitor API error: ${response.status}`);
    }

    return response.json();
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function updateVisitorCount() {
  const counterEl = document.getElementById("visitCount");
  if (!counterEl) {
    return;
  }

  const domain = getVisitorDomain();
  const payload = getVisitorPayload(domain);
  const cachedCounts = readCachedVisitorCounts();

  renderVisitorText(counterEl, cachedCounts ? formatVisitorCounts(cachedCounts) : "...");

  try {
    const data = await fetchVisitorJson(`${VISITOR_API_BASE}/visit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const counts = normalizeVisitorCounts(data);

    if (!counts) {
      throw new Error("Visitor API returned an unexpected payload");
    }

    writeCachedVisitorCounts(counts);
    renderVisitorText(counterEl, formatVisitorCounts(counts));
    return;
  } catch (err) {
    console.warn("Visitor count POST failed, trying read-only fallback:", err);
  }

  try {
    const data = await fetchVisitorJson(
      `${VISITOR_API_BASE}/visit?domain=${encodeURIComponent(domain)}`
    );
    const counts = normalizeVisitorCounts(data);

    if (!counts) {
      throw new Error("Visitor stats fallback returned an unexpected payload");
    }

    writeCachedVisitorCounts(counts);
    renderVisitorText(counterEl, formatVisitorCounts(counts));
  } catch (err) {
    console.error("Failed to update visitor count:", err);
    if (cachedCounts) {
      renderVisitorText(counterEl, formatVisitorCounts(cachedCounts));
      return;
    }

    renderVisitorText(counterEl, "--/--");
  }
}

// ============================================================================
// PLATFORM DETECTION + UI SETUP (NO AUTO-OPEN)
// ============================================================================

async function setupPlatformUI() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Visitor counter code is intentionally preserved but disabled for now.
  // Restore by bringing back the markup in index.html and re-enabling this call.
  // void updateVisitorCount();

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
