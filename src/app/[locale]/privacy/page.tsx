import { notFound } from "next/navigation";
import { isLocale, t } from "@/i18n";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = t(locale);
  return (
    <main className="container py-12">
      <article className="surface max-w-3xl rounded-lg p-8">
        <h1 className="text-4xl font-black">{dict.legal.privacyTitle}</h1>
        <p className="mt-5 leading-8 text-slate-600">{dict.legal.defaultText}</p>
      </article>
    </main>
  );
}
