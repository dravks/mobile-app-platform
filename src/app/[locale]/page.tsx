import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/public/project-card";
import { isLocale, t } from "@/i18n";
import { projectName, projectShort } from "@/lib/content";
import { getFeaturedProjects } from "@/lib/public-projects";

export const dynamic = "force-dynamic";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = t(locale);
  const projects = await getFeaturedProjects();
  const featuredProject = projects[0];
  const featuredProjectHref = featuredProject ? `/${locale}/projects/${featuredProject.slug}` : `/${locale}/projects`;

  return (
    <main>
      <section className="container grid items-center gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:py-20">
        <div>
          <div className="badge mb-5">{dict.home.eyebrow}</div>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-normal md:text-7xl">{dict.home.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{dict.home.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href={`/${locale}/projects`}>
              {dict.home.cta}
            </Link>
            <Link className="btn btn-secondary" href={featuredProjectHref}>
              {dict.home.secondary}
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="text-2xl font-black">{projects.length}</div>
              <div className="mt-1 text-xs font-bold uppercase text-slate-500">{locale === "tr" ? "Yayındaki uygulama" : "Published apps"}</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="text-2xl font-black">TR/EN</div>
              <div className="mt-1 text-xs font-bold uppercase text-slate-500">{locale === "tr" ? "Çift dil" : "Bilingual"}</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="text-2xl font-black">Store</div>
              <div className="mt-1 text-xs font-bold uppercase text-slate-500">{locale === "tr" ? "Hazır linkler" : "Ready links"}</div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[560px] overflow-hidden rounded-lg bg-slate-950 p-6 text-white shadow-2xl">
          {featuredProject?.coverImageUrl ? (
            <Image src={featuredProject.coverImageUrl} alt={projectName(featuredProject, locale)} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover opacity-60" />
          ) : null}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18),rgba(15,23,42,0.92))]" />
          <div className="relative z-10 flex min-h-[512px] flex-col justify-between">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-black uppercase tracking-normal text-white/80">Mobilc Release</div>
              <span className="rounded-lg bg-white/10 px-3 py-2 text-xs font-black text-white backdrop-blur">{locale === "tr" ? "Resmi uygulama sayfası" : "Official app page"}</span>
            </div>
            <div>
              {featuredProject?.logoUrl ? (
                <Image src={featuredProject.logoUrl} alt="" width={72} height={72} className="mb-5 size-18 rounded-lg object-cover ring-1 ring-white/30" />
              ) : null}
              <h2 className="max-w-lg text-4xl font-black">{featuredProject ? projectName(featuredProject, locale) : "Mobilc"}</h2>
              <p className="mt-4 max-w-md leading-7 text-white/80">{featuredProject ? projectShort(featuredProject, locale) : dict.meta.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link className="btn bg-white text-slate-950" href={featuredProjectHref}>
                  {dict.common.viewProject}
                </Link>
                <Link className="btn border border-white/25 bg-white/10 text-white" href="/privacy">
                  {dict.common.privacy}
                </Link>
                <Link className="btn border border-white/25 bg-white/10 text-white" href="/support">
                  {dict.common.support}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container grid gap-8 py-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="badge mb-4">Mobilc</div>
            <h2 className="text-4xl font-black">{dict.home.introTitle}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">{dict.home.introText}</p>
          </div>
          <div className="grid gap-3">
            {dict.home.values.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="grid size-8 place-items-center rounded-lg bg-[#176b87] text-sm font-black text-white">✓</span>
                <span className="font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-black">{dict.projects.title}</h2>
            <p className="mt-2 max-w-2xl text-slate-600">{dict.projects.subtitle}</p>
          </div>
          <Link className="btn btn-secondary" href={`/${locale}/projects`}>
            {dict.common.all}
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} locale={locale} />
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="badge mb-4 bg-white/10 text-white">{dict.home.trustTitle}</div>
            <h2 className="text-4xl font-black">{locale === "tr" ? "Mağaza linkleri net, destek akışı düzenli." : "Clear store links, organized support flow."}</h2>
            <p className="mt-4 leading-8 text-white/70">{dict.home.trustText}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: dict.common.privacy, href: "/privacy" },
              { label: dict.common.terms, href: "/terms" },
              { label: dict.common.support, href: "/support" },
              { label: dict.common.deleteAccount, href: `/${locale}/projects/coffee-fortune/delete-account` }
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg border border-white/10 bg-white/[0.07] p-5 transition hover:bg-white/10">
                <div className="text-lg font-black">{item.label}</div>
                <div className="mt-2 break-all text-sm text-white/60">movilc.com{item.href}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <div>
          <h2 className="text-3xl font-black">{dict.home.introTitle}</h2>
          <p className="mt-4 leading-7 text-slate-600">{dict.home.introText}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-2xl font-black">{dict.home.finalCta}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className="btn btn-primary" href={`/${locale}/projects`}>
                {dict.home.cta}
              </Link>
              <Link className="btn btn-secondary" href={`/${locale}/contact`}>
                {dict.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
