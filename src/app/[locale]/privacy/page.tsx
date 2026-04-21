import type { Metadata } from "next";
import { isLocale, t } from "@/i18n";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "tr" ? "Mobilc Gizlilik Bilgilendirmesi" : "Mobilc Privacy Notice",
    description: locale === "tr" ? "Mobilc web sitesi için genel gizlilik bilgilendirmesi." : "General privacy notice for the Mobilc website."
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = t(locale);

  return (
    <main className="container py-12">
      <article className="surface max-w-4xl rounded-lg p-8">
        <div className="badge mb-4">Mobilc</div>
        <h1 className="text-4xl font-black">{dict.legal.privacyTitle}</h1>
        <p className="mt-6 leading-8 text-slate-600">
          {locale === "tr"
            ? "Bu sayfa Mobilc web sitesi için genel gizlilik bilgilendirmesidir. Uygulamalara özel gizlilik politikaları, ilgili uygulamanın proje sayfasında ve mağaza uyumluluk bağlantılarında ayrıca sunulur."
            : "This page is the general privacy notice for the Mobilc website. App-specific privacy policies are provided separately on each app project page and store compliance link."}
        </p>
      </article>
    </main>
  );
}
