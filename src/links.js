// Single source of truth for every link used in the project.
// Edit URLs here only. JS files import from this module; HTML files use
// {{links.<path>}} placeholders that vite.config.js replaces at build/dev time.

export const SITE_URL = "https://lupusa87.github.io/public/";

export const LINKS = {
  site: {
    home: SITE_URL,
    support: `${SITE_URL}support.html`,
  },

  app: {
    ios: "https://apps.apple.com/app/id6754865510",
    iosAppId: "6754865510",
    android: "https://play.google.com/store/apps/details?id=com.lupusa87.ioliLocvani",
    androidPackage: "com.lupusa87.ioliLocvani",
    androidDeepLink: `android-app://com.lupusa87.ioliLocvani/https/lupusa87.github.io/public/`,
  },

  // App ("ლოცვანი „იო“") social pages
  appSocial: {
    facebook: "https://www.facebook.com/locvani",
    youtube: "https://www.youtube.com/playlist?list=PLKy-55xqGvhU",
    instagram: "https://www.instagram.com/locvani/",
  },

  // Developer's personal profiles
  profile: {
    email: "mailto:VakhtangiAbashidze@gmail.com",
    youtube: "https://www.youtube.com/@MrLupusa",
    github: "https://www.github.com/Lupusa87",
    facebook: "https://www.facebook.com/share/1JAEXpjttU/?mibextid=wwXIfr",
    x: "https://x.com/lupusa1",
    linkedin: "https://www.linkedin.com/in/vakhtangi-abashidze-652887140",
  },

  // Donations
  support: {
    tbc: "https://tbconline.ge/",
    tbcIban: "GE02TB7839545064300127",
    stripe: "https://stripe.com/",
    stripeOneTime: "https://donate.stripe.com/3cIaEX8UA8Nc426bYU93y00",
    stripeMonthly: "https://buy.stripe.com/eVq6oHgn24wWdCG0gc93y01",
  },

  // Share-intent URL builders (take already-encoded url/text)
  share: {
    facebook: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    x: (url, text) => `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    linkedin: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    whatsapp: (text) => `https://wa.me/?text=${text}`,
    telegram: (url, text) => `https://t.me/share/url?url=${url}&text=${text}`,
  },

  // Third-party resources & tracking
  external: {
    materialIcons: "https://fonts.googleapis.com/icon?family=Material+Icons",
    fontAwesome: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
    gtagId: "G-92F4MNC5VL",
    gtagScript: "https://www.googletagmanager.com/gtag/js?id=G-92F4MNC5VL",
    visitorApi: "https://visitor.6developer.com",
  },
};
