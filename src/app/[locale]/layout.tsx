import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLocale, t, type Locale } from "@/i18n";
import { SiteFooter } from "@/components/public/site-footer";
import { SiteHeader } from "@/components/public/site-header";

export function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = t(locale);
  return {
    title: {
      default: dict.meta.title,
      template: `%s | ${dict.meta.title}`
    },
    description: dict.meta.description,
    alternates: {
      languages: {
        tr: "/tr",
        en: "/en"
      }
    }
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <SiteHeader locale={locale as Locale} />
      {children}
      <SiteFooter locale={locale as Locale} />
    </>
  );
}
