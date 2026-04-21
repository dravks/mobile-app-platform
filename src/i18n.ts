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
      title: "Mobilc",
      description: "Mobilc tarafından geliştirilen mobil uygulamalar, destek ve politika sayfaları."
    },
    nav: {
      home: "Ana sayfa",
      projects: "Uygulamalar",
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
      eyebrow: "Mobilc uygulama vitrini",
      title: "Kendi mobil uygulamalarımızı yayınlıyor, destek ve politika sayfalarını tek merkezde sunuyoruz.",
      subtitle:
        "Mobilc; mistik deneyimler, yaratıcı araçlar ve kullanıcı odaklı mobil ürünler geliştiren bağımsız bir app studio’dur. Her uygulama için tanıtım, destek, gizlilik ve mağaza uyumluluk bağlantılarını burada topluyoruz.",
      cta: "Uygulamaları keşfet",
      secondary: "Fall in Mina sayfası",
      introTitle: "Ürünlerimizi mağaza standartlarına hazır sunuyoruz",
      introText:
        "Bu site bir ajans sayfası değil; Mobilc’in kendi yayınladığı uygulamalar için resmi ürün vitrini ve destek merkezidir. Kullanıcılar her uygulamanın açıklamasına, ekran görsellerine, destek formuna ve Play Store/App Store için gerekli yasal bağlantılarına ulaşabilir.",
      valuesTitle: "Mobilc yaklaşımı",
      values: ["Kendi mobil ürünlerimizi geliştiriyoruz", "Her uygulama için ayrı destek ve politika sayfaları", "Türkçe ve İngilizce mağaza uyumluluğu"],
      trustTitle: "Uygulama bazlı güven merkezi",
      trustText: "Gizlilik politikası, kullanım şartları, destek ve hesap silme sayfaları her uygulama için ayrı tutulur. Böylece mağaza linkleri net, kullanıcı desteği düzenli ve ürün bilgileri güncel kalır.",
      finalCta: "Yeni Mobilc uygulamaları bu merkezde yayınlanmaya devam edecek."
    },
    projects: {
      title: "Mobilc uygulamaları",
      subtitle: "Yayındaki mobil ürünlerimizi, destek sayfalarını ve mağaza uyumluluk bağlantılarını keşfedin.",
      empty: "Henüz yayınlanan uygulama yok."
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
      title: "Mobilc",
      description: "Mobile apps, support, and policy pages developed and published by Mobilc."
    },
    nav: {
      home: "Home",
      projects: "Apps",
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
      eyebrow: "Mobilc app showcase",
      title: "We publish our own mobile apps and keep support and policy pages in one official hub.",
      subtitle:
        "Mobilc is an independent app studio building user-focused mobile products, from mystical experiences to creative utilities. This site brings our app pages, support, privacy, and store compliance links together.",
      cta: "Explore apps",
      secondary: "View Fall in Mina",
      introTitle: "Our products are presented with store-ready clarity",
      introText:
        "This is not an agency page. It is the official product showcase and support hub for apps published by Mobilc. Users can access descriptions, visuals, support forms, and legal links required by Google Play and the App Store.",
      valuesTitle: "How Mobilc works",
      values: ["We build and publish our own mobile products", "Each app has dedicated support and policy pages", "Turkish and English store compliance from day one"],
      trustTitle: "An app-specific trust hub",
      trustText: "Privacy policies, terms, support, and account deletion pages are kept separate for each app, so store links are clear and user support stays organized.",
      finalCta: "New Mobilc apps will continue to be published in this hub."
    },
    projects: {
      title: "Mobilc apps",
      subtitle: "Explore our published mobile products, support pages, and store compliance links.",
      empty: "No published apps yet."
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
