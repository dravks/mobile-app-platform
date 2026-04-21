import { notFound } from "next/navigation";
import { isLocale, t } from "@/i18n";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = t(locale);
  return (
    <main className="container py-16">
      <div className="surface max-w-3xl rounded-lg p-8">
        <h1 className="text-5xl font-black">{dict.about.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{dict.about.text}</p>
      </div>
    </main>
  );
}
