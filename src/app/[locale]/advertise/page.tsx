import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, t } from "@/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "tr" ? "Mobilc Reklam ve İş Birliği" : "Advertise with Mobilc",
    description:
      locale === "tr"
        ? "Mobilc uygulamalarında reklam, sponsorlu görünürlük ve iş birliği talepleri."
        : "Advertising, sponsored visibility, and partnership requests for Mobilc apps."
  };
}

export default async function AdvertisePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = t(locale);

  return (
    <main>
      <section className="container grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="badge mb-4">Mobilc</div>
          <h1 className="text-5xl font-black leading-tight">{dict.advertise.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{dict.advertise.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="mailto:support@movilc.com">
              support@movilc.com
            </Link>
            <Link className="btn btn-secondary" href={`/${locale}/contact`}>
              {dict.nav.contact}
            </Link>
          </div>
        </div>
        <div className="surface rounded-lg p-7">
          <h2 className="text-2xl font-black">{locale === "tr" ? "Nasıl değerlendiriyoruz?" : "How we evaluate requests"}</h2>
          <p className="mt-4 leading-8 text-slate-600">{dict.advertise.intro}</p>
          <div className="mt-6 grid gap-3">
            {dict.advertise.rules.map((rule) => (
              <div key={rule} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="grid size-8 place-items-center rounded-lg bg-[#176b87] text-sm font-black text-white">✓</span>
                <span className="font-bold text-slate-800">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container pb-14">
        <div className="rounded-lg bg-slate-950 p-8 text-white">
          <h2 className="text-3xl font-black">{locale === "tr" ? "Teklif gönder" : "Send a proposal"}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/72">{dict.advertise.contact}</p>
        </div>
      </section>
    </main>
  );
}
