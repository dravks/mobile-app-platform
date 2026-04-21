import { notFound } from "next/navigation";
import { FormNotice, SupportForm } from "@/components/public/forms";
import { isLocale, t } from "@/i18n";

export default async function ContactPage({
  params,
  searchParams
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ success?: string; error?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const state = await searchParams;
  const dict = t(locale);
  return (
    <main className="container grid gap-6 py-12 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <h1 className="text-5xl font-black">{dict.forms.contactTitle}</h1>
        <p className="mt-4 leading-7 text-slate-600">{dict.support.text}</p>
      </div>
      <div className="grid gap-4">
        <FormNotice locale={locale} success={state.success} error={state.error} />
        <SupportForm locale={locale} redirectTo={`/${locale}/contact`} title={dict.forms.contactTitle} />
      </div>
    </main>
  );
}
