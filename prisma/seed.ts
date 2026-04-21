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

  await prisma.project.deleteMany({
    where: {
      slug: {
        in: ["photo-puzzle-studio", "habit-light"]
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

  await prisma.projectImage.deleteMany({ where: { projectId: project.id } });
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
        url: "/apps/fall-in-mina/tarot-moon.png",
        altTr: "Fall in Mina tarot ay kartı",
        altEn: "Fall in Mina tarot moon card",
        sortOrder: 2
      },
      {
        projectId: project.id,
        url: "/apps/fall-in-mina/tarot-sun.png",
        altTr: "Fall in Mina tarot güneş kartı",
        altEn: "Fall in Mina tarot sun card",
        sortOrder: 3
      },
      {
        projectId: project.id,
        url: "/apps/fall-in-mina/playstore.png",
        altTr: "Fall in Mina mağaza görseli",
        altEn: "Fall in Mina store artwork",
        sortOrder: 4
      }
    ]
  });

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
