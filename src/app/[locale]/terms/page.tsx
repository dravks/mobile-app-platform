import type { Metadata } from "next";
import { isLocale, t } from "@/i18n";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "tr" ? "Mobilc Kullanım Şartları" : "Mobilc Terms",
    description: locale === "tr" ? "Mobilc web sitesi için genel kullanım şartları." : "General terms for the Mobilc website."
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = t(locale);

  return (
    <main className="container py-12">
      <article className="surface max-w-4xl rounded-lg p-8">
        <div className="badge mb-4">Mobilc</div>
        <h1 className="text-4xl font-black">{dict.legal.termsTitle}</h1>
        <p className="mt-6 leading-8 text-slate-600">
          {locale === "tr"
            ? "Bu sayfa Mobilc web sitesi için genel kullanım şartlarıdır. Uygulamalara özel kullanım şartları ve destek bağlantıları, ilgili uygulamanın proje sayfasında ayrıca sunulur."
            : "This page contains the general terms for the Mobilc website. App-specific terms and support links are provided separately on each app project page."}
        </p>
      </article>
    </main>
  );
}
