export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function otherLocale(locale: Locale) {
  return locale === "tr" ? "en" : "tr";
}

export const dictionaries = {
  tr: {
    meta: {
      title: "App Studio Platformu",
      description: "Mobil uygulamalar için çok dilli proje, destek ve politika yönetim platformu."
    },
    nav: {
      home: "Ana sayfa",
      projects: "Projeler",
      about: "Hakkımızda",
      support: "Destek",
      contact: "İletişim",
      admin: "Admin"
    },
    common: {
      viewProject: "Projeyi incele",
      support: "Destek",
      privacy: "Gizlilik",
      terms: "Şartlar",
      deleteAccount: "Hesap silme",
      suggestions: "Öneriler",
      faq: "SSS",
      published: "Yayında",
      draft: "Taslak",
      archived: "Arşiv",
      search: "Uygulama ara",
      all: "Tümü",
      send: "Gönder",
      success: "Mesajınız alındı.",
      storeLinks: "Mağaza bağlantıları",
      policyLinks: "Politika bağlantıları"
    },
    home: {
      eyebrow: "Çok dilli mobil uygulama merkezi",
      title: "Tüm uygulamalarınızı tek, güvenilir ve ölçeklenebilir platformda yönetin.",
      subtitle:
        "Projelerinizi tanıtın, destek taleplerini toplayın, Play Store ve App Store için gerekli politika sayfalarını uygulama bazında üretin.",
      cta: "Projeleri görüntüle",
      secondary: "Destek merkezine git",
      introTitle: "Modern bir app studio vitrini",
      introText:
        "Bu platform, çok sayıda mobil uygulamayı tek panelden yönetmek için tasarlandı. Her proje kendi açıklamalarına, ekran görüntülerine, destek akışına ve yasal sayfalarına sahip olabilir.",
      valuesTitle: "Neden bu yapı?",
      values: ["TR/EN mimari baştan hazır", "Mağaza uyumluluğu için proje bazlı linkler", "Admin panelde hızlı içerik yönetimi"],
      trustTitle: "Destek ve güven odaklı",
      trustText: "Kullanıcılar doğru uygulama için destek talebi veya öneri gönderebilir; admin paneli tüm girişleri merkezi olarak gösterir.",
      finalCta: "Bir sonraki uygulamanız için altyapı hazır."
    },
    projects: {
      title: "Uygulama projeleri",
      subtitle: "Yayındaki mobil uygulamaları, destek sayfalarını ve mağaza uyumluluk bağlantılarını keşfedin.",
      empty: "Henüz yayınlanan proje yok."
    },
    project: {
      features: "Öne çıkanlar",
      gallery: "Galeri",
      documents: "Mağaza uyumluluk sayfaları",
      contactCta: "Bu uygulama için destek veya öneri gönderin."
    },
    forms: {
      name: "Ad soyad",
      email: "E-posta",
      subject: "Konu",
      message: "Mesaj",
      optional: "İsteğe bağlı",
      supportTitle: "Destek talebi",
      suggestionTitle: "Öneri gönder",
      contactTitle: "Genel iletişim"
    },
    about: {
      title: "Hakkımızda",
      text: "Mobil uygulama ürünlerini tek bir kalite standardıyla yayınlamak, desteklemek ve büyütmek için çalışan bağımsız bir app studio yapısıyız."
    },
    support: {
      title: "Genel destek merkezi",
      text: "Hangi uygulamayla ilgili destek istediğinizi seçebilir veya genel iletişim formunu kullanabilirsiniz."
    },
    legal: {
      privacyTitle: "Genel gizlilik politikası",
      termsTitle: "Genel kullanım şartları",
      defaultText: "Bu sayfa genel bilgilendirme amaçlıdır. Uygulamaya özel politika sayfaları proje detaylarında bulunur."
    }
  },
  en: {
    meta: {
      title: "App Studio Platform",
      description: "A multilingual project, support, and policy platform for mobile apps."
    },
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      support: "Support",
      contact: "Contact",
      admin: "Admin"
    },
    common: {
      viewProject: "View project",
      support: "Support",
      privacy: "Privacy",
      terms: "Terms",
      deleteAccount: "Delete account",
      suggestions: "Suggestions",
      faq: "FAQ",
      published: "Published",
      draft: "Draft",
      archived: "Archived",
      search: "Search apps",
      all: "All",
      send: "Send",
      success: "Your message has been received.",
      storeLinks: "Store links",
      policyLinks: "Policy links"
    },
    home: {
      eyebrow: "Multilingual mobile app hub",
      title: "Manage every app in one trusted, scalable platform.",
      subtitle:
        "Present projects, collect support requests, and generate project-specific policy pages required by Google Play and the App Store.",
      cta: "View projects",
      secondary: "Go to support",
      introTitle: "A modern app studio showcase",
      introText:
        "This platform is designed to manage many mobile apps from one panel. Each project can have its own descriptions, screenshots, support flow, and legal pages.",
      valuesTitle: "Why this structure?",
      values: ["TR/EN architecture from day one", "Project-specific store compliance links", "Fast content management in the admin panel"],
      trustTitle: "Built around trust and support",
      trustText: "Users can submit support requests or suggestions for the right app, while the admin panel centralizes every incoming item.",
      finalCta: "The foundation is ready for your next app."
    },
    projects: {
      title: "App projects",
      subtitle: "Explore published mobile apps, support pages, and store compliance links.",
      empty: "No published projects yet."
    },
    project: {
      features: "Highlights",
      gallery: "Gallery",
      documents: "Store compliance pages",
      contactCta: "Send support or feedback for this app."
    },
    forms: {
      name: "Full name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      optional: "Optional",
      supportTitle: "Support request",
      suggestionTitle: "Send suggestion",
      contactTitle: "General contact"
    },
    about: {
      title: "About",
      text: "We are an independent app studio structure focused on publishing, supporting, and growing mobile products under one quality standard."
    },
    support: {
      title: "General support center",
      text: "Choose the app you need help with or use the general contact form."
    },
    legal: {
      privacyTitle: "General privacy policy",
      termsTitle: "General terms of service",
      defaultText: "This page is for general information. App-specific policy pages are available from project details."
    }
  }
} satisfies Record<Locale, Record<string, unknown>>;

export function t(locale: Locale) {
  return dictionaries[locale];
}
