import { LINKS } from "./src/links.js";

const PAYMENT_LINKS = {
  oneTime: LINKS.support.stripeOneTime,
  monthly: LINKS.support.stripeMonthly,
};

const STORAGE_KEY = "support-page-language";

const translations = {
  ka: {
    title: "ვახტანგ აბაშიძე",
    pageTitle: "დეველოპერის მხარდაჭერა - Vakhtangi Abashidze",
    personalTab: "საბანკო გადარიცხვა",
    cardTab: "პლასტიკური ბარათი",
    personalTitle: "მხარდაჭერა ნებისმიერი ქართული ბანკიდან",
    personalDescription:
      "თანხის გადმორიცხვა შეგიძლიათ წამებში, თქვენი მობილბანკიდან ან ინტერნეტბანკიდან, IBAN-ის გამოყენებით.",
    personalInstructions:
      "გახსენით თქვენი ბანკის მობილბანკი ან ინტერნეტბანკი, აირჩიეთ გადარიცხვა სხვა ბანკში (TBC-ში გადარიცხვისას - TBC-ში), ჩასვით ქვემოთ მოცემული IBAN და მიუთითეთ თქვენთვის სასურველი თანხა.",
    recipientLabel: "მიმღების სახელი",
    recipientName: "ვახტანგ აბაშიძე",
    bankLabel: "ბანკი",
    ibanLabel: "IBAN",
    copyIban: "კოპირება",
    copiedIban: "დაკოპირდა ✓",
    themeToDark: "ბნელი რეჟიმის ჩართვა",
    themeToLight: "ნათელი რეჟიმის ჩართვა",
    kicker: "დეველოპერის მხარდაჭერა",
    subtitle:
      "დამოუკიდებელი დეველოპერი - მობილური · ვები · Backend · TypeScript · React Native · Expo.",
    lead: "თქვენი მხარდაჭერა მეხმარება გავაგრძელო აპებისა და ახალი პროექტების შექმნა. გმადლობთ.",
    leadExtra:
      "თუ არ შეგიძლიათ ფინანსური დახმარება, გთხოვთ მომიხსენიოთ თქვენს ლოცვებში, ასევე მხარი დამიჭიროთ ჩემი პროექტების გავრცელებაში.",
    paymentInstructionBefore:
      "შეგიძლიათ გადაიხადოთ ნებისმიერი პლასტიკური ბარათით. სწრაფი და უსაფრთხო გადახდა ხორციელდება",
    paymentInstructionAfter: "-ის მეშვეობით.",
    monthlySupportNote:
      "სასურველია მცირე, მაგრამ ყოველთვიური დონაციები. უკეთესია პატარა, მაგრამ რეგულარული მხარდაჭერა, ვიდრე ერთჯერადი და შემთხვევითი.",
    projectTitle: "მიმდინარე პროექტი: ლოცვანი „იო“",
    projectText: "უფასო მართლმადიდებლური აპლიკაცია iOS და Android-ისთვის.",
    oneTimeLabel: "ერთჯერადი",
    oneTimeTitle: "ერთჯერადი მხარდაჭერა",
    oneTimeText: "შეგიძლიათ აირჩიოთ თქვენთვის საურველი თანხა.",
    buttonGo: "გადასვლა",
    oneTimeButtonAria: "გახსენი ერთჯერადი მხარდაჭერა",
    monthlyLabel: "ყოველთვიური",
    monthlyTitle: "ყოველთვიური მხარდაჭერა",
    monthlyText:
      "აირჩიეთ რაოდენობა სასურველი ყოველთვიური თანხის ასარჩევად.\n1$ x თქვენს მიერ მითითებული რ-ბა",
    recommendedBadge: "რეკომენდირებული",
    monthlyButtonAria: "გახსენი ყოველთვიური მხარდაჭერა",
    flowTitle: "როგორ ხდება დონაცია:",
    flowStepOne: "აირჩიეთ ერთჯერადი ან ყოველთვიური მხარდაჭერა.",
    flowStepTwoBefore: "გაიხსნება ",
    flowStepTwoAfter: "-ის უსაფრთხო გადახდის გვერდი.",
    flowStepThree: "აირჩიეთ თანხა და დაასრულეთ გადახდა.",
  },
  en: {
    title: "Vakhtangi Abashidze",
    pageTitle: "Support the Developer - Vakhtangi Abashidze",
    personalTab: "Bank transfer",
    cardTab: "Support by card",
    personalTitle: "Support from any Georgian bank",
    personalDescription:
      "Send support in seconds from your mobile or online banking using the IBAN below.",
    personalInstructions:
      "Open your bank's mobile or online banking, choose a transfer to another bank (or within TBC), paste the IBAN below and enter any amount you like.",
    recipientLabel: "Recipient name",
    recipientName: "Vakhtangi Abashidze",
    bankLabel: "Bank",
    ibanLabel: "IBAN",
    copyIban: "Copy",
    copiedIban: "Copied ✓",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    kicker: "Support the developer",
    subtitle:
      "Independent developer - mobile · web · backend · TypeScript · React Native · Expo.",
    lead: "Your support helps me continue building apps and new projects. Thank you.",
    leadExtra:
      "If you cannot help financially, please keep me in your prayers and support my projects by sharing them.",
    paymentInstructionBefore:
      "You can pay with any plastic card. Fast and secure checkout is powered by",
    paymentInstructionAfter: ".",
    monthlySupportNote:
      "Small but regular monthly donations are preferred. Consistent support matters more than one-time or occasional gifts.",
    projectTitle: "Current project: Locvani Io",
    projectText: "A free Orthodox Christian prayer app for iOS and Android.",
    oneTimeLabel: "One-time",
    oneTimeTitle: "One-time support",
    oneTimeText: "A good choice if you want to support a specific project or update.",
    buttonGo: "Go",
    oneTimeButtonAria: "Open one-time support",
    monthlyLabel: "Monthly",
    monthlyTitle: "Monthly support",
    monthlyText:
      "Choose the amount for your preferred monthly support.\n$1 x the amount you choose",
    recommendedBadge: "Recommended",
    monthlyButtonAria: "Open monthly support",
    flowTitle: "How donation works",
    flowStepOne: "Choose one-time or monthly support.",
    flowStepTwoBefore: "Fast and secure checkout is powered by ",
    flowStepTwoAfter: ".",
    flowStepThree: "Choose the amount and complete payment.",
  },
};

