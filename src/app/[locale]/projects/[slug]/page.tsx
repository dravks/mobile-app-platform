import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, t } from "@/i18n";
import { ProjectGallery } from "@/components/public/project-gallery";
import { absoluteUrl, projectFull, projectName, projectShort } from "@/lib/content";
import { getProjectBySlug } from "@/lib/public-projects";

export const dynamic = "force-dynamic";

async function getProject(slug: string) {
  return getProjectBySlug(slug);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: projectName(project, locale),
    description: projectShort(project, locale),
    openGraph: {
      title: projectName(project, locale),
      description: projectShort(project, locale),
      images: project.coverImageUrl ? [project.coverImageUrl] : []
    }
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = await getProject(slug);
  if (!project) notFound();
  const dict = t(locale);
  const links = [
    { label: dict.common.privacy, href: `/${locale}/projects/${project.slug}/privacy` },
    { label: dict.common.terms, href: `/${locale}/projects/${project.slug}/terms` },
    { label: dict.common.deleteAccount, href: `/${locale}/projects/${project.slug}/delete-account` },
    { label: dict.common.support, href: `/${locale}/projects/${project.slug}/support` },
    { label: dict.common.suggestions, href: `/${locale}/projects/${project.slug}/suggestions` }
  ];

  return (
    <main>
      <section className="container grid gap-8 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            {project.logoUrl ? <Image src={project.logoUrl} alt="" width={64} height={64} className="size-16 rounded-lg object-cover" /> : null}
            <span className="badge">{project.category}</span>
          </div>
          <h1 className="text-5xl font-black md:text-6xl">{projectName(project, locale)}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{projectShort(project, locale)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.playStoreUrl ? <Link className="btn btn-primary" href={project.playStoreUrl}>Google Play</Link> : null}
            {project.appStoreUrl ? <Link className="btn btn-primary" href={project.appStoreUrl}>App Store</Link> : null}
            {project.websiteUrl ? <Link className="btn btn-secondary" href={project.websiteUrl}>Website</Link> : null}
          </div>
        </div>
        <div className="surface overflow-hidden rounded-lg bg-slate-100">
          {project.coverImageUrl ? (
            <div className="relative h-[520px] p-4 sm:h-[620px] lg:h-[560px]">
              <Image
                src={project.coverImageUrl}
                alt={projectName(project, locale)}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={95}
                priority
                className="object-contain"
              />
            </div>
          ) : (
            <div className="grid h-[420px] place-items-center bg-slate-100 text-4xl font-black">{projectName(project, locale)}</div>
          )}
        </div>
      </section>

      <section className="container grid gap-6 py-8 lg:grid-cols-[1fr_360px]">
        <article className="surface rounded-lg p-7">
          <h2 className="text-3xl font-black">{dict.project.features}</h2>
          <p className="mt-4 whitespace-pre-line leading-8 text-slate-600">{projectFull(project, locale)}</p>
        </article>
        <aside className="surface rounded-lg p-6">
          <h2 className="text-xl font-black">{dict.project.documents}</h2>
          <div className="mt-4 grid gap-3">
            {links.map((link) => (
              <div key={link.href} className="rounded-lg border border-slate-200 p-3">
                <Link className="font-bold text-slate-900" href={link.href}>
                  {link.label}
                </Link>
                <div className="mt-1 break-all text-xs text-slate-500">{absoluteUrl(link.href)}</div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {project.images.length ? <ProjectGallery images={project.images} locale={locale} title={dict.project.gallery} /> : null}

      {project.faqEnabled && project.faqs.length ? (
        <section className="container py-8">
          <h2 className="mb-5 text-3xl font-black">{dict.common.faq}</h2>
          <div className="grid gap-3">
            {project.faqs.map((faq) => (
              <details key={faq.id} className="surface rounded-lg p-5">
                <summary className="cursor-pointer font-black">{locale === "tr" ? faq.questionTr : faq.questionEn}</summary>
                <p className="mt-3 leading-7 text-slate-600">{locale === "tr" ? faq.answerTr : faq.answerEn}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
