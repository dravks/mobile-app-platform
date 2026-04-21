import { PrismaClient, ProjectStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@example.com";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "change-me-now";

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: "Platform Admin",
      passwordHash: await bcrypt.hash(adminPassword, 12)
    }
  });

  const projects = [
    {
      slug: "coffee-fortune",
      nameTr: "Kahve Falı Studio",
      nameEn: "Coffee Fortune Studio",
      shortDescriptionTr: "Kişiselleştirilmiş kahve falı deneyimleri sunan zarif mobil uygulama.",
      shortDescriptionEn: "A polished mobile app for personalized coffee fortune experiences.",
      fullDescriptionTr:
        "Kahve Falı Studio, kullanıcıların fincan fotoğrafları üzerinden eğlenceli, anlaşılır ve modern bir fal deneyimi yaşamasını sağlar. Uygulama net yönlendirmeler, hızlı sonuç akışı ve sade arayüzüyle günlük kullanım için tasarlanmıştır.",
      fullDescriptionEn:
        "Coffee Fortune Studio helps users enjoy a playful, clear, and modern fortune experience from cup photos. It is designed for everyday use with focused guidance, fast result flows, and a calm interface.",
      category: "Lifestyle",
      featured: true,
      logoUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80",
      coverImageUrl: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=80",
      supportEmail: "support@coffeefortune.app",
      playStoreUrl: "https://play.google.com/store",
      privacyPolicyTr: "Kahve Falı Studio, yalnızca hizmeti sunmak için gerekli kullanıcı verilerini işler. Fotoğraflar analiz ve destek süreçleri dışında kullanılmaz.",
      privacyPolicyEn: "Coffee Fortune Studio processes only the user data required to provide the service. Photos are not used outside analysis and support flows.",
      termsTr: "Uygulamayı kullanarak eğlence amaçlı içerik üretildiğini ve sonuçların profesyonel tavsiye yerine geçmediğini kabul edersiniz.",
      termsEn: "By using the app, you accept that generated content is for entertainment and does not replace professional advice.",
      accountDeletionTr: "Hesabınızı silmek için uygulama içindeki ayarlar ekranını kullanabilir veya destek e-postasına talep gönderebilirsiniz.",
      accountDeletionEn: "You can delete your account from the in-app settings screen or send a request to the support email.",
      supportContentTr: "Kahve Falı Studio için destek taleplerinizi aşağıdaki formdan iletebilirsiniz.",
      supportContentEn: "Use the form below to send support requests for Coffee Fortune Studio."
    },
    {
      slug: "photo-puzzle-studio",
      nameTr: "Foto Puzzle Studio",
      nameEn: "Photo Puzzle Studio",
      shortDescriptionTr: "Kendi fotoğraflarınızdan rahatlatıcı puzzle oyunları oluşturun.",
      shortDescriptionEn: "Create relaxing puzzle games from your own photos.",
      fullDescriptionTr:
        "Foto Puzzle Studio, kişisel fotoğrafları keyifli puzzle seviyelerine dönüştürür. Farklı zorluklar, günlük meydan okumalar ve sade ilerleme ekranlarıyla uzun ömürlü bir oyun deneyimi sunar.",
      fullDescriptionEn:
        "Photo Puzzle Studio turns personal photos into enjoyable puzzle levels. Multiple difficulties, daily challenges, and clear progress screens create a durable game experience.",
      category: "Game",
      featured: true,
      logoUrl: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=400&q=80",
      coverImageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=1600&q=80",
      supportEmail: "support@photopuzzle.app",
      appStoreUrl: "https://www.apple.com/app-store/",
      privacyPolicyTr: "Foto Puzzle Studio, cihaz fotoğraflarınızı yalnızca seçtiğiniz puzzle deneyimini oluşturmak için kullanır.",
      privacyPolicyEn: "Photo Puzzle Studio uses device photos only to create the puzzle experience you choose.",
      termsTr: "Uygulamayı kullanırken yüklediğiniz içeriklerden siz sorumlusunuz.",
      termsEn: "You are responsible for the content you choose to use in the app.",
      accountDeletionTr: "Hesap silme talepleri destek ekibine e-posta veya destek formu üzerinden iletilebilir.",
      accountDeletionEn: "Account deletion requests can be sent to support by email or through the support form.",
      supportContentTr: "Oyun ilerlemesi, premium özellikler veya teknik sorunlar için bize ulaşın.",
      supportContentEn: "Contact us about game progress, premium features, or technical issues."
    },
    {
      slug: "habit-light",
      nameTr: "Habit Light",
      nameEn: "Habit Light",
      shortDescriptionTr: "Basit alışkanlık takibi ve odaklanmış günlük rutinler.",
      shortDescriptionEn: "Simple habit tracking and focused daily routines.",
      fullDescriptionTr:
        "Habit Light, karmaşık raporlar yerine net rutinler, hatırlatmalar ve haftalık ilerleme odağıyla alışkanlık kazanmayı kolaylaştırır.",
      fullDescriptionEn:
        "Habit Light makes habit building easier with clear routines, reminders, and weekly progress instead of complex reports.",
      category: "Productivity",
      featured: false,
      logoUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&q=80",
      coverImageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
      supportEmail: "hello@habitlight.app",
      privacyPolicyTr: "Habit Light, alışkanlık kayıtlarınızı güvenli biçimde saklar ve üçüncü taraflara satmaz.",
      privacyPolicyEn: "Habit Light stores habit records securely and does not sell them to third parties.",
      termsTr: "Habit Light kişisel üretkenlik desteği sunar ve tıbbi veya profesyonel danışmanlık amacı taşımaz.",
      termsEn: "Habit Light provides personal productivity support and is not medical or professional advice.",
      accountDeletionTr: "Hesabınızı silmek için destek formundan talep oluşturabilirsiniz.",
      accountDeletionEn: "You can submit an account deletion request through the support form.",
      supportContentTr: "Habit Light ile ilgili öneri ve destek taleplerinizi bekliyoruz.",
      supportContentEn: "We welcome support requests and suggestions for Habit Light."
    }
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: {
        ...project,
        status: ProjectStatus.PUBLISHED,
        images: {
          create: [
            {
              url: project.coverImageUrl,
              altTr: `${project.nameTr} ekran görüntüsü`,
              altEn: `${project.nameEn} screenshot`,
              sortOrder: 1
            }
          ]
        },
        faqs: {
          create: [
            {
              questionTr: "Destek ekibine nasıl ulaşabilirim?",
              questionEn: "How can I contact support?",
              answerTr: "Bu web sitesindeki destek formunu kullanabilir veya uygulama destek e-postasına yazabilirsiniz.",
              answerEn: "You can use the support form on this website or email the app support address.",
              sortOrder: 1
            },
            {
              questionTr: "Gizlilik politikası nerede?",
              questionEn: "Where is the privacy policy?",
              answerTr: "Her uygulamanın kendine ait gizlilik politikası sayfası proje detayında yer alır.",
              answerEn: "Each app has its own privacy policy page linked from the project detail page.",
              sortOrder: 2
            }
          ]
        }
      }
    });
  }

  await prisma.siteSetting.upsert({
    where: { key: "support_email" },
    update: { value: "hello@appstudio.example" },
    create: { key: "support_email", value: "hello@appstudio.example" }
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
