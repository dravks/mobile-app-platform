import { notFound } from "next/navigation";
import { FormNotice, SupportForm } from "@/components/public/forms";
import { isLocale, t } from "@/i18n";
import { projectName, projectPolicy } from "@/lib/content";
import { getProjectBySlug } from "@/lib/public-projects";

export const dynamic = "force-dynamic";

export default async function ProjectSupportPage({
  params,
  searchParams
}: {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ success?: string; error?: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const state = await searchParams;
  const project = await getProjectBySlug(slug);
  if (!project || !project.supportEnabled) notFound();
  return (
    <main className="container grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <div className="badge mb-4">{projectName(project, locale)}</div>
        <h1 className="text-4xl font-black">{t(locale).common.support}</h1>
        <p className="mt-5 whitespace-pre-line leading-8 text-slate-600">{projectPolicy(project, locale, "support")}</p>
      </div>
      <div className="grid gap-4">
        <FormNotice locale={locale} success={state.success} error={state.error} />
        <SupportForm locale={locale} projectId={project.id} redirectTo={`/${locale}/projects/${project.slug}/support`} />
      </div>
    </main>
  );
}
