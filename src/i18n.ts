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
      advertise: "Reklam ver",
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
      title: "Mobilc uygulamaları için resmi merkez.",
      subtitle:
        "Yayınladığımız mobil ürünleri, destek kanallarını ve mağaza uyumluluk sayfalarını tek, güvenilir ve güncel bir yerde topluyoruz.",
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
    advertise: {
      title: "Mobilc uygulamalarında reklam ve iş birliği",
      subtitle: "Yayınladığımız mobil uygulamalar içinde uygun, kullanıcı deneyimini bozmayan reklam ve sponsorlu iş birlikleri için bize ulaşabilirsiniz.",
      intro:
        "Mobilc, kendi geliştirdiği mobil uygulamaları yayınlayan bağımsız bir app studio’dur. Markalar, ürünler veya kampanyalar için uygulama içi görünürlük, sponsorlu yerleşim ya da özel iş birliği taleplerini değerlendiriyoruz.",
      rules: ["Sponsorlu alanlar kullanıcıya açıkça belirtilir", "Kullanıcı deneyimini bozan reklam modellerinden kaçınırız", "Gizlilik ve mağaza kurallarına uygun kampanyalarla çalışırız"],
      contact: "Reklam ve iş birliği talepleri için support@movilc.com adresine konu, hedef ülke, kampanya tarihi ve bütçe aralığı ile yazabilirsiniz."
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
      advertise: "Advertise",
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
      title: "The official home for Mobilc apps.",
      subtitle:
        "We bring our published mobile products, support channels, and store compliance pages together in one reliable and up-to-date place.",
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
    advertise: {
      title: "Advertise and partner with Mobilc apps",
      subtitle: "Reach out for relevant, user-friendly advertising or sponsored partnership opportunities inside the mobile apps we publish.",
      intro:
        "Mobilc is an independent app studio that builds and publishes its own mobile apps. We evaluate in-app visibility, sponsored placements, and custom partnership requests for brands, products, and campaigns.",
      rules: ["Sponsored placements are clearly disclosed to users", "We avoid ad formats that damage the user experience", "Campaigns must comply with privacy and app store policies"],
      contact: "For advertising and partnership requests, email support@movilc.com with the campaign topic, target country, timing, and budget range."
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