const THEME_KEY = "support-page-theme";
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function isDarkTheme() {
  const saved = document.documentElement.dataset.theme;
  return saved ? saved === "dark" : darkQuery.matches;
}

function renderThemeButton() {
  const button = document.getElementById("theme-toggle");
  if (!button) {
    return;
  }

  const text = translations[document.documentElement.lang] || translations.ka;
  const dark = isDarkTheme();
  button.textContent = dark ? "☀️" : "🌙";
  button.setAttribute("aria-label", dark ? text.themeToLight : text.themeToDark);
}

function bindThemeToggle() {
  const button = document.getElementById("theme-toggle");
  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    const next = isDarkTheme() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {}
    renderThemeButton();
  });

  darkQuery.addEventListener("change", renderThemeButton);
}

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);

  if (savedLanguage === "ka" || savedLanguage === "en") {
    return savedLanguage;
  }

  return "ka";
}

function setLanguage(language) {
  const current = translations[language] ? language : "ka";
  const text = translations[current];
  const languageButton = document.querySelector("[data-language]");

  document.documentElement.lang = current;
  document.title = text.pageTitle;
  window.localStorage.setItem(STORAGE_KEY, current);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key && text[key]) {
      element.textContent = text[key];
    }
  });

  document.querySelectorAll("[data-button-label]").forEach((button) => {
    const key = button.dataset.buttonLabel;
    if (key && text[key]) {
      button.setAttribute("aria-label", text[key]);
    }
  });

  renderThemeButton();

  if (languageButton) {
    const nextLanguage = current === "ka" ? "en" : "ka";
    languageButton.dataset.language = nextLanguage;
    languageButton.textContent = nextLanguage === "en" ? "🇺🇸" : "🇬🇪";
    languageButton.setAttribute(
      "aria-label",
      nextLanguage === "en" ? "Show in English" : "ქართულად ჩვენება",
    );
  }
}

function bindLanguageButtons() {
  const button = document.querySelector("[data-language]");
  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    const language = button.dataset.language;

    if (language === "ka" || language === "en") {
      setLanguage(language);
    }
  });
}

function bindIbanCopy() {
  const value = document.getElementById("iban-value");
  const button = document.getElementById("copy-iban");
  if (!value || !button) {
    return;
  }

  const iban = LINKS.support.tbcIban;
  value.textContent = iban.replace(/(.{4})/g, "$1 ").trim();

  button.addEventListener("click", async () => {
    const text = translations[document.documentElement.lang] || translations.ka;
    try {
      await navigator.clipboard.writeText(iban);
      button.textContent = text.copiedIban;
    } catch {
      const range = document.createRange();
      range.selectNodeContents(value);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      return;
    }
    setTimeout(() => {
      button.textContent = text.copyIban;
    }, 1800);
  });
}

function bindPaymentLinks() {
  document.querySelectorAll("[data-payment-link]").forEach((link) => {
    const key = link.dataset.paymentLink;
    if (key && PAYMENT_LINKS[key]) {
      link.href = PAYMENT_LINKS[key];
    }
  });
}

function bindOptionSelection() {
  const options = Array.from(document.querySelectorAll("[data-option-card]"));

  if (!options.length) {
    return;
  }

  const setSelected = (selectedKey) => {
    options.forEach((option) => {
      const isSelected = option.dataset.optionCard === selectedKey;
      option.setAttribute("aria-checked", isSelected ? "true" : "false");
    });
  };

  const initialSelected = options.find((option) => option.getAttribute("aria-checked") === "true");
  setSelected(initialSelected?.dataset.optionCard || options[0].dataset.optionCard || "oneTime");

  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("[data-payment-link]")) {
        return;
      }

      const key = option.dataset.optionCard;
      if (key) {
        setSelected(key);
      }
    });

    option.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const key = option.dataset.optionCard;
        if (key) {
          setSelected(key);
        }
      }
    });
  });
}

function bindPaymentTabs() {
  const tabButtons = Array.from(document.querySelectorAll("[data-payment-tab]"));
  const panels = Array.from(document.querySelectorAll("[data-payment-panel]"));

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedMethod = button.dataset.paymentTab;

      tabButtons.forEach((tab) => {
        tab.setAttribute("aria-selected", tab === button ? "true" : "false");
      });

      panels.forEach((panel) => {
        panel.hidden = panel.dataset.paymentPanel !== selectedMethod;
      });
    });
  });
}

bindLanguageButtons();
bindThemeToggle();
bindIbanCopy();
bindPaymentLinks();
bindOptionSelection();
bindPaymentTabs();
setLanguage(getInitialLanguage());
