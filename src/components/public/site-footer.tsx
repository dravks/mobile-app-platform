import Link from "next/link";
import { Locale, t } from "@/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = t(locale);

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="mb-3 text-lg font-black">Mobilc</div>
          <p className="max-w-md text-sm leading-6 text-slate-600">{dict.meta.description}</p>
        </div>
        <div className="grid gap-3 text-sm">
          <strong>{dict.nav.projects}</strong>
          <Link href={`/${locale}/projects`}>{dict.nav.projects}</Link>
          <Link href={`/${locale}/support`}>{dict.nav.support}</Link>
          <Link href={`/${locale}/contact`}>{dict.nav.contact}</Link>
        </div>
        <div className="grid gap-3 text-sm">
          <strong>{dict.common.policyLinks}</strong>
          <Link href={`/${locale}/privacy`}>{dict.common.privacy}</Link>
          <Link href={`/${locale}/terms`}>{dict.common.terms}</Link>
        </div>
      </div>
    </footer>
  );
}
