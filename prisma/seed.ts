import { PrismaClient, ProjectStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const privacyPolicyEn = `Last updated: April 21, 2026

Fall in Mina is operated by Mobilc.
Privacy contact: support@movilc.com

Fall in Mina is a mystical reading app for coffee readings, tarot, palm reading, dream interpretation, daily cards, and related premium features.

Data we process
Depending on how you use the app, we may process photos you upload for coffee or palm reading, text you write for dream interpretation or follow-up questions, selected cards, generated interpretation results, purchase and subscription status, device identifiers, app activity, diagnostics, and technical data needed for security, analytics, advertising, notifications, and abuse prevention.

How we use data
We use this data to generate and display readings, provide daily cards and history features, restore premium access, manage purchases, improve reliability, prevent abuse, show ads when enabled, and respond to support or privacy requests.

AI and third-party services
Photos, text, and reading inputs may be sent securely to AI services through our app infrastructure to generate interpretations. Fall in Mina may also use RevenueCat for purchases and subscriptions, advertising providers when ads are enabled, and infrastructure or analytics providers needed to operate the app. These providers may process data only as needed to provide their services.

Local storage and retention
Some history, preferences, cached content, and reading results may be stored locally on your device. Locally stored data remains on your device until you delete it, clear app data, or uninstall the app. Third-party providers may retain limited technical records according to their own policies and legal requirements.

Data sharing and sale
We do not sell your personal data. We may share data only with service providers that help operate Fall in Mina, such as AI, purchase, infrastructure, analytics, advertising, security, and support providers.

Security
We use reasonable technical measures, including encrypted transmission where supported, to protect data and reduce unauthorized access. No method of transmission or storage is completely secure.

Your choices and deletion
You can stop using the app at any time, clear local app data from your device settings, uninstall the app, disable notifications in device settings, or contact us at support@movilc.com for privacy questions and deletion requests. If account-based features are added in the future, we will provide an account deletion flow or URL as required.

Children's privacy
Fall in Mina is not intended for children under the age required by applicable law in your region.

Changes
We may update this Privacy Policy from time to time. The latest version will be available at this public URL.`;

const privacyPolicyTr = `Son güncelleme: 21 Nisan 2026

Fall in Mina, Mobilc tarafından işletilir.
Gizlilik iletişimi: support@movilc.com

Fall in Mina; kahve falı, tarot, el falı, rüya tabiri, günlük kartlar ve ilgili premium özellikler sunan mistik bir yorum uygulamasıdır.

İşlediğimiz veriler
Uygulamayı kullanımınıza bağlı olarak kahve veya el falı için yüklediğiniz fotoğrafları, rüya tabiri veya takip soruları için yazdığınız metinleri, seçilen kartları, oluşturulan yorum sonuçlarını, satın alma ve abonelik durumunu, cihaz tanımlayıcılarını, uygulama kullanımını, tanılama verilerini ve güvenlik, analiz, reklam, bildirim ve kötüye kullanım önleme için gerekli teknik verileri işleyebiliriz.

Verileri nasıl kullanırız
Bu verileri yorumları üretmek ve göstermek, günlük kart ve geçmiş özelliklerini sunmak, premium erişimi geri yüklemek, satın almaları yönetmek, güvenilirliği artırmak, kötüye kullanımı önlemek, etkinse reklam göstermek ve destek veya gizlilik taleplerine yanıt vermek için kullanırız.

AI ve üçüncü taraf servisler
Fotoğraflar, metinler ve yorum girdileri, yorum oluşturmak amacıyla uygulama altyapımız üzerinden güvenli şekilde AI servislerine gönderilebilir. Fall in Mina ayrıca satın alma ve abonelikler için RevenueCat, reklamlar etkinse reklam sağlayıcıları ve uygulamayı çalıştırmak için gerekli altyapı veya analiz sağlayıcılarını kullanabilir. Bu sağlayıcılar verileri yalnızca hizmetlerini sunmak için gerektiği ölçüde işleyebilir.

Yerel saklama ve veri tutma
Bazı geçmiş kayıtları, tercihler, önbelleğe alınmış içerikler ve yorum sonuçları cihazınızda yerel olarak saklanabilir. Yerel veriler siz silene, uygulama verilerini temizleyene veya uygulamayı kaldırana kadar cihazınızda kalır. Üçüncü taraf sağlayıcılar kendi politikaları ve yasal gereklilikleri kapsamında sınırlı teknik kayıtlar tutabilir.

Veri paylaşımı ve satış
Kişisel verilerinizi satmayız. Verileri yalnızca Fall in Mina'yı çalıştırmamıza yardımcı olan AI, satın alma, altyapı, analiz, reklam, güvenlik ve destek sağlayıcılarıyla gerekli olduğu ölçüde paylaşabiliriz.

Güvenlik
Verileri korumak ve yetkisiz erişimi azaltmak için desteklenen yerlerde şifreli aktarım dahil makul teknik önlemler kullanırız. Hiçbir aktarım veya saklama yöntemi tamamen güvenli değildir.

Seçimleriniz ve silme talepleri
Uygulamayı kullanmayı bırakabilir, cihaz ayarlarından yerel uygulama verilerini temizleyebilir, uygulamayı kaldırabilir, bildirimleri kapatabilir veya gizlilik soruları ve silme talepleri için support@movilc.com adresinden bize ulaşabilirsiniz. İleride hesap tabanlı özellikler eklenirse gerekli hesap silme akışı veya URL'si sağlanacaktır.

Çocukların gizliliği
Fall in Mina, bölgenizde geçerli yasaların belirlediği yaşın altındaki çocuklara yönelik değildir.

Değişiklikler
Bu Gizlilik Politikası zaman zaman güncellenebilir. En güncel sürüm bu herkese açık URL'de yer alır.`;

const termsEn = `Last updated: April 21, 2026

Fall in Mina is operated by Mobilc.
Support contact: support@movilc.com

Acceptance
By using Fall in Mina, you agree to these Terms of Use.

Nature of the service
Fall in Mina provides entertainment, reflection, and lifestyle-oriented interpretation features, including coffee reading, tarot, palm reading, dream interpretation, and daily cards. The app does not provide medical, legal, financial, psychological, or other professional advice.

User content
You are responsible for photos, text, questions, and other content you submit. Do not submit unlawful, abusive, harmful, misleading, or rights-infringing content.

AI-generated interpretations
Readings and interpretations may be generated with automated or AI-assisted systems. Results are for entertainment and personal reflection only. You should not rely on them for important life, health, financial, legal, or safety decisions.

Premium features and purchases
Some features may require a subscription, premium access, rewarded ad flow, or in-app purchase. Pricing, renewal, cancellation, refunds, and billing are handled according to the relevant app store and payment provider policies.

Acceptable use
You agree not to misuse the service, reverse engineer the app, automate abuse, attack or overload our proxy infrastructure, bypass premium restrictions, or interfere with normal operation.

Availability
We may update, change, limit, suspend, or discontinue parts of the service at any time.

Disclaimer and limitation of liability
Fall in Mina is provided on an as-is and as-available basis. To the maximum extent permitted by law, Fall in Mina and Mobilc are not liable for indirect, incidental, consequential, reliance-based, or special damages arising from app use.

Contact
For support, purchase questions, privacy questions, or feedback, contact support@movilc.com.`;

const termsTr = `Son güncelleme: 21 Nisan 2026

Fall in Mina, Mobilc tarafından işletilir.
Destek iletişimi: support@movilc.com

Kabul
Fall in Mina'yı kullanarak bu Kullanım Şartları'nı kabul etmiş olursunuz.

Hizmetin niteliği
Fall in Mina; kahve falı, tarot, el falı, rüya tabiri ve günlük kartlar dahil eğlence, kişisel farkındalık ve yaşam tarzı odaklı yorum özellikleri sunar. Uygulama tıbbi, hukuki, finansal, psikolojik veya başka bir profesyonel tavsiye sağlamaz.

Kullanıcı içerikleri
Gönderdiğiniz fotoğraf, metin, soru ve diğer içeriklerden siz sorumlusunuz. Hukuka aykırı, kötüye kullanım içeren, zararlı, yanıltıcı veya hak ihlali oluşturan içerikler göndermeyin.

AI ile oluşturulan yorumlar
Fal ve yorum sonuçları otomatik veya AI destekli sistemlerle üretilebilir. Sonuçlar yalnızca eğlence ve kişisel düşünme amaçlıdır. Önemli yaşam, sağlık, finans, hukuk veya güvenlik kararları için bu sonuçlara güvenmemelisiniz.

Premium özellikler ve satın almalar
Bazı özellikler abonelik, premium erişim, ödüllü reklam akışı veya uygulama içi satın alma gerektirebilir. Fiyatlandırma, yenileme, iptal, iade ve faturalandırma ilgili uygulama mağazası ve ödeme sağlayıcısı politikalarına göre yürütülür.

Kabul edilebilir kullanım
Hizmeti kötüye kullanmamayı, uygulamayı tersine mühendisliğe tabi tutmamayı, otomatik kötüye kullanım yapmamayı, proxy altyapımıza saldırmamayı veya aşırı yük bindirmemeyi, premium kısıtlamalarını aşmamayı ve normal işleyişe müdahale etmemeyi kabul edersiniz.

Erişilebilirlik
Hizmetin bazı bölümlerini herhangi bir zamanda güncelleyebilir, değiştirebilir, sınırlayabilir, askıya alabilir veya sonlandırabiliriz.

Sorumluluk reddi ve sınırı
Fall in Mina olduğu gibi ve mevcut olduğu şekilde sunulur. Yasaların izin verdiği azami ölçüde Fall in Mina ve Mobilc, uygulama kullanımından doğan dolaylı, arızi, sonuçsal, güvene dayalı veya özel zararlardan sorumlu değildir.

İletişim
Destek, satın alma soruları, gizlilik soruları veya geri bildirim için support@movilc.com adresinden bize ulaşabilirsiniz.`;

const accountDeletionEn = `Fall in Mina currently does not require a user account for its core experience.

To remove local app data, you can clear app data from your device settings or uninstall the app. For privacy questions or deletion requests related to support messages, purchase support, or other records that may be associated with your email, contact support@movilc.com.

If account-based features are added in the future, Fall in Mina will provide an account deletion flow or public deletion request URL as required.`;

const accountDeletionTr = `Fall in Mina'nın temel deneyimi şu anda kullanıcı hesabı gerektirmez.

Yerel uygulama verilerini kaldırmak için cihaz ayarlarından uygulama verilerini temizleyebilir veya uygulamayı kaldırabilirsiniz. Destek mesajları, satın alma desteği veya e-posta adresinizle ilişkilendirilebilecek diğer kayıtlarla ilgili gizlilik veya silme talepleri için support@movilc.com adresinden bize ulaşabilirsiniz.

İleride hesap tabanlı özellikler eklenirse Fall in Mina gerekli hesap silme akışını veya herkese açık silme talebi URL'sini sağlayacaktır.`;

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@example.com";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "change-me-now";
  const defaultAdminCredentials = !process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD || adminPassword === "change-me-now";

  if (process.env.NODE_ENV === "production" && defaultAdminCredentials) {
    await prisma.user.deleteMany({ where: { email: "admin@example.com" } });
    console.warn("Default production admin credentials were not seeded. Set ADMIN_EMAIL and ADMIN_PASSWORD in Vercel.");
  } else {
    await prisma.user.upsert({
      where: { email: adminEmail },
      update: {
        name: "Mobilc Admin",
        passwordHash: await bcrypt.hash(adminPassword, 12)
      },
      create: {
        email: adminEmail,
        name: "Mobilc Admin",
        passwordHash: await bcrypt.hash(adminPassword, 12)
      }
    });
  }

  await prisma.project.deleteMany({
    where: {
      slug: {
        in: ["habit-light"]
      }
    }
  });

  const project = await prisma.project.upsert({
    where: { slug: "coffee-fortune" },
    update: {
      nameTr: "Fall in Mina",
      nameEn: "Fall in Mina",
      shortDescriptionTr: "Kahve falı, tarot, el falı, rüya tabiri ve günlük kartları tek atmosferde sunan mistik mobil uygulama.",
      shortDescriptionEn: "A mystical mobile app for coffee readings, tarot, palm reading, dream interpretation, and daily cards.",
      fullDescriptionTr:
        "Fall in Mina, klasik fal deneyimini modern, sinematik ve katmanlı bir ritüele dönüştürür. Fincanını ve tabağını yükleyerek Mina'nın telvedeki işaretleri yorumlamasını isteyebilir, üç kartlık tarot açılımı yapabilir, el falı ve rüya tabiri modlarıyla farklı yorum katmanlarını keşfedebilir ve her gün günlük kartını alabilirsin.",
      fullDescriptionEn:
        "Fall in Mina turns fortune reading into a richer, more cinematic ritual. Upload photos of your cup and saucer, let Mina interpret the hidden signs, open a three-card tarot spread, explore palm reading and dream meanings, and return each day for a fresh daily card.",
      logoUrl: "/apps/fall-in-mina/icon.png",
      coverImageUrl: "/apps/fall-in-mina/maya.png",
      category: "Lifestyle",
      status: ProjectStatus.PUBLISHED,
      featured: true,
      playStoreUrl: null,
      appStoreUrl: null,
      websiteUrl: "https://movilc.com",
      supportEmail: "support@movilc.com",
      privacyPolicyTr,
      privacyPolicyEn,
      termsTr,
      termsEn,
      accountDeletionTr,
      accountDeletionEn,
      supportContentTr:
        "Fall in Mina için destek, gizlilik soruları, satın alma sorunları veya uygulama geri bildirimleri konusunda bize support@movilc.com adresinden ulaşabilirsiniz. Mesajınızda kullandığınız cihazı, uygulama sürümünü ve yaşadığınız sorunu kısaca belirtmeniz çözümü hızlandırır.",
      supportContentEn:
        "For Fall in Mina support, privacy questions, purchase issues, or app feedback, contact us at support@movilc.com. Include your device, app version, and a short description of the issue so we can help faster.",
      faqEnabled: true,
      supportEnabled: true,
      suggestionsEnabled: true
    },
    create: {
      slug: "coffee-fortune",
      nameTr: "Fall in Mina",
      nameEn: "Fall in Mina",
      shortDescriptionTr: "Kahve falı, tarot, el falı, rüya tabiri ve günlük kartları tek atmosferde sunan mistik mobil uygulama.",
      shortDescriptionEn: "A mystical mobile app for coffee readings, tarot, palm reading, dream interpretation, and daily cards.",
      fullDescriptionTr:
        "Fall in Mina, klasik fal deneyimini modern, sinematik ve katmanlı bir ritüele dönüştürür. Fincanını ve tabağını yükleyerek Mina'nın telvedeki işaretleri yorumlamasını isteyebilir, üç kartlık tarot açılımı yapabilir, el falı ve rüya tabiri modlarıyla farklı yorum katmanlarını keşfedebilir ve her gün günlük kartını alabilirsin.",
      fullDescriptionEn:
        "Fall in Mina turns fortune reading into a richer, more cinematic ritual. Upload photos of your cup and saucer, let Mina interpret the hidden signs, open a three-card tarot spread, explore palm reading and dream meanings, and return each day for a fresh daily card.",
      logoUrl: "/apps/fall-in-mina/icon.png",
      coverImageUrl: "/apps/fall-in-mina/maya.png",
      category: "Lifestyle",
      status: ProjectStatus.PUBLISHED,
      featured: true,
      websiteUrl: "https://movilc.com",
      supportEmail: "support@movilc.com",
      privacyPolicyTr,
      privacyPolicyEn,
      termsTr,
      termsEn,
      accountDeletionTr,
      accountDeletionEn,
      supportContentTr:
        "Fall in Mina için destek, gizlilik soruları, satın alma sorunları veya uygulama geri bildirimleri konusunda bize support@movilc.com adresinden ulaşabilirsiniz. Mesajınızda kullandığınız cihazı, uygulama sürümünü ve yaşadığınız sorunu kısaca belirtmeniz çözümü hızlandırır.",
      supportContentEn:
        "For Fall in Mina support, privacy questions, purchase issues, or app feedback, contact us at support@movilc.com. Include your device, app version, and a short description of the issue so we can help faster."
    }
  });

  await prisma.projectImage.deleteMany({
    where: {
      projectId: project.id,
      url: {
        in: ["/apps/fall-in-mina/tarot-moon.png", "/apps/fall-in-mina/tarot-sun.png"]
      }
    }
  });

  const imageCount = await prisma.projectImage.count({ where: { projectId: project.id } });
  if (imageCount === 0) {
    await prisma.projectImage.createMany({
      data: [
        {
          projectId: project.id,
          url: "/apps/fall-in-mina/maya.png",
          altTr: "Fall in Mina Mina ritüel görseli",
          altEn: "Fall in Mina Mina ritual artwork",
          sortOrder: 1
        },
        {
          projectId: project.id,
          url: "/apps/fall-in-mina/playstore.png",
          altTr: "Fall in Mina mağaza görseli",
          altEn: "Fall in Mina store artwork",
          sortOrder: 2
        }
      ]
    });
  }

  await prisma.projectFaq.deleteMany({ where: { projectId: project.id } });
  await prisma.projectFaq.createMany({
    data: [
      {
        projectId: project.id,
        questionTr: "Fall in Mina profesyonel tavsiye verir mi?",
        questionEn: "Does Fall in Mina provide professional advice?",
        answerTr: "Hayır. Fall in Mina eğlence ve kişisel farkındalık amaçlı yorumlar sunar; tıbbi, hukuki, finansal veya profesyonel tavsiye yerine geçmez.",
        answerEn: "No. Fall in Mina provides entertainment and personal reflection features; it does not replace medical, legal, financial, or professional advice.",
        sortOrder: 1
      },
      {
        projectId: project.id,
        questionTr: "Gizlilik politikası Play Store için kullanılabilir mi?",
        questionEn: "Can the privacy policy be used for Google Play?",
        answerTr: "Evet. Gizlilik politikası herkese açık, giriş istemeyen ve Fall in Mina ile Mobilc bilgilerini içeren bir web sayfası olarak sunulur.",
        answerEn: "Yes. The privacy policy is a public web page that does not require login and includes Fall in Mina and Mobilc information.",
        sortOrder: 2
      },
      {
        projectId: project.id,
        questionTr: "Destek için nasıl ulaşabilirim?",
        questionEn: "How can I contact support?",
        answerTr: "Destek, gizlilik, satın alma ve geri bildirim konuları için support@movilc.com adresine yazabilirsiniz.",
        answerEn: "For support, privacy, purchase, and feedback questions, contact support@movilc.com.",
        sortOrder: 3
      }
    ]
  });

  const photoPuzzle = await prisma.project.upsert({
    where: { slug: "photo-puzzle-studio" },
    update: {
      nameTr: "Fotoğraf Bulmaca Stüdyosu",
      nameEn: "Photo Puzzle Studio",
      shortDescriptionTr: "Kendi fotoğraflarınızdan veya ilham görsellerinden premium yapboz deneyimi oluşturan mobil oyun.",
      shortDescriptionEn: "A premium mobile jigsaw experience built around personal photos and curated inspiration images.",
      fullDescriptionTr:
        "Fotoğraf Bulmaca Stüdyosu, kullanıcıların kendi fotoğraflarını seçerek veya hazır ilham görselleriyle sakin, estetik ve kişiselleştirilebilir yapbozlar oluşturmasını sağlar. Parça sayısı, oyun ilerlemesi, yerel kayıtlar, ses efektleri ve premium özelliklerle mobilde daha rafine bir puzzle deneyimi sunar.",
      fullDescriptionEn:
        "Photo Puzzle Studio lets players create calm, polished jigsaw puzzles from their own photos or curated inspiration images. It supports adjustable puzzle setups, saved progress, local preferences, sound effects, and premium features for a refined mobile puzzle experience.",
      logoUrl: "/apps/photo-puzzle-studio/icon.png",
      coverImageUrl: "/apps/photo-puzzle-studio/gameplay.png",
      category: "Game",
      status: ProjectStatus.PUBLISHED,
      featured: true,
      playStoreUrl: null,
      appStoreUrl: null,
      websiteUrl: "https://movilc.com",
      supportEmail: "support@movilc.com",
      privacyPolicyTr: `Son güncelleme: 21 Nisan 2026

Fotoğraf Bulmaca Stüdyosu, Mobilc tarafından işletilir.
Gizlilik iletişimi: support@movilc.com

Fotoğraf Bulmaca Stüdyosu, kullanıcıların kendi fotoğraflarından veya uygulama içindeki ilham görsellerinden yapboz oluşturmasını sağlayan bir mobil oyundur.

İşlediğimiz veriler
Uygulamayı kullanımınıza bağlı olarak cihazınızdan seçtiğiniz fotoğrafları, kırpma veya yapboz oluşturma tercihlerini, oyun ilerlemesini, premium erişim veya satın alma durumunu, uygulama tercihlerini, cihaz tanımlayıcılarını, uygulama etkinliğini ve teknik tanılama verilerini işleyebiliriz.

Verileri nasıl kullanırız
Bu verileri yapboz oluşturmak, ilerlemeyi saklamak, uygulama tercihlerini korumak, premium erişimi yönetmek, uygulama güvenilirliğini artırmak, hataları incelemek ve destek taleplerine yanıt vermek için kullanırız.

Yerel saklama
Kullanıcı fotoğrafları, oluşturulan yapbozlar, ilerleme ve tercihler öncelikle cihazınızda yerel olarak saklanır. Yerel verileri cihaz ayarlarından uygulama verilerini temizleyerek veya uygulamayı kaldırarak silebilirsiniz.

Üçüncü taraflar
Satın alma ve premium özellikler ilgili uygulama mağazası veya ödeme sağlayıcısı üzerinden yönetilebilir. Analiz, hata ayıklama, reklam veya altyapı sağlayıcıları etkinse yalnızca hizmeti sunmak için gerekli teknik verileri işleyebilir.

Veri satışı
Kişisel verilerinizi satmayız.

Güvenlik
Desteklenen yerlerde şifreli aktarım ve makul teknik önlemler kullanırız. Hiçbir aktarım veya saklama yöntemi tamamen güvenli değildir.

İletişim
Gizlilik soruları ve silme talepleri için support@movilc.com adresinden bize ulaşabilirsiniz.`,
      privacyPolicyEn: `Last updated: April 21, 2026

Photo Puzzle Studio is operated by Mobilc.
Privacy contact: support@movilc.com

Photo Puzzle Studio is a mobile puzzle game that lets users create jigsaw puzzles from their own photos or in-app inspiration images.

Data we process
Depending on how you use the app, we may process photos you select from your device, crop and puzzle creation preferences, game progress, premium access or purchase status, app preferences, device identifiers, app activity, and technical diagnostic data.

How we use data
We use this data to create puzzles, save progress, preserve preferences, manage premium access, improve reliability, investigate errors, and respond to support requests.

Local storage
User photos, generated puzzles, progress, and preferences are primarily stored locally on your device. You can remove local data by clearing app data in device settings or uninstalling the app.

Third parties
Purchases and premium features may be handled by the relevant app store or payment provider. If analytics, diagnostics, advertising, or infrastructure providers are enabled, they may process technical data only as needed to provide their services.

Data sale
We do not sell your personal data.

Security
We use encrypted transmission where supported and reasonable technical measures. No method of transmission or storage is completely secure.

Contact
For privacy questions or deletion requests, contact support@movilc.com.`,
      termsTr: `Son güncelleme: 21 Nisan 2026

Fotoğraf Bulmaca Stüdyosu, Mobilc tarafından işletilir.
Destek iletişimi: support@movilc.com

Uygulamayı kullanarak bu Kullanım Şartları'nı kabul etmiş olursunuz.

Fotoğraf Bulmaca Stüdyosu eğlence amaçlı bir mobil yapboz oyunudur. Uygulamaya eklediğiniz fotoğraflardan ve oluşturduğunuz içeriklerden siz sorumlusunuz. Hukuka aykırı, zararlı veya hak ihlali oluşturan içerikler kullanmayın.

Bazı özellikler premium erişim, abonelik, reklamlı erişim veya uygulama içi satın alma gerektirebilir. Ödeme, iptal ve iade süreçleri ilgili uygulama mağazası politikalarına göre yürütülür.

Uygulamayı kötüye kullanmamayı, tersine mühendislik yapmamayı, otomatik kötüye kullanım oluşturmamayı ve premium kısıtlamalarını aşmamayı kabul edersiniz.

Hizmet olduğu gibi sunulur. Mobilc, yasaların izin verdiği azami ölçüde uygulama kullanımından doğan dolaylı veya sonuçsal zararlardan sorumlu değildir.

Destek için support@movilc.com adresinden bize ulaşabilirsiniz.`,
      termsEn: `Last updated: April 21, 2026

Photo Puzzle Studio is operated by Mobilc.
Support contact: support@movilc.com

By using the app, you agree to these Terms of Use.

Photo Puzzle Studio is an entertainment-focused mobile jigsaw puzzle game. You are responsible for the photos and content you use in the app. Do not use unlawful, harmful, or rights-infringing content.

Some features may require premium access, a subscription, rewarded access, or an in-app purchase. Payments, cancellations, and refunds are handled according to the relevant app store policies.

You agree not to misuse the app, reverse engineer it, automate abuse, or bypass premium restrictions.

The service is provided as-is. To the maximum extent permitted by law, Mobilc is not liable for indirect or consequential damages arising from app use.

For support, contact support@movilc.com.`,
      accountDeletionTr:
        "Fotoğraf Bulmaca Stüdyosu temel kullanım için hesap gerektirmez. Yerel verileri kaldırmak için cihaz ayarlarından uygulama verilerini temizleyebilir veya uygulamayı kaldırabilirsiniz. Destek mesajları veya e-posta ile ilişkili kayıtlar için support@movilc.com adresinden bize ulaşabilirsiniz.",
      accountDeletionEn:
        "Photo Puzzle Studio does not require an account for its core use. To remove local data, clear app data in device settings or uninstall the app. For support messages or records associated with your email, contact support@movilc.com.",
      supportContentTr:
        "Fotoğraf Bulmaca Stüdyosu için destek, satın alma sorunları, gizlilik soruları veya geri bildirimlerde support@movilc.com adresinden bize ulaşabilirsiniz.",
      supportContentEn:
        "For Photo Puzzle Studio support, purchase issues, privacy questions, or feedback, contact support@movilc.com.",
      faqEnabled: true,
      supportEnabled: true,
      suggestionsEnabled: true
    },
    create: {
      slug: "photo-puzzle-studio",
      nameTr: "Fotoğraf Bulmaca Stüdyosu",
      nameEn: "Photo Puzzle Studio",
      shortDescriptionTr: "Kendi fotoğraflarınızdan veya ilham görsellerinden premium yapboz deneyimi oluşturan mobil oyun.",
      shortDescriptionEn: "A premium mobile jigsaw experience built around personal photos and curated inspiration images.",
      fullDescriptionTr:
        "Fotoğraf Bulmaca Stüdyosu, kullanıcıların kendi fotoğraflarını seçerek veya hazır ilham görselleriyle sakin, estetik ve kişiselleştirilebilir yapbozlar oluşturmasını sağlar. Parça sayısı, oyun ilerlemesi, yerel kayıtlar, ses efektleri ve premium özelliklerle mobilde daha rafine bir puzzle deneyimi sunar.",
      fullDescriptionEn:
        "Photo Puzzle Studio lets players create calm, polished jigsaw puzzles from their own photos or curated inspiration images. It supports adjustable puzzle setups, saved progress, local preferences, sound effects, and premium features for a refined mobile puzzle experience.",
      logoUrl: "/apps/photo-puzzle-studio/icon.png",
      coverImageUrl: "/apps/photo-puzzle-studio/gameplay.png",
      category: "Game",
      status: ProjectStatus.PUBLISHED,
      featured: true,
      websiteUrl: "https://movilc.com",
      supportEmail: "support@movilc.com",
      privacyPolicyTr:
        "Son güncelleme: 21 Nisan 2026\n\nFotoğraf Bulmaca Stüdyosu, Mobilc tarafından işletilir. Gizlilik iletişimi: support@movilc.com\n\nUygulama, kullanıcıların kendi fotoğraflarından veya uygulama içindeki ilham görsellerinden yapboz oluşturmasını sağlar. Kullanıma bağlı olarak cihazdan seçilen fotoğraflar, kırpma tercihleri, yapboz ayarları, oyun ilerlemesi, premium erişim veya satın alma durumu, uygulama tercihleri, cihaz tanımlayıcıları, uygulama etkinliği ve teknik tanılama verileri işlenebilir.\n\nBu veriler yapboz oluşturmak, ilerlemeyi saklamak, tercihleri korumak, premium erişimi yönetmek, güvenilirliği artırmak ve destek taleplerine yanıt vermek için kullanılır. Kullanıcı fotoğrafları, oluşturulan yapbozlar ve ilerleme öncelikle cihazda yerel olarak saklanır. Verilerinizi cihaz ayarlarından uygulama verilerini temizleyerek veya uygulamayı kaldırarak silebilirsiniz.\n\nSatın alma ve premium özellikler ilgili uygulama mağazası veya ödeme sağlayıcısı üzerinden yürütülebilir. Analiz, hata ayıklama, reklam veya altyapı sağlayıcıları etkinse yalnızca hizmet için gerekli teknik verileri işleyebilir. Kişisel verilerinizi satmayız. Gizlilik soruları için support@movilc.com adresinden bize ulaşabilirsiniz.",
      privacyPolicyEn:
        "Last updated: April 21, 2026\n\nPhoto Puzzle Studio is operated by Mobilc. Privacy contact: support@movilc.com\n\nThe app lets users create jigsaw puzzles from their own photos or in-app inspiration images. Depending on usage, selected device photos, crop preferences, puzzle settings, game progress, premium access or purchase status, app preferences, device identifiers, app activity, and technical diagnostics may be processed.\n\nWe use this data to create puzzles, save progress, preserve preferences, manage premium access, improve reliability, and respond to support requests. User photos, generated puzzles, and progress are primarily stored locally on the device. You can remove local data by clearing app data in device settings or uninstalling the app.\n\nPurchases and premium features may be handled by the relevant app store or payment provider. If analytics, diagnostics, advertising, or infrastructure providers are enabled, they may process only the technical data needed to provide their services. We do not sell personal data. For privacy questions, contact support@movilc.com.",
      termsTr:
        "Son güncelleme: 21 Nisan 2026\n\nFotoğraf Bulmaca Stüdyosu, Mobilc tarafından işletilir. Destek: support@movilc.com\n\nUygulamayı kullanarak bu Kullanım Şartları'nı kabul etmiş olursunuz. Fotoğraf Bulmaca Stüdyosu eğlence amaçlı bir mobil yapboz oyunudur. Uygulamaya eklediğiniz fotoğraflardan ve oluşturduğunuz içeriklerden siz sorumlusunuz; hukuka aykırı, zararlı veya hak ihlali oluşturan içerikler kullanmayın.\n\nBazı özellikler premium erişim, abonelik, reklamlı erişim veya uygulama içi satın alma gerektirebilir. Ödeme, iptal ve iade süreçleri ilgili uygulama mağazası politikalarına göre yürütülür. Uygulamayı kötüye kullanmamayı, tersine mühendislik yapmamayı, otomatik kötüye kullanım oluşturmamayı ve premium kısıtlamalarını aşmamayı kabul edersiniz.\n\nHizmet olduğu gibi sunulur. Mobilc, yasaların izin verdiği azami ölçüde uygulama kullanımından doğan dolaylı veya sonuçsal zararlardan sorumlu değildir.",
      termsEn:
        "Last updated: April 21, 2026\n\nPhoto Puzzle Studio is operated by Mobilc. Support: support@movilc.com\n\nBy using the app, you agree to these Terms of Use. Photo Puzzle Studio is an entertainment-focused mobile jigsaw puzzle game. You are responsible for photos and content you use in the app; do not use unlawful, harmful, or rights-infringing content.\n\nSome features may require premium access, a subscription, rewarded access, or an in-app purchase. Payments, cancellations, and refunds are handled according to the relevant app store policies. You agree not to misuse the app, reverse engineer it, automate abuse, or bypass premium restrictions.\n\nThe service is provided as-is. To the maximum extent permitted by law, Mobilc is not liable for indirect or consequential damages arising from app use.",
      accountDeletionTr:
        "Fotoğraf Bulmaca Stüdyosu temel kullanım için hesap gerektirmez. Yerel verileri kaldırmak için cihaz ayarlarından uygulama verilerini temizleyebilir veya uygulamayı kaldırabilirsiniz. Destek mesajları veya e-posta ile ilişkili kayıtlar için support@movilc.com adresinden bize ulaşabilirsiniz.",
      accountDeletionEn:
        "Photo Puzzle Studio does not require an account for its core use. To remove local data, clear app data in device settings or uninstall the app. For support messages or records associated with your email, contact support@movilc.com.",
      supportContentTr:
        "Fotoğraf Bulmaca Stüdyosu için destek, satın alma sorunları, gizlilik soruları veya geri bildirimlerde support@movilc.com adresinden bize ulaşabilirsiniz.",
      supportContentEn:
        "For Photo Puzzle Studio support, purchase issues, privacy questions, or feedback, contact support@movilc.com."
    }
  });

  const photoPuzzleImageCount = await prisma.projectImage.count({ where: { projectId: photoPuzzle.id } });
  if (photoPuzzleImageCount === 0) {
    await prisma.projectImage.createMany({
      data: [
        { projectId: photoPuzzle.id, url: "/apps/photo-puzzle-studio/gameplay.png", altTr: "Fotoğraf Bulmaca Stüdyosu oynanış ekranı", altEn: "Photo Puzzle Studio gameplay screen", sortOrder: 1 },
        { projectId: photoPuzzle.id, url: "/apps/photo-puzzle-studio/create-puzzle.png", altTr: "Fotoğraf Bulmaca Stüdyosu yapboz oluşturma ekranı", altEn: "Photo Puzzle Studio create puzzle screen", sortOrder: 2 },
        { projectId: photoPuzzle.id, url: "/apps/photo-puzzle-studio/explore.png", altTr: "Fotoğraf Bulmaca Stüdyosu ilham görselleri ekranı", altEn: "Photo Puzzle Studio inspiration screen", sortOrder: 3 },
        { projectId: photoPuzzle.id, url: "/apps/photo-puzzle-studio/library.png", altTr: "Fotoğraf Bulmaca Stüdyosu kütüphane ekranı", altEn: "Photo Puzzle Studio library screen", sortOrder: 4 }
      ]
    });
  }

  await prisma.projectFaq.deleteMany({ where: { projectId: photoPuzzle.id } });
  await prisma.projectFaq.createMany({
    data: [
      {
        projectId: photoPuzzle.id,
        questionTr: "Fotoğraflarım sunucuya yükleniyor mu?",
        questionEn: "Are my photos uploaded to a server?",
        answerTr: "Temel yapboz deneyimi yerel çalışacak şekilde tasarlanır. Kullanıcı fotoğrafları ve ilerleme verileri öncelikle cihazda saklanır.",
        answerEn: "The core puzzle experience is designed to work locally. User photos and progress data are primarily stored on the device.",
        sortOrder: 1
      },
      {
        projectId: photoPuzzle.id,
        questionTr: "Destek için nasıl ulaşabilirim?",
        questionEn: "How can I contact support?",
        answerTr: "Destek ve satın alma soruları için support@movilc.com adresine yazabilirsiniz.",
        answerEn: "For support and purchase questions, contact support@movilc.com.",
        sortOrder: 2
      }
    ]
  });

  const priceDetective = await prisma.project.upsert({
    where: { slug: "price-detective" },
    update: {
      nameTr: "Fiyat Dedektifi",
      nameEn: "Price Detective",
      shortDescriptionTr: "Raf etiketi ve fiş fiyatlarını karşılaştırarak alışverişte fiyat farklarını yakalayan akıllı uygulama.",
      shortDescriptionEn: "A smart shopping app that compares shelf labels and receipts to detect price mismatches.",
      fullDescriptionTr:
        "Fiyat Dedektifi, barkod tarama, OCR, fiş okuma, alışveriş listeleri ve harcama takibi özelliklerini bir araya getirir. Türk marketleri için optimize edilen akıllı eşleştirme sistemiyle raf fiyatı ve fiş fiyatı arasındaki farkları görünür hale getirir; kullanıcıların alışveriş kayıtlarını, listelerini ve bütçe takibini daha düzenli yönetmesine yardımcı olur.",
      fullDescriptionEn:
        "Price Detective combines barcode scanning, OCR, receipt parsing, shopping lists, and spending tracking. Its matching logic is optimized for Turkish grocery workflows and helps users spot differences between shelf prices and receipt prices while organizing shopping records and budgets.",
      logoUrl: "/apps/price-detective/icon.png",
      coverImageUrl: "/apps/price-detective/cover.svg",
      category: "Shopping",
      status: ProjectStatus.PUBLISHED,
      featured: true,
      playStoreUrl: null,
      appStoreUrl: null,
      websiteUrl: "https://movilc.com",
      supportEmail: "support@movilc.com",
      privacyPolicyTr: `Son güncelleme: 21 Nisan 2026

Fiyat Dedektifi, Mobilc tarafından işletilir.
Gizlilik iletişimi: support@movilc.com

Fiyat Dedektifi; raf etiketleri, fişler, barkodlar, alışveriş listeleri ve harcama takibi üzerinden fiyat karşılaştırması yapmaya yardımcı olan bir mobil uygulamadır.

İşlediğimiz veriler
Uygulamayı kullanımınıza bağlı olarak kamera görüntüleri, fiş veya etiket fotoğrafları, OCR ile çıkarılan metinler, ürün adı, fiyat, market adı, alışveriş listeleri, harcama kayıtları, uygulama tercihleri, bildirim tercihleri, cihaz tanımlayıcıları, uygulama etkinliği ve teknik tanılama verileri işlenebilir.

Verileri nasıl kullanırız
Bu verileri raf etiketi ve fiş fiyatlarını karşılaştırmak, ürünleri eşleştirmek, alışveriş listelerini ve harcama özetlerini göstermek, bildirimleri yönetmek, uygulama güvenilirliğini artırmak ve destek taleplerine yanıt vermek için kullanırız.

OCR, AI ve üçüncü taraf servisler
Metin tanıma cihaz üzerinde veya desteklenen servislerle yapılabilir. Bazı durumlarda OCR sonucunu iyileştirmek için AI destekli servisler kullanılabilir. Firebase bildirimleri, uygulama mağazası servisleri, analiz, hata ayıklama veya altyapı sağlayıcıları yalnızca gerekli teknik verileri işleyebilir.

Yerel saklama
Ürün kayıtları, alışveriş listeleri, geçmiş ve tercihler cihazınızda yerel veritabanı veya yerel saklama alanında tutulabilir. Bu verileri cihaz ayarlarından uygulama verilerini temizleyerek veya uygulamayı kaldırarak silebilirsiniz.

Veri satışı
Kişisel verilerinizi satmayız.

Güvenlik
Desteklenen yerlerde şifreli aktarım ve makul teknik önlemler kullanırız. Hiçbir sistem tamamen güvenli değildir.

İletişim
Gizlilik soruları ve silme talepleri için support@movilc.com adresinden bize ulaşabilirsiniz.`,
      privacyPolicyEn: `Last updated: April 21, 2026

Price Detective is operated by Mobilc.
Privacy contact: support@movilc.com

Price Detective is a mobile app that helps compare shelf labels, receipts, barcodes, shopping lists, and spending records.

Data we process
Depending on how you use the app, camera input, receipt or shelf label photos, OCR text, product names, prices, store names, shopping lists, spending records, app preferences, notification preferences, device identifiers, app activity, and technical diagnostic data may be processed.

How we use data
We use this data to compare shelf and receipt prices, match products, display shopping lists and spending summaries, manage notifications, improve reliability, and respond to support requests.

OCR, AI, and third-party services
Text recognition may happen on-device or through supported services. In some cases, AI-assisted services may be used to improve OCR results. Firebase notifications, app store services, analytics, diagnostics, or infrastructure providers may process only the technical data needed to provide their services.

Local storage
Product records, shopping lists, history, and preferences may be stored in a local database or local storage on your device. You can remove this data by clearing app data in device settings or uninstalling the app.

Data sale
We do not sell your personal data.

Security
We use encrypted transmission where supported and reasonable technical measures. No system is completely secure.

Contact
For privacy questions or deletion requests, contact support@movilc.com.`,
      termsTr: `Son güncelleme: 21 Nisan 2026

Fiyat Dedektifi, Mobilc tarafından işletilir.
Destek iletişimi: support@movilc.com

Uygulamayı kullanarak bu Kullanım Şartları'nı kabul etmiş olursunuz.

Fiyat Dedektifi alışveriş takibi, fiş okuma, barkod tarama ve fiyat karşılaştırma özellikleri sunar. Uygulama yalnızca yardımcı bilgi sağlar; mağaza, fiyat, kampanya, iade veya yasal haklar konusunda kesin garanti vermez.

OCR ve otomatik eşleştirme sonuçları hatalı olabilir. Önemli kararlar vermeden önce fiş, etiket ve mağaza bilgilerini kendiniz doğrulamalısınız.

Uygulamayı kötüye kullanmamayı, tersine mühendislik yapmamayı, otomatik kötüye kullanım oluşturmamayı ve normal işleyişe müdahale etmemeyi kabul edersiniz.

Bazı özellikler bildirim, kamera, fotoğraf erişimi veya uygulama mağazası servisleri gerektirebilir. Bu izinleri cihaz ayarlarınızdan yönetebilirsiniz.

Hizmet olduğu gibi sunulur. Mobilc, yasaların izin verdiği azami ölçüde uygulama kullanımından doğan dolaylı veya sonuçsal zararlardan sorumlu değildir.

Destek için support@movilc.com adresinden bize ulaşabilirsiniz.`,
      termsEn: `Last updated: April 21, 2026

Price Detective is operated by Mobilc.
Support contact: support@movilc.com

By using the app, you agree to these Terms of Use.

Price Detective provides shopping tracking, receipt parsing, barcode scanning, and price comparison features. The app provides helpful information only and does not guarantee store, price, promotion, refund, or legal outcomes.

OCR and automatic matching results may be inaccurate. You should verify receipts, shelf labels, and store information yourself before making important decisions.

You agree not to misuse the app, reverse engineer it, automate abuse, or interfere with normal operation.

Some features may require notification, camera, photo access, or app store services. You can manage these permissions in your device settings.

The service is provided as-is. To the maximum extent permitted by law, Mobilc is not liable for indirect or consequential damages arising from app use.

For support, contact support@movilc.com.`,
      accountDeletionTr:
        "Fiyat Dedektifi temel kullanım için hesap gerektirmez. Yerel ürün kayıtları, alışveriş listeleri ve geçmişi silmek için cihaz ayarlarından uygulama verilerini temizleyebilir veya uygulamayı kaldırabilirsiniz. Destek mesajları veya e-posta ile ilişkili kayıtlar için support@movilc.com adresinden bize ulaşabilirsiniz.",
      accountDeletionEn:
        "Price Detective does not require an account for core use. To remove local product records, shopping lists, and history, clear app data in device settings or uninstall the app. For support messages or records associated with your email, contact support@movilc.com.",
      supportContentTr:
        "Fiyat Dedektifi için destek, hata bildirimi, gizlilik soruları veya geri bildirimlerde support@movilc.com adresinden bize ulaşabilirsiniz.",
      supportContentEn:
        "For Price Detective support, bug reports, privacy questions, or feedback, contact support@movilc.com.",
      faqEnabled: true,
      supportEnabled: true,
      suggestionsEnabled: true
    },
    create: {
      slug: "price-detective",
      nameTr: "Fiyat Dedektifi",
      nameEn: "Price Detective",
      shortDescriptionTr: "Raf etiketi ve fiş fiyatlarını karşılaştırarak alışverişte fiyat farklarını yakalayan akıllı uygulama.",
      shortDescriptionEn: "A smart shopping app that compares shelf labels and receipts to detect price mismatches.",
      fullDescriptionTr:
        "Fiyat Dedektifi, barkod tarama, OCR, fiş okuma, alışveriş listeleri ve harcama takibi özelliklerini bir araya getirir. Türk marketleri için optimize edilen akıllı eşleştirme sistemiyle raf fiyatı ve fiş fiyatı arasındaki farkları görünür hale getirir; kullanıcıların alışveriş kayıtlarını, listelerini ve bütçe takibini daha düzenli yönetmesine yardımcı olur.",
      fullDescriptionEn:
        "Price Detective combines barcode scanning, OCR, receipt parsing, shopping lists, and spending tracking. Its matching logic is optimized for Turkish grocery workflows and helps users spot differences between shelf prices and receipt prices while organizing shopping records and budgets.",
      logoUrl: "/apps/price-detective/icon.png",
      coverImageUrl: "/apps/price-detective/cover.svg",
      category: "Shopping",
      status: ProjectStatus.PUBLISHED,
      featured: true,
      websiteUrl: "https://movilc.com",
      supportEmail: "support@movilc.com",
      privacyPolicyTr:
        "Son güncelleme: 21 Nisan 2026\n\nFiyat Dedektifi, Mobilc tarafından işletilir. Gizlilik iletişimi: support@movilc.com\n\nFiyat Dedektifi; raf etiketleri, fişler, barkodlar, alışveriş listeleri ve harcama takibi üzerinden fiyat karşılaştırması yapmaya yardımcı olan bir mobil uygulamadır. Kullanıma bağlı olarak kamera görüntüleri, fiş veya etiket fotoğrafları, OCR ile çıkarılan metinler, ürün adı, fiyat, market adı, alışveriş listeleri, harcama kayıtları, uygulama tercihleri, bildirim tercihleri, cihaz tanımlayıcıları, uygulama etkinliği ve teknik tanılama verileri işlenebilir.\n\nBu veriler raf etiketi ve fiş fiyatlarını karşılaştırmak, ürünleri eşleştirmek, alışveriş listelerini ve harcama özetlerini göstermek, bildirimleri yönetmek, güvenilirliği artırmak ve destek taleplerine yanıt vermek için kullanılır. Metin tanıma cihaz üzerinde veya desteklenen servislerle yapılabilir; bazı durumlarda OCR sonucunu iyileştirmek için AI destekli servisler kullanılabilir.\n\nÜrün kayıtları, alışveriş listeleri, geçmiş ve tercihler cihazınızda yerel veritabanı veya yerel saklama alanında tutulabilir. Verilerinizi cihaz ayarlarından uygulama verilerini temizleyerek veya uygulamayı kaldırarak silebilirsiniz. Kişisel verilerinizi satmayız.",
      privacyPolicyEn:
        "Last updated: April 21, 2026\n\nPrice Detective is operated by Mobilc. Privacy contact: support@movilc.com\n\nPrice Detective helps compare shelf labels, receipts, barcodes, shopping lists, and spending records. Depending on usage, camera input, receipt or shelf label photos, OCR text, product names, prices, store names, shopping lists, spending records, app preferences, notification preferences, device identifiers, app activity, and technical diagnostics may be processed.\n\nWe use this data to compare shelf and receipt prices, match products, display shopping lists and spending summaries, manage notifications, improve reliability, and respond to support requests. Text recognition may happen on-device or through supported services; in some cases AI-assisted services may be used to improve OCR results.\n\nProduct records, shopping lists, history, and preferences may be stored in a local database or local storage on your device. You can remove this data by clearing app data in device settings or uninstalling the app. We do not sell personal data.",
      termsTr:
        "Son güncelleme: 21 Nisan 2026\n\nFiyat Dedektifi, Mobilc tarafından işletilir. Destek: support@movilc.com\n\nUygulamayı kullanarak bu Kullanım Şartları'nı kabul etmiş olursunuz. Fiyat Dedektifi alışveriş takibi, fiş okuma, barkod tarama ve fiyat karşılaştırma özellikleri sunar. Uygulama yardımcı bilgi sağlar; mağaza, fiyat, kampanya, iade veya yasal haklar konusunda kesin garanti vermez.\n\nOCR ve otomatik eşleştirme sonuçları hatalı olabilir. Önemli kararlar vermeden önce fiş, etiket ve mağaza bilgilerini kendiniz doğrulamalısınız. Uygulamayı kötüye kullanmamayı, tersine mühendislik yapmamayı, otomatik kötüye kullanım oluşturmamayı ve normal işleyişe müdahale etmemeyi kabul edersiniz.\n\nBazı özellikler bildirim, kamera, fotoğraf erişimi veya uygulama mağazası servisleri gerektirebilir. Hizmet olduğu gibi sunulur.",
      termsEn:
        "Last updated: April 21, 2026\n\nPrice Detective is operated by Mobilc. Support: support@movilc.com\n\nBy using the app, you agree to these Terms of Use. Price Detective provides shopping tracking, receipt parsing, barcode scanning, and price comparison features. The app provides helpful information only and does not guarantee store, price, promotion, refund, or legal outcomes.\n\nOCR and automatic matching results may be inaccurate. You should verify receipts, shelf labels, and store information yourself before making important decisions. You agree not to misuse the app, reverse engineer it, automate abuse, or interfere with normal operation.\n\nSome features may require notification, camera, photo access, or app store services. The service is provided as-is.",
      accountDeletionTr:
        "Fiyat Dedektifi temel kullanım için hesap gerektirmez. Yerel ürün kayıtları, alışveriş listeleri ve geçmişi silmek için cihaz ayarlarından uygulama verilerini temizleyebilir veya uygulamayı kaldırabilirsiniz. Destek mesajları veya e-posta ile ilişkili kayıtlar için support@movilc.com adresinden bize ulaşabilirsiniz.",
      accountDeletionEn:
        "Price Detective does not require an account for core use. To remove local product records, shopping lists, and history, clear app data in device settings or uninstall the app. For support messages or records associated with your email, contact support@movilc.com.",
      supportContentTr:
        "Fiyat Dedektifi için destek, hata bildirimi, gizlilik soruları veya geri bildirimlerde support@movilc.com adresinden bize ulaşabilirsiniz.",
      supportContentEn:
        "For Price Detective support, bug reports, privacy questions, or feedback, contact support@movilc.com."
    }
  });

  const priceDetectiveImageCount = await prisma.projectImage.count({ where: { projectId: priceDetective.id } });
  if (priceDetectiveImageCount === 0) {
    await prisma.projectImage.createMany({
      data: [
        { projectId: priceDetective.id, url: "/apps/price-detective/cover.svg", altTr: "Fiyat Dedektifi fiyat karşılaştırma görseli", altEn: "Price Detective price comparison visual", sortOrder: 1 },
        { projectId: priceDetective.id, url: "/apps/price-detective/icon.png", altTr: "Fiyat Dedektifi uygulama ikonu", altEn: "Price Detective app icon", sortOrder: 2 }
      ]
    });
  }

  await prisma.projectFaq.deleteMany({ where: { projectId: priceDetective.id } });
  await prisma.projectFaq.createMany({
    data: [
      {
        projectId: priceDetective.id,
        questionTr: "Fiyat sonuçları kesin midir?",
        questionEn: "Are price results guaranteed?",
        answerTr: "Hayır. OCR ve otomatik eşleştirme yardımcıdır; fiş, etiket ve mağaza bilgilerini her zaman kendiniz doğrulamalısınız.",
        answerEn: "No. OCR and automatic matching are assistive; you should always verify receipts, shelf labels, and store information yourself.",
        sortOrder: 1
      },
      {
        projectId: priceDetective.id,
        questionTr: "Veriler nerede saklanır?",
        questionEn: "Where is data stored?",
        answerTr: "Alışveriş listeleri, ürün kayıtları ve geçmiş öncelikle cihazınızda yerel olarak saklanır.",
        answerEn: "Shopping lists, product records, and history are primarily stored locally on your device.",
        sortOrder: 2
      }
    ]
  });

  await prisma.siteSetting.upsert({
    where: { key: "support_email" },
    update: { value: "support@movilc.com" },
    create: { key: "support_email", value: "support@movilc.com" }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
