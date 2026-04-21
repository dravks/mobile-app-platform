import Link from "next/link";
import { Locale, otherLocale, t } from "@/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const dict = t(locale);
  const switchLocale = otherLocale(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/86 backdrop-blur">
      <div className="container flex min-h-16 items-center justify-between gap-4">
        <Link href={`/${locale}`} className="flex items-center gap-3 font-black">
          <span className="grid size-9 place-items-center rounded-lg bg-slate-950 text-white">M</span>
          <span>Mobilc</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-slate-600 md:flex">
          <Link href={`/${locale}`}>{dict.nav.home}</Link>
          <Link href={`/${locale}/projects`}>{dict.nav.projects}</Link>
          <Link href={`/${locale}/about`}>{dict.nav.about}</Link>
          <Link href={`/${locale}/advertise`}>{dict.nav.advertise}</Link>
          <Link href={`/${locale}/support`}>{dict.nav.support}</Link>
          <Link href={`/${locale}/contact`}>{dict.nav.contact}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href={`/${switchLocale}`} className="btn btn-secondary min-h-9 px-3 text-sm uppercase">
            {switchLocale}
          </Link>
          <Link href="/admin" className="btn btn-primary min-h-9 px-3 text-sm">
            {dict.nav.admin}
          </Link>
        </div>
      </div>
    </header>
  );
}
