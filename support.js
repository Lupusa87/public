const PAYMENT_LINKS = {
  oneTime: "https://donate.stripe.com/3cIaEX8UA8Nc426bYU93y00",
  monthly: "https://buy.stripe.com/eVq6oHgn24wWdCG0gc93y01",
};

const STORAGE_KEY = "support-page-language";

const translations = {
  ka: {
    title: "ვახტანგ აბაშიძე",
    pageTitle: "დეველოპერის მხარდაჭერა - Vakhtangi Abashidze",
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

bindLanguageButtons();
bindPaymentLinks();
bindOptionSelection();
setLanguage(getInitialLanguage());
