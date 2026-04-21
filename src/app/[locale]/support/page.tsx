import Link from "next/link";
import { notFound } from "next/navigation";
import { FormNotice, SupportForm } from "@/components/public/forms";
import { isLocale, t } from "@/i18n";
import { projectName } from "@/lib/content";
import { getPublishedProjects } from "@/lib/public-projects";

export const dynamic = "force-dynamic";

export default async function SupportPage({
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
  const projects = await getPublishedProjects();

  return (
    <main className="container grid gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <h1 className="text-5xl font-black">{dict.support.title}</h1>
        <p className="mt-4 leading-7 text-slate-600">{dict.support.text}</p>
        <div className="mt-6 grid gap-3">
          {projects.map((project) => (
            <Link key={project.id} className="surface rounded-lg p-4 font-bold" href={`/${locale}/projects/${project.slug}/support`}>
              {projectName(project, locale)}
            </Link>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        <FormNotice locale={locale} success={state.success} error={state.error} />
        <SupportForm locale={locale} redirectTo={`/${locale}/support`} />
      </div>
    </main>
  );
}
