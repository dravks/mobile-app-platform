import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/public/project-card";
import { isLocale, t } from "@/i18n";
import { getFeaturedProjects } from "@/lib/public-projects";

export const dynamic = "force-dynamic";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = t(locale);
  const projects = await getFeaturedProjects();

  return (
    <main>
      <section className="container grid min-h-[calc(100vh-64px)] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="badge mb-5">{dict.home.eyebrow}</div>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.04] tracking-normal md:text-7xl">{dict.home.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{dict.home.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href={`/${locale}/projects`}>
              {dict.home.cta}
            </Link>
            <Link className="btn btn-secondary" href={`/${locale}/support`}>
              {dict.home.secondary}
            </Link>
          </div>
        </div>
        <div className="surface overflow-hidden rounded-lg">
          <div className="h-80 bg-[linear-gradient(135deg,#0f4f63,#176b87_45%,#d97706)] p-6 text-white">
            <div className="grid h-full content-between">
              <div className="text-sm font-bold opacity-80">Platform Overview</div>
              <div>
                <div className="text-5xl font-black">{projects.length}+</div>
                <div className="mt-2 max-w-xs text-lg font-bold">featured mobile app projects ready for store support flows</div>
              </div>
            </div>
          </div>
          <div className="grid gap-3 p-5">
            {projects.map((project) => (
              <div key={project.id} className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
                <span className="font-bold">{locale === "tr" ? project.nameTr : project.nameEn}</span>
                <span className="badge">{project.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-6 py-10 md:grid-cols-3">
        <div className="surface rounded-lg p-6 md:col-span-2">
          <h2 className="text-3xl font-black">{dict.home.introTitle}</h2>
          <p className="mt-4 leading-7 text-slate-600">{dict.home.introText}</p>
        </div>
        <div className="surface rounded-lg p-6">
          <h2 className="text-2xl font-black">{dict.home.valuesTitle}</h2>
          <ul className="mt-4 grid gap-3 text-sm font-bold text-slate-700">
            {dict.home.values.map((item) => (
              <li key={item} className="rounded-lg bg-slate-50 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container py-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black">{dict.nav.projects}</h2>
            <p className="mt-2 text-slate-600">{dict.projects.subtitle}</p>
          </div>
          <Link className="btn btn-secondary" href={`/${locale}/projects`}>
            {dict.common.viewProject}
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} locale={locale} />
          ))}
        </div>
      </section>

      <section className="container py-10">
        <div className="surface rounded-lg p-8">
          <h2 className="text-3xl font-black">{dict.home.trustTitle}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">{dict.home.trustText}</p>
          <p className="mt-6 text-xl font-black">{dict.home.finalCta}</p>
        </div>
      </section>
    </main>
  );
}
