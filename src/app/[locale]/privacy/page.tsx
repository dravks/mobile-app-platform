import type { Metadata } from "next";
import { isLocale } from "@/i18n";
import { AppLegalPage } from "@/components/public/legal-page";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "tr" ? "Fall in Mina Gizlilik Politikası" : "Fall in Mina Privacy Policy",
    description: locale === "tr" ? "Mobilc tarafından işletilen Fall in Mina için gizlilik politikası." : "Privacy Policy for Fall in Mina, operated by Mobilc."
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <AppLegalPage locale={locale} type="privacy" />;
}
